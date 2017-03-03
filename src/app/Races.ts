import { Race } from "./race";
/**
 * Created by Thomas on 2017-03-01.
 */

export class Races {

  constructor(public races?:Array<Race>) {

  }

  public addRace(race: Race) {
    //Check if array exists yet?
    this.races = (typeof this.races != 'undefined' && this.races instanceof Array ) ? this.races : [];
    this.races.unshift(race);
  }


}
