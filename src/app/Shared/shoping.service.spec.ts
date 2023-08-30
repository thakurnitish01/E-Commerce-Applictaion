import { TestBed } from '@angular/core/testing';

import { ShopingService } from './shoping.service';

describe('ShopingService', () => {
  let service: ShopingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
