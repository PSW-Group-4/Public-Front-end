import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToTenderComponent } from './apply-to-tender.component';

describe('ApplyToTenderComponent', () => {
  let component: ApplyToTenderComponent;
  let fixture: ComponentFixture<ApplyToTenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyToTenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyToTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
