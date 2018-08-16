import { TestBed, inject } from '@angular/core/testing';

import { MatchLiveService } from './match-live.service';

describe('MatchLiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchLiveService]
    });
  });

  it('should be created', inject([MatchLiveService], (service: MatchLiveService) => {
    expect(service).toBeTruthy();
  }));
});
