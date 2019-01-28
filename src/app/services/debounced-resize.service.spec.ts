import { TestBed } from '@angular/core/testing';

import { DebouncedResizeService } from './debounced-resize.service';

describe('DebouncedResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DebouncedResizeService = TestBed.get(DebouncedResizeService);
    expect(service).toBeTruthy();
  });
});
