import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Wedding } from '../models/wedding';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  public wedding: Wedding;

  constructor() { }

  public createWedding(groom: any, bride: any, propertyRegime: any): Wedding{
    let actualDate = new Date();
    this.wedding = new Wedding(groom, bride, actualDate, propertyRegime);
    console.log(this.wedding);

    return new Wedding(groom, bride, actualDate, propertyRegime);
  }

  public getWedding(): Wedding {
    return this.wedding;;
  }
}
