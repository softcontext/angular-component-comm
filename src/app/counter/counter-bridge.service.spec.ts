import { TestBed, inject } from '@angular/core/testing';

import { CounterBridgeService } from './counter-bridge.service';

describe('CounterBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterBridgeService]
    });
  });

  it('should be created', inject([CounterBridgeService], (service: CounterBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
