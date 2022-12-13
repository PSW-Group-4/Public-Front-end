import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TenderService } from 'src/app/Services/tender.service';
import { Tender } from '../tender.model';

@Component({
  selector: 'app-view-all-tenders',
  templateUrl: './view-all-tenders.component.html',
  styleUrls: ['./view-all-tenders.component.css']
})
export class ViewAllTendersComponent implements OnInit {
  public dataSource = new MatTableDataSource<Tender>;
  public tenders: any;
  constructor(private tenderService: TenderService, private router: Router) { }

  ngOnInit(): void {
    this.tenderService.getActive().subscribe(res => {
      this.tenders = res;
      this.dataSource.data = this.tenders;
      })
  }

}
