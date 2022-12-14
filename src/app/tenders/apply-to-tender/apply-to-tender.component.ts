import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TenderApplicationService } from 'src/app/Services/tender-application.service';

@Component({
  selector: 'app-apply-to-tender',
  templateUrl: './apply-to-tender.component.html',
  styleUrls: ['./apply-to-tender.component.css']
})
export class ApplyToTenderComponent implements OnInit {
  public price: number = 0;
  constructor(public dialogRef: MatDialogRef<ApplyToTenderComponent>) {
    
   }
  
    ngOnInit(): void {
      
    }
    apply(): void {
      this.dialogRef.close(this.price);
    }
  
  }
