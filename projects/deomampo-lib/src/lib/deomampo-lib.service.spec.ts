import { TestBed } from '@angular/core/testing';

import { DeomampoLibService } from './deomampo-lib.service';

describe('DeomampoLibService', () => {
  let service: DeomampoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeomampoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
