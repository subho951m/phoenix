import { TestBed } from '@angular/core/testing';

import { EventdisplayService } from '../eventdisplay.service';

describe('EventdisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventdisplayService = TestBed.inject(EventdisplayService);
    expect(service).toBeTruthy();
  });
});