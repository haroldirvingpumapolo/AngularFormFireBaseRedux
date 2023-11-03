import { TestBed } from '@angular/core/testing';

import { WorkFormService } from './work-form.service';

describe('WorkFormService', () => {
  let service: WorkFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
