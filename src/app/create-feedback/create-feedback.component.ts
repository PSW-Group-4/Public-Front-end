import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {


  feedbackText: any = ''
  radioButton: any = 'PRIVATE'
  constructor() { }

  ngOnInit(): void {
  }

  public sendFeedback() {
    alert(this.feedbackText + this.radioButton)

}
}
