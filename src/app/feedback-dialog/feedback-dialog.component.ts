import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { 

  }

  detected: boolean = false;
  text: string = "Your feedback is being processed, please wait";

  ngOnInit(): void {
    this.data.isDone.subscribe(() => {
      this.completeLoad();
    })
  }

  completeLoad(): void {
    //alert("val chang");
    this.detected = true;
    this.text = "Thanks for leaving the feedback it will be reviewed by the manager!";
    const icon = document.getElementById('ico');
    const label = document.getElementById('lab');

    if(icon != null && label != null) {
      icon.style.display = 'block';
      label.style.animation = 'none';
      label.style.borderColor = '#5cb85c';
      label.style.transition = 'border 0.5s ease-out';
    }
  }


}
