import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private numberOfGeneratedI = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  private generateUniqueId(): string {
    return uuidv4();
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty.');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedI++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueId(): number {
    return this.numberOfGeneratedI;
  }

  constructor() {}
}
