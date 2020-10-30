({
    doInit : function(component, event, helper) {
        helper.onInit(component,event);
    },
    
    onSave: function(component,event,helper){
        component.find("service").saveRecord(function(saveResult){
            if(saveResult.state==="SUCCESS" || saveResult.state=="DRAFT"){
                var resultsToast=$A.get("e.force:showToast");
                if(resultsToast==undefined){
                    alert("The record was saved.");    
                }else{
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    })
                    
                    resultsToast.fire();
                    helper.onInit(component); 
                    component.getEvent('BoatReviewAdded').fire();
                }
            }else if(saveResult.state==='INCOMPLETE'){
                console.log("User is offline, device doesn't support drafts.");
            }else if(saveResult.state === "ERROR"){
                console.log('Problem saving contact, error: ' +JSON.stringify(saveResult.error));
            }else{
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
    
    onRecordUpdated: function(component, event, helper){
        
    },
    
    
})