/**
 * Created by Thomas on 2017-03-01.
 */

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Races } from "./Races";
import { Race } from './race';
import { Settings } from "./settings";


@Injectable()
export class RacesService {
  public races: Races = new Races();
  public racesChange: Subject<Races> = new Subject<Races>();

  constructor() {
    /**
     * In order of importance
     * 1. localStorage is available
     * 2. localStorage is set
     * 3. this.races instantiated
     */
    if(RacesService.localStorageIsAvailable()) {
      if(localStorage.getItem('races')) {
        this.races = JSON.parse(localStorage.getItem('races'));
        console.log(this.races);
      } else {
        this.races = new Races();
        localStorage.setItem('races', JSON.stringify(this.races));
      }
    } else {
      this.races = new Races();
    }
    this.racesChange.next(this.races);
  }

  public addRace(r: Race) {
    this.ensureRacesExist();
    this.races.races.unshift(r);
    this.setRaces(this.races);
  }

  public getRaces() : Races {
    if(RacesService.localStorageIsAvailable()) {
      this.races = JSON.parse(localStorage.getItem('races'));
    }
    return this.races;
  }

  public setRaces(ras: Races) {
    this.races = ras;
    if(RacesService.localStorageIsAvailable()) {
      localStorage.setItem('races', JSON.stringify(ras));
    }
    this.racesChange.next(this.races);
  }

  public getFirstRace() : Race {
    this.ensureRacesExist();
    if(this.races.races.length > 0) {
      return this.races.races[0];
    }
  }

  public setFirstRace(race: Race) {
    this.ensureRacesExist();
    if(this.races.races.length > 0) {
      this.races.races[0] = race;
      this.setRaces(this.races);
    }
  }

  public removeFirstRace() {
    this.ensureRacesExist();
    this.races.races.shift();
    this.setRaces(this.races);
  }

  public reset() {
    if(RacesService.localStorageIsAvailable()) {
      localStorage.removeItem('oldRaces');
      localStorage.setItem('oldRaces', JSON.stringify(this.races));
    }
    this.setRaces(new Races());
  }

  private ensureRacesExist() : void {
    this.races.races = (typeof this.races.races != 'undefined' && this.races.races instanceof Array ) ? this.races.races : [];
  }

  private static localStorageIsAvailable () {
    let test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }
}
