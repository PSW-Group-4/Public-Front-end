export class ApplyForTenderDto {
    bloodBankId: string = '';
    tenderId: string = '';
    priceInRSD : number = 0;
    public constructor(obj?: any) {
        if (obj) {
            this.bloodBankId = obj.bloodBankId;
            this.tenderId = obj.tenderId;   
            this.priceInRSD = obj.priceInRSD;   
        }
    }
}