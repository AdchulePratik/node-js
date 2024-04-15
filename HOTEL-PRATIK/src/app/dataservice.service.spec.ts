import { TestBed } from '@angular/core/testing';

import { DATASERVICEService } from './dataservice.service';

describe('DATASERVICEService', () => {
  let service: DATASERVICEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DATASERVICEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
