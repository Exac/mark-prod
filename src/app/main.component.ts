/**
 * Created by Thomas on 2017-02-26.
 */

import { Component, OnDestroy } from '@angular/core';
import { Race } from "./race";
import { SettingsService } from "./settings.service";
import { RacesService } from "./races.service";
import { Subscription } from 'rxjs/Subscription';
import { Races } from "./Races";
import { Settings } from "./settings";

@Component({
  selector: 'main',
  template: `
<section id="top">
  <a routerLink="/about" routerLinkActive="active" class="aboutButton">
    <img id="logo" alt="app logo" src="./MarkLogo-small.png" width="32" height="32"/>
  </a>
  <settings-button></settings-button>
  <span id="camTime">
    <clock [display]="'hours'"></clock><span>:</span>
    <clock [display]="'minutes'"></clock><span>:</span>
    <clock [display]="'seconds'"></clock>
  </span>
</section>

<section id="middle">
  <div *ngFor="let r of races.races" class="box">
      <span class="race">{{ r.name }}</span>
      <span class="start">{{ r.start }}</span>
      <span class="end">{{ r.end }}</span>
      <ul class="markings">
          <li *ngFor="let mark of r.marks" class="{{ mark[1] }}">{{ mark[0] }}</li>
      </ul>
      <textarea class="notes" [(ngModel)]="r.remarks"></textarea>
  </div>
</section>

<section id="bottom">
  <button id="start" class="round" (click)="onClickToggleRace()"><span>{{ currentStartButton}}</span></button>
  <button id="lap" class="round" (click)="onClickLap()"><span>Lap</span></button>
  <button id="mark" class="round" (click)="onClickMark()"><span>Mark</span></button>
</section>
`,
  providers: [
    SettingsService,
    RacesService
  ]
})
export class MainComponent implements OnDestroy {

  currentRace: Race;
  currentStartButton: string;

  races: Races = new Races();
  timeAdjustment: number;
  raceNumber: number;

  racesSubscription: Subscription;
  settingsSubscription: Subscription;

  constructor(private racesService: RacesService,
              private settingsService: SettingsService) {
    this.races = racesService.getRaces();
    this.timeAdjustment = settingsService.getTimeAdjustment();
    this.raceNumber = settingsService.getRaceNumber();
    this.settingsSubscription = settingsService.settingsChange.subscribe((setting)=>{
      this.timeAdjustment = setting.timeAdjustment;
      this.raceNumber = setting.raceNumber;
    });
    this.racesSubscription = racesService.racesChange.subscribe((rcs)=>{
      this.races = rcs;
    });
    this.currentStartButton = "Start";
  }

  ngOnDestroy() {
    this.racesSubscription.unsubscribe();
    this.settingsSubscription.unsubscribe();
  }

  onClickToggleRace() {
    if(this.currentRace) {
      this.onEnd();
    } else {
      this.onStart();
    }
  }

  private onStart() {
    this.currentStartButton = "End";
    this.currentRace = new Race(
      String(this.raceNumber),
      this.getAdjustedNow(),
      this.getAdjustedNow(),
      [],
      "");
    this.racesService.addRace(this.currentRace);
  }

  private onEnd() {
    this.currentStartButton = "Start";
    this.currentRace.end = this.getAdjustedNow();

    this.raceNumber++;
    this.settingsService.setRaceNumber(this.raceNumber);
    if(this.racesService.getFirstRace().start == this.currentRace.start) {
      this.racesService.setFirstRace(this.currentRace);
    }
    this.currentRace = null;
  }

  onClickLap() {
    if(this.currentRace) {
      this.currentRace.marks.push([this.getAdjustedNow(), "lap"]);
    } else {
      //TODO: Notify user that they need to start a race before counting laps.
    }
  }

  onClickMark() {
    if(this.currentRace) {
      this.currentRace.marks.push([this.getAdjustedNow(), "mark"]);
    } else {
      //TODO: Notify user that they need to start a race before marking infractions.
    }
  }

  getAdjustedNow() : string {
    return(MainComponent.formatDate(this.getAdjustedTimeStamp()));
  }

  getAdjustedTimeStamp() : number {
    let d = new Date();
    d.setTime(d.getTime() + this.timeAdjustment);
    return d.getTime();
  }

  public static formatDate(timestamp: number) : string {
    let d:Date = new Date();
    d.setTime(timestamp);
    let h:string = String('0' + d.getHours()).slice(-2);
    let m:string = String('0' + d.getMinutes()).slice(-2);
    let s:string = String('0' + d.getSeconds()).slice(-2);
    return h + ":" + m + ":" + s;
  }

  // timeAdjustment:number;
  // races = [
  //   new Race("1", "1487969747", "12:56:42", [["13:33:37", "lap"], ["13:33:38", "mark"], ["13:33:39", "lap"]], "12:57:23"),
  //   new Race("2", "1487969747", "12:56:42", [["13:33:40", "lap"], ["13:33:45", "mark"], ["13:33:44", "lap"]], "12:57:23"),
  //   new Race("3", "1487969747", "12:56:42", [["00:00:01", "lap"], ["00:00:05", "lap"], ["00:00:04", "mark"]], "12:57:23"),
  //   new Race("4", "1487969747", "12:56:42", [["13:33:37", "lap"], ["03:33:37", "mark"]], "03:33:36")
  // ];
}
