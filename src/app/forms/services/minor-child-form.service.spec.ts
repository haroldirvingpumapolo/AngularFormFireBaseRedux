import { TestBed } from '@angular/core/testing';

import { MinorChildFormService } from './minor-child-form.service';

describe('MinorChildFormService', () => {
  let service: MinorChildFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinorChildFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
