import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TenderService } from '../Services/tender.service';

@Component({
  selector: 'app-tender-winner-response',
  templateUrl: './tender-winner-response.component.html',
  styleUrls: ['./tender-winner-response.component.css']
})
export class TenderWinnerResponseComponent implements OnInit {

  constructor(private tenderService: TenderService, private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goDown() {
    this.scroller.scrollToAnchor("buttons");
  }
  approve(): void {
    this.tenderService.approve();
  }

  deny(): void {
    this.tenderService.deny();
  }
}
