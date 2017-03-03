/**
 * Created by Thomas on 2017-02-26.
 */
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Settings } from "./settings";

@Injectable()
export class SettingsService {
  private settings: Settings = new Settings(0,1);
  public settingsChange: Subject<Settings> = new Subject<Settings>();

  constructor() {
    /**
     * In order of importance
     * 1. localStorage is available
     * 2. localStorage is set
     * 3. this.settings instantiated
     */
    if(SettingsService.localStorageIsAvailable()) {
      if(localStorage.getItem('settings')) {
        this.settings = JSON.parse(localStorage.getItem('settings'));
        //check if every setting is set
        if(!this.settings.raceNumber) {
          this.settings.raceNumber = 1;
        }
        if(!this.settings.timeAdjustment) {
          this.settings.timeAdjustment = 0;
        }
      } else {
        this.settings = new Settings(0,1);
        localStorage.setItem('settings', JSON.stringify(this.settings));
      }
    } else {
      this.settings = new Settings(0,1);
    }
    this.settingsChange.next(this.settings);

  }

  public getTimeAdjustment() : number {
    return this.getSettings().timeAdjustment;
  }

  public setTimeAdjustment(ms: number) {
    this.settings.timeAdjustment = ms;
    this.setSettings(this.settings);
    this.settingsChange.next(this.settings);
  }

  public getRaceNumber() : number {
    return this.getSettings().raceNumber;
  }

  public setRaceNumber(num: number) {
    this.settings.raceNumber = num;
    this.setSettings(this.settings);
    this.settingsChange.next(this.settings);
  }

  public getSettings() : Settings {
    if (SettingsService.localStorageIsAvailable()) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    return this.settings;
  }

  public setSettings(se: Settings) {
    this.settings = se;
    localStorage.setItem('settings', JSON.stringify(se));
    this.settingsChange.next(this.settings);
  }

  public reset() {
    localStorage.removeItem('oldSettings');
    localStorage.setItem('oldSettings', JSON.stringify(this.settings));
    this.setSettings(new Settings(0,1));
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
