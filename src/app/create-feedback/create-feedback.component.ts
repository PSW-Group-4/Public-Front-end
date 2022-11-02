import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackRequestDto } from '../model/feedbackRequestDto.mode';
import { FeedbackService } from '../Services/feedback.service';




@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {

  EnterAllFieldsCorrectlyMessage: string = "";

  public feedbackRequestDto: FeedbackRequestDto = new FeedbackRequestDto();

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
  }

  public sendFeedback() {
    if (this.feedbackRequestDto.text == "") {
      this.EnterAllFieldsCorrectlyMessage = "Please enter the feedback text!";
      return;
    }


    this.feedbackService.createFeedback(this.feedbackRequestDto).subscribe(res => {
      console.log(res);
           this.router.navigate(['/patientHome']);

    })


}
}
