import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(UniqueIdService);
  // });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service: UniqueIdService = new UniqueIdService();

    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate id when called multiple times`, () => {
    const service: UniqueIdService = new UniqueIdService();
  });
});
