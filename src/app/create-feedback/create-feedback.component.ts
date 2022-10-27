import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../Services/feedback.service';




@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {

  EnterAllFieldsCorrectlyMessage: string = "";
  isCheckedAnonymous: Boolean = false;
  isCheckedPublic: Boolean = false;

  feedbackText: string = ''

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
  }

  public sendFeedback() {
    if (this.feedbackText == "") {
      this.EnterAllFieldsCorrectlyMessage = "Please enter the feedback text!";
      return;
    }

    var FeedbackRequestDto: any = {}
    FeedbackRequestDto.text = this.feedbackText;
    FeedbackRequestDto.isAnonimous = this.isCheckedAnonymous;
    FeedbackRequestDto.isPublic = this.isCheckedPublic;

    this.feedbackService.createFeedback(FeedbackRequestDto).subscribe(res => {
      console.log(res);
           this.router.navigate(['/patientHome']);

    })


}
}
