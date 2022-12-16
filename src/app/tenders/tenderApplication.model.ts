export class ApplyForTenderDto {
    bloodBank: string | null = '';
    tenderId: string = '';
    priceInRSD : number = 0;
    public constructor(obj?: any) {
        if (obj) {
            this.bloodBank = obj.bloodBankId;
            this.tenderId = obj.tenderId;
            this.priceInRSD = obj.priceInRSD;
        }
    }
}
