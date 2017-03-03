/**
 * Created by Thomas on 2017-02-26.
 */
import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SettingsService } from "./settings.service";
import { RacesService } from "./races.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Settings } from "./settings";


@Component({
  selector: 'settings',
  styles: [`
    .settings {
      margin:1vw;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAATElEQVRYhe3OsQ0AIADDMF6o+v+t5QoUhozefJIsydqu7X7zoQMGDdIBgwbpgEGDdMCgQTpg0CAdMGiQDhg0SAcMGqQDBg3SAYOvfQEwaIuq3yqAQAAAAABJRU5ErkJggg==), linear-gradient(135deg, #a0ebf4 0%, #d0bef6 100%);
      background-blend-mode: screen;
      min-height:96vw;
      max-height:97vh !important;
    }
    .settings .clock span {
      font-size:2em;
    }
    .settings table {
      text-align: center;
      font-size: 2em;
      border-spacing: 0;
      margin: 0;
      padding:2.5vw;
    }
    .settings td {
      text-align: center;
    }
`],
  template: `
<md-card class="settings">
  <button id="close" (click)="onClickClose()"><md-icon>close</md-icon></button>
  <md-tab-group>
    <md-tab label="Clock">
      <md-card class="clock-card">
        <md-card-header>
          <!--<div md-card-avatar class="settings-header-image"></div>-->
          <md-card-title>Clock Settings</md-card-title>
          <md-card-subtitle>Adjust the clock to match the system.</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="settings-clock.jpg">
        <md-card-content>
          <table>
      <tr>
        <td>
          <button class="round" (click)="onClickIncrementHour()"><span>▲</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickIncrementMinute()"><span>▲</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickIncrementSecond()"><span>▲</span></button>
        </td>
      </tr>
      <tr>
        <td>
          <clock [display]="'hours'"></clock>
        </td>
        <td>
          <clock [display]="'minutes'"></clock>
        </td>
        <td>
          <clock [display]="'seconds'"></clock>
        </td>
      </tr>
      <tr>
        <td>
          <button class="round" (click)="onClickDecrementHour()"><span>▼</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickDecrementMinute()"><span>▼</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickDecrementSecond()"><span>▼</span></button>
        </td>
      </tr>
    </table>
        </md-card-content>
        <md-card-actions>
          <button md-button id="resetSettings" (click)="onClickResetSettings()">Reset Settings</button>
          <button md-button id="resetRaces" (click)="onClickResetRaces()">Reset Race Data</button>
        </md-card-actions>
      </md-card>
    </md-tab>
    <md-tab label="Race Number">
      <md-card class="race-number-card">
        <md-card-header>
          <md-card-title>Race Number Settings</md-card-title>
          <md-card-subtitle>Adjust the race number for the next race.</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="./settings-adjust-time.jpg">
        <md-card-content>
          <form>
            <p>
              <md-input-container>
                <input mdInput 
                  type="number" min="1" 
                  [(ngModel)]="raceNumber" 
                  (ngModelChange)="onChangeRaceNumber($event)" 
                  name="raceNumber"
                   placeholder="Race Number"/>
              </md-input-container>
            </p>
          </form>
        </md-card-content>
        <md-card-actions>
          <button md-button id="resetSettings" (click)="onClickResetSettings()">Reset Settings</button>
          <button md-button id="resetRaces" (click)="onClickResetRaces()">Reset Race Data</button>
        </md-card-actions>
      </md-card>
    </md-tab>
    <md-tab label="Resets">
      <md-card class="reset-card">
        <md-card-header>
          <md-card-title>Reset</md-card-title>
          <md-card-subtitle>Clear my settings.</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="./settings-backup.jpg">
        <md-card-content>
          
        </md-card-content>
        <md-card-actions>
          <button md-button id="resetSettings" (click)="onClickResetSettings()">Reset Settings</button>
          <button md-button id="resetRaces" (click)="onClickResetRaces()">Reset Race Data</button>
        </md-card-actions>
      </md-card>
    </md-tab>
    <md-tab label="Backup">
      <md-card class="backup-card">
        <md-card-header>
          <md-card-title>Backup</md-card-title>
          <md-card-subtitle>Backup race data.</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="./settings-backup.jpg">
        <md-card-content>
          <pre>{{ racesService.getRaces() }}</pre>
        </md-card-content>
        <md-card-actions>
          <button md-button id="resetSettings" (click)="onClickResetSettings()">Reset Settings</button>
          <button md-button id="resetRaces" (click)="onClickResetRaces()">Reset Race Data</button>
        </md-card-actions>
      </md-card>
    </md-tab>
  </md-tab-group>
</md-card>


<!--<section id="settings">
  <button id="close" (click)="onClickClose()"><md-icon>close</md-icon></button>
  <h3>Settings</h3>
    <label>Clock Calibration</label>
    <table>
      <tr>
        <td>
          <button class="round" (click)="onClickIncrementHour()"><span>▲</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickIncrementMinute()"><span>▲</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickIncrementSecond()"><span>▲</span></button>
        </td>
      </tr>
      <tr>
        <td>
          <clock [display]="'hours'"></clock>
        </td>
        <td>
          <clock [display]="'minutes'"></clock>
        </td>
        <td>
          <clock [display]="'seconds'"></clock>
        </td>
      </tr>
      <tr>
        <td>
          <button class="round" (click)="onClickDecrementHour()"><span>▼</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickDecrementMinute()"><span>▼</span></button>
        </td>
        <td>
          <button class="round" (click)="onClickDecrementSecond()"><span>▼</span></button>
        </td>
      </tr>
    </table>
    <label for="raceNumber">Race #</label>
    <form>
      <input id="raceNumber" 
        type="number" min="1" 
        [(ngModel)]="raceNumber" 
        (ngModelChange)="onChangeRaceNumber($event)" 
        name="raceNumber" />
    </form>
    <button md-raised-button id="resetSettings" (click)="onClickResetSettings()"><span>Reset Settings</span></button>
    <button md-raised-button id="resetRaces" (click)="onClickResetRaces()"><span>Reset Race Data</span></button>
</section><!--settings-->
`,
  providers: [
    SettingsService,
    RacesService
  ]
})

export class SettingsComponent implements OnDestroy {

  @Output() settingsUpdated = new EventEmitter();

  raceNumber: number;
  settingsSubscription: Subscription;
  racesSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService,
              private racesService: RacesService) {
    this.raceNumber = settingsService.getRaceNumber();
    this.settingsSubscription = settingsService.settingsChange.subscribe((setting)=>{
      this.raceNumber = setting.raceNumber;
    });
    this.racesSubscription = racesService.racesChange.subscribe();
  }

  ngOnDestroy() {
    //remove the settings service subscription
    this.settingsSubscription.unsubscribe();
    this.racesSubscription.unsubscribe();
  }

  onClickClose() {
    let link = ['/main'];
    this.router.navigate(link);
  }

  onClickModifyTimeAdjustment(ms : number) {
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() + ms);
  }

  onClickIncrementHour() {
    console.log("+h");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() + 1000*60*60);
  }

  onClickIncrementMinute() {
    console.log("+m");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() + 1000*60);
  }

  onClickIncrementSecond() {
    console.log("+s");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() + 1000);
  }

  onClickDecrementHour() {
    console.log("-h");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() - 1000*60*60);
  }

  onClickDecrementMinute() {
    console.log("-m");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() - 1000*60);
  }

  onClickDecrementSecond() {
    console.log("-s");
    this.settingsService.setTimeAdjustment(this.settingsService.getTimeAdjustment() - 1000);
  }

  onChangeRaceNumber(event: any) {
    this.settingsService.setRaceNumber(Number(event));
    console.log("raceNumber:event");
  }

  onClickResetSettings() {
    console.log("reset");
    this.settingsService.reset();
  }

  onClickResetRaces() {
    console.log("Resetting races")
    this.racesService.reset();
    this.settingsService.setRaceNumber(1);
  }
}
