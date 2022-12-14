import { Blood } from "./blood.model";

export class Tender {
    blood: Blood[] = [];
    deadline: Date | undefined;
    id : string = '';
    public constructor(obj?: any) {
        if (obj) {
            this.blood = obj.blood;
            this.deadline = obj.deadline;   
            this.id = obj.id;   
        }
    }
}
