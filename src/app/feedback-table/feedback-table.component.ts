import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbacksPublic } from '../model/feedbackPublic.model';
import { FeedbackService } from './../Services/feedback.service';

@Component({
  selector: 'app-feedback-table',
  templateUrl: './feedback-table.component.html',
  styleUrls: ['./feedback-table.component.css']
})
export class FeedbackTableComponent implements OnInit {
  public feedbacksPublics: any;

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
      this.feedbackService.getFeedbacksPublics().subscribe(res => {
      this.feedbacksPublics = res;
      console.table(this.feedbacksPublics);
    })

  }

}
