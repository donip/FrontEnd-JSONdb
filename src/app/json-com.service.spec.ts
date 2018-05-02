import { TestBed, inject } from '@angular/core/testing';

import { JsonComService } from './json-com.service';

describe('JsonComService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonComService]
    });
  });

  it('should be created', inject([JsonComService], (service: JsonComService) => {
    expect(service).toBeTruthy();
  }));
});
