({
    doInit : function(component, event, helper) {
        var data=component.get("v.boat");
        console.log('data'+data);
    },
    
    onBoatClick:function(component,event,helper){
        var data=event.getSource().get("v.value");
        console.log('****data'+data);
        var BoatSelect=component.getEvent('BoatSelect');
        
        BoatSelect.setParams({
            "boatId":data
        });
        
        BoatSelect.fire();
        
        //details of tiles
        var boatselected = $A.get("e.c:BoatSelected");
        console.log('****boatselected'+boatselected);
        boatselected.setParams({
            "boat" : data
        });
        boatselected.fire();
        
        
        var plotMapMarkerEvent=$A.get("e.c:PlotMapMarker");
        
        plotMapMarkerEvent.setParams({
            "sObjectId" : selectedBoat.Id,
            "lat" : selectedBoat.Geolocation__Latitude__s,
            "long" : selectedBoat.Geolocation__Longitude__s,
            "label" : selectedBoat.Name
        });
        
        plotMapMarkerEvent.fire();
    }
})