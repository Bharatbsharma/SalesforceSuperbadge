({
    doInit : function(component, event, helper) {
        helper.LoadBoatTypes(component, event);
        var selectedBoatType=component.get('v.selectedBoatType');
        var isEnabled=$A.get("e.force:createRecord");
        console.log('*'+isEnabled);
        if(isEnabled){
            component.set("v.isNewButtonAvailable",true);
        }
    },
    
    onboatTypechange:function(component,event,helper){
    	component.set(v.selectedBoatType,component.find("boatTypes").get("v.value"));
        console.log('***'+component.get("v.selectedBoatType"));
	},
    
    createBoat: function(component,event,helper){
    var boatTypeId=component.get('v.selectedBoatType');
    var createRecordEvent=$A.get("e.force:createRecord");
    createRecordEvent.setParams({
    	 "entityApiName":"Boat__c",
         "defaultFieldValues": {'BoatType__c': boatTypeId}
	});
	createRecordEvent.fire();
	},
    
    onFormSubmit:function(component,event,helper){
        var boatTypeId=component.find("boatTypes").get("v.value");
        var data={"boatTypeId":boatTypeId};
        var formsubmit=component.getEvent("formsubmit");
        console.log('formSubmit'+formsubmit)
        formsubmit.setParams({
            "formData":data
        });
        formsubmit.fire();
    }
})