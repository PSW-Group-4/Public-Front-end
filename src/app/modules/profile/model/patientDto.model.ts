export class PatientDto {
  allergies: string[] = [];
  choosenDoctor = {};
  address = {};
  bloodType: number = 1;
  choosenDoctorId: string = '';
  id: string = '';
  name: string = '';
  surname: string = '';
  birthdate: string = '';
  gender: number = 0;
  addressId: string = '';
  jmbg: string = '';
  email: string = '';
  phoneNumber: string = '';

  public constructor(obj?: any) {
    if (obj) {
      this.allergies = obj.allergies;
      this.choosenDoctor = obj.chosedDoctor;
      this.address = obj.address;
      this.bloodType = obj.bloodType;
      this.choosenDoctorId = obj.choosenDoctorId;
      this.id = obj.id;
      this.name = obj.name;
      this.surname = obj.surname;
      this.birthdate = obj.birthdate;
      this.gender = obj.gender;
      this.addressId = obj.addressId;
      this.jmbg = obj.jmbg;
      this.email = obj.email;
      this.phoneNumber = obj.phoneNumber;
    }
  }
}
