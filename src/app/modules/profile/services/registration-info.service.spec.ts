import { TestBed } from '@angular/core/testing';

import { RegistrationInfoService } from './registration-info.service';

describe('RegistrationInfoService', () => {
  let service: RegistrationInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
