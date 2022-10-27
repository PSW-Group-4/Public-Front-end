export class FeedbacksPublic {

  text: string = "";
  date: Date = new Date();
  patientName: string = "aaaa";

    public constructor(obj?: any) {
        if (obj) {
            this.text = obj.text;
          this.date = obj.date;
          this.patientName = "aaaaa";
          alert(this.patientName);
        }
    }
}
