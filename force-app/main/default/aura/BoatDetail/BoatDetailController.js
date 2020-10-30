({
	init : function(component, event, helper) {
        var redirectToSObjectPageEvent=$A.get("e.force:navigateToSObject");
        if(redirectToSObjectPageEvent){
            component.set("v.displaybutton",true);
        }
	},
    
    onFullDetails : function(component, event, helper) {
        var boat = component.get("v.boat");
        console.log('boat id = '+boat.Id); 
        var redirectEvent = $A.get("e.force:navigateToSObject");
        if (redirectEvent && boat) {
            redirectEvent.setParams({
                "recordId": boat.Id
            });
            redirectEvent.fire();
        }
    },
    
   
})