export class BloodType {
    bloodGroup: number = 0;
    rhFactor: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            
        this.bloodGroup = obj.bloodGroup;
        this.rhFactor = obj.rhFactor;
            
        }
    }
}