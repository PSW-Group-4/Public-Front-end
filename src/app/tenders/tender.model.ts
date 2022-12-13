export class Tender {
    bloodProduct: any[] = [];
    ammount: number =0;

    public constructor(obj?: any) {
        if (obj) {
            this.bloodProduct = obj.bloodProduct;
            this.ammount = obj.ammount;      
        }
    }
}
