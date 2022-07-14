import { Person } from "./person";

export class Wedding {
  constructor(
    private groom: Person,
    private bride: Person,
    private WeddingDate: Date,
    private propertyRegime: string
  ){

  }

  public getGroom(): Person{
    return this.groom;
  }

  public getBride(): Person{
    return this.bride;
  }

  public getWeddingDate(): Date{
    return this.WeddingDate;
  }

  public getPropertyRegime(): string{
    return this.propertyRegime;
  }
}
