import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from '../blood-bank.model';
import { BloodBankService } from '../Service/blood-bank.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public bloodBank : BloodBank = new BloodBank();
  public newPassword: string = "";
  constructor( private bloodBankService : BloodBankService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void { this.route.queryParams
    .subscribe(params => {
      let ApiKey : any  = this.route.snapshot.paramMap.get('ApiKey');
      this.bloodBankService.getBloodBankByApiKey(ApiKey).subscribe(res => {
        this.bloodBank = res;
      })
    });
  }

  public changePassword() {
    if (!this.isValidInput()) return;
    this.bloodBankService.updateBloodBank(this.bloodBank).subscribe(res => {
      alert("Password successfully changed!");
      this.router.navigate(['']);
    });
  }

  private isValidInput(): boolean {
    return this.bloodBank?.password != "";
  }

}
