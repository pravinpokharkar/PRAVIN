import { TestBed } from '@angular/core/testing';

import { SampleServService } from './sample-serv.service';

describe('SampleServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleServService = TestBed.get(SampleServService);
    expect(service).toBeTruthy();
  });
});
