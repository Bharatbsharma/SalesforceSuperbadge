({
	onBoatSelected : function(component, event, helper) {
		var data=event.getParam("boat");
        console.log('***data***'+data);
        
        component.set('v.id',data);
        component.find("service").reloadRecord();
	},
    
    onRecordUpdated :function(component, event, helper) {
         component.find("service").reloadRecord();  
    },   
    
    onBoatReviewAdded: function(component, event, helper) {
    	component.set('v.selectedTabId', 'boatreviewtab');
        var boatreviewcomponent = component.find("boatreviewcomponent");
        console.log('boatreviewcomponent*****'+boatreviewcomponent);
          if(boatreviewcomponent){
            boatreviewcomponent.refresh();
        }
	}
})