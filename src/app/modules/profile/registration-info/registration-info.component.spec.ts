import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfoComponent } from './registration-info.component';

describe('RegistrationInfoComponent', () => {
  let component: RegistrationInfoComponent;
  let fixture: ComponentFixture<RegistrationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
