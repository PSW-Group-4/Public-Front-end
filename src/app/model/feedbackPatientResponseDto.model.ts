export class FeedbackPatientResponseDto {

  text: string = "";
  date: Date = new Date();
  patientFullname: string = "aaaa";

    public constructor(obj?: any) {
        if (obj) {
          this.text = obj.text;
          this.date = obj.date;
          this.patientFullname = obj.patientFullname;

        }
    }
}
