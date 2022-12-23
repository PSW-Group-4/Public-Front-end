import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TenderApplicationService } from 'src/app/Services/tender-application.service';
import { TenderService } from 'src/app/Services/tender.service';
import { ApplyToTenderComponent } from '../apply-to-tender/apply-to-tender.component';
import { Tender } from '../tender.model';
import { ApplyForTenderDto } from '../tenderApplication.model';

@Component({
  selector: 'app-view-all-tenders',
  templateUrl: './view-all-tenders.component.html',
  styleUrls: ['./view-all-tenders.component.css']
})
export class ViewAllTendersComponent implements OnInit {
  public dataSource = new MatTableDataSource<Tender>;
  public tenders: Tender[] = [];
  public columnDefs : any[] = ['bloodType','amount']
  public tenderApplication : ApplyForTenderDto = new ApplyForTenderDto();
  constructor(private tenderService: TenderService, private tenderApplicationService: TenderApplicationService, private router: Router,private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tenderService.getActive().subscribe(res => {
      this.tenders = res;
      this.dataSource.data = this.tenders;
      })
  }
  apply(tender : Tender): void {
    let dialog = this.dialog.open(ApplyToTenderComponent );
     dialog.afterClosed().subscribe(res=>{
      this.tenderApplication.priceInRSD = res;
      if(this.tenderApplication.priceInRSD > 0){
        this.tenderApplication.tenderId = tender.id;
        this.tenderApplication.bloodBank = localStorage.getItem('jwt');
        this.tenderApplicationService.apply(this.tenderApplication).subscribe((res: any)=>{
          console.log(res);
          alert("You have applied to the tender successfully");
        })
      }
  })
  }
}
