import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankLoginComponent } from './blood-bank-login.component';

describe('BloodBankLoginComponent', () => {
  let component: BloodBankLoginComponent;
  let fixture: ComponentFixture<BloodBankLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBankLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodBankLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
