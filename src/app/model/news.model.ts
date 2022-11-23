import { BloodBank } from "./blood-bank.model";

export class News {
    
    id: string = '';
    bloodBank: BloodBank = {
        name: "",
        serverAddress: "",
        emailAddress: "",
        password: "",
        apiKey: ""
    };
    title: string = '';
    body: string = '';    
    timestamp: number = 0;
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.bloodBank = obj.bloodBank;
            this.title = obj.title;
            this.body = obj.body;
            this.timestamp = obj.timestamp;
        }
    }
}
