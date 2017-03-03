/**
 * Created by Thomas on 2017-02-26.
 */

import {Component, Input, OnDestroy} from '@angular/core';

import { SettingsService } from './settings.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'clock',
  template: `
<span [ngSwitch]="display">
  <span *ngSwitchCase="'hours'">{{ hours }}</span>
  <span *ngSwitchCase="'minutes'">{{ minutes }}</span>
  <span *ngSwitchCase="'seconds'">{{ seconds }}</span>
</span>

`
})

export class ClockComponent implements OnDestroy {
  @Input() display: string;

  displayTime:string = "HH:MM:SS";
  hours: string;
  minutes: string;
  seconds: string;
  timeAdjustment: number;
  settingsSubscription: Subscription;
  ticking: boolean = false;

  constructor(private settingsService: SettingsService) {
    this.timeAdjustment = settingsService.getSettings().timeAdjustment;
    this.settingsSubscription = settingsService.settingsChange.subscribe((setting)=>{
      this.timeAdjustment = setting.timeAdjustment;
      this.refreshClock();
    });

    this.refreshClock();

  }

  ngOnDestroy() {
    //remove the settings service subscription
    this.settingsSubscription.unsubscribe();
  }

  public refreshClock() {
    let d = new Date();
    d.setTime( d.getTime() + this.timeAdjustment );
    this.hours = String('0' + d.getHours()).slice(-2);
    this.minutes = String('0' + d.getMinutes()).slice(-2);
    this.seconds = String('0' + d.getSeconds()).slice(-2);
    this.displayTime = this.hours + ":" + this.minutes + ":" + this.seconds;
    //if we haven't started ticking the clock, begin now
    if(!this.ticking) {
      window.setInterval(()=>{this.refreshClock()}, 500);
      this.ticking = true;
    }
    //TODO: Prevent multiple copies of this from running at once.
  }
}
