import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private numberOfGeneratedI = 0;

  private generateUniqueId(): string {
    return uuidv4();
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throwError('Prefix can not be empty.');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedI++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueId(): number {
    return this.numberOfGeneratedI;
  }

  constructor() {}
}
