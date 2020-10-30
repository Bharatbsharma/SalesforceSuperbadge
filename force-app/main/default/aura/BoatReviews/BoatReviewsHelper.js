({
	onInit : function(component, event) {
		var boatId=component.get("v.boat").Id;
        console.log('boatId'+boatId);
        var action=component.get("c.getAll");
		action.setParams({"boatId":boatId});
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){ 
                var temp=response.getReturnValue();
                component.set("v.boatReviews",temp);
                console.log("BoatReviews received :"+temp);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
        
	}
})