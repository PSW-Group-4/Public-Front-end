import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderWinnerResponseComponent } from './tender-winner-response.component';

describe('TenderWinnerResponseComponent', () => {
  let component: TenderWinnerResponseComponent;
  let fixture: ComponentFixture<TenderWinnerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderWinnerResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderWinnerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
