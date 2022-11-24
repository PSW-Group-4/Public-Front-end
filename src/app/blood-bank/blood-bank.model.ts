export class BloodBank {
    Id: String = '';
    Name: String ='';
    ServerAddress: string = '';
    EmailAddress: string = '';
    password: string = '';
    ApiKey: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.EmailAddress = obj.EmailAddress;
            this.Name = obj.Name;    
            this.ServerAddress = obj.ServerAddress;
            this.password = obj.password;
            this.ApiKey = obj.ApiKey;    
        }
    }
}