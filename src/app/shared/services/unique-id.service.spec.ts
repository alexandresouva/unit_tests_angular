import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(UniqueIdService);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should not generate duplicate id when called multiple times`, () => {
    const ids = new Set();
    const numberOfGeneratedIds: number = 50;

    for (let i = 0; i < numberOfGeneratedIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(numberOfGeneratedIds);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueId.name} 
  should return the number of generated ids when called`, () => {
    const randomNumberOfTimes: number = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < randomNumberOfTimes; i++) {
      service.generateUniqueIdWithPrefix('app');
    }
    expect(service.getNumberOfGeneratedUniqueId()).toBe(randomNumberOfTimes);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '1', '0', 'a'];

    emptyValues.forEach((emptyValue) =>
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`This item is not a empty value: ${emptyValue}`)
        .toThrow()
    );
  });
});
