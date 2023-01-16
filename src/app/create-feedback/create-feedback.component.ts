import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackRequestDto } from '../model/feedbackRequestDto.mode';
import { FeedbackService } from '../Services/feedback.service';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';



@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {

  EnterAllFieldsCorrectlyMessage: string = "";

  isDone: any = 'false';
  isEvent = new EventEmitter();

  dialogRef: any;

  public feedbackRequestDto: FeedbackRequestDto = new FeedbackRequestDto();

  constructor(private feedbackService: FeedbackService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  public sleep(milliseconds: any) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  public sendFeedback() {
    if (this.feedbackRequestDto.text == "") {
      this.EnterAllFieldsCorrectlyMessage = "Please enter the feedback text!";
      return;
    }

    this.dialogRef = this.dialog.open(FeedbackDialogComponent, {data: {isDone: this.isEvent}});

    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/patientHome']);
    });

    this.feedbackService.createFeedback(this.feedbackRequestDto).subscribe(res => {
      console.log(res);
      //this.router.navigate(['/patientHome']);
      this.isEvent.emit();
    })




}
}
