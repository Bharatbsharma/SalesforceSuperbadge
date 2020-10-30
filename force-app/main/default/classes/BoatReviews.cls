public class BoatReviews {
	
    @AuraEnabled 
    public static List<BoatReview__c> getAll() {
        return [Select Id,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName from BoatReview__c ];
    }
}