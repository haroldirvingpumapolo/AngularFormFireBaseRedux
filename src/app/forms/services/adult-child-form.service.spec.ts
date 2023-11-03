import { TestBed } from '@angular/core/testing';

import { AdultChildFormService } from './adult-child-form.service';

describe('AdultChildFormService', () => {
  let service: AdultChildFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdultChildFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
