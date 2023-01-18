import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TenderService } from '../Services/tender.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tender-winner-response',
  templateUrl: './tender-winner-response.component.html',
  styleUrls: ['./tender-winner-response.component.css']
})
export class TenderWinnerResponseComponent implements OnInit {

  constructor(private tenderService: TenderService, private scroller: ViewportScroller, private route: ActivatedRoute, private router: Router ) { }
  public tenderId: string | null = "";
  ngOnInit(): void {
    this.tenderId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  goDown() {
    this.scroller.scrollToAnchor("buttons");
  }
  approve(): void {
    this.tenderService.approve(this.tenderId).subscribe(res => {
      alert('Thanks for confirming!');
      this.router.navigate(['bloodBank']);
    });
  }

  deny(): void {
    this.tenderService.deny(this.tenderId);

  }
}
