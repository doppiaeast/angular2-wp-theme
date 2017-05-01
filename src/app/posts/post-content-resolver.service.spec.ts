import { TestBed, inject } from '@angular/core/testing';

import { PostContentResolverService } from './post-content-resolver.service';

describe('PostContentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostContentResolverService]
    });
  });

  it('should ...', inject([PostContentResolverService], (service: PostContentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
