public class BoatSearchResults {
	
    @AuraEnabled
    public static list<BoatType__c> getBoatType(){
        return [Select id,name from BoatType__c];
    }
    
    @AuraEnabled 
    public static list<Boat__c> getBoats(String boatTypeId){
        
        if(boatTypeId==null || boatTypeId==''){
            return [select Id,Name,Picture__c,BoatType__c,Contact__c from Boat__c];
        }else{
             return [select Id,Name,Picture__c,BoatType__c,Contact__c from Boat__c where BoatType__c=:boatTypeId];
        }
    }
}