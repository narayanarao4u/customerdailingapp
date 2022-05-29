import { TestBed } from '@angular/core/testing';

import { FaultdataService } from './faultdata.service';

describe('FaultdataService', () => {
  let service: FaultdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaultdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
