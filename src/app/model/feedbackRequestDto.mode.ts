export class FeedbackRequestDto {

  text: string = "";
  isAnonimous: boolean = false;
  isDesiredPublic: boolean = false;


    public constructor(obj?: any) {
        if (obj) {
          this.text = obj.text;
          this.isAnonimous = obj.isAnonimous;
          this.isDesiredPublic = obj.isDesiredPublic;


        }
    }
}
