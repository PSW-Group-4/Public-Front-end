import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTendersComponent } from './view-all-tenders.component';

describe('ViewAllTendersComponent', () => {
  let component: ViewAllTendersComponent;
  let fixture: ComponentFixture<ViewAllTendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
