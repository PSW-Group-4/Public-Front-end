export class BloodBank {
    name: String ='';
    serverAddress: string = '';
    emailAddress: string = '';
    password: string = '1';
    apiKey: string = '1';

    public constructor(obj?: any) {
        if (obj) {
            this.emailAddress = obj.emailAddress;
            this.name = obj.name;    
            this.serverAddress = obj.serverAddress;    
        }
    }
}