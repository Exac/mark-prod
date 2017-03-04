/**
 * Created by Thomas on 2017-03-02.
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'about',
  styles: [`
    .about {
      margin:1vw;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAATElEQVRYhe3OsQ0AIADDMF6o+v+t5QoUhozefJIsydqu7X7zoQMGDdIBgwbpgEGDdMCgQTpg0CAdMGiQDhg0SAcMGqQDBg3SAYOvfQEwaIuq3yqAQAAAAABJRU5ErkJggg==), linear-gradient(135deg, #a0ebf4 0%, #d0bef6 100%);
      background-blend-mode: screen;
      min-height:96vw;
    }
  `],
  template: `
<md-card class="about">
  <button id="close" (click)="onClickClose()"><md-icon>close</md-icon></button>
  <md-tab-group>
    
    <md-tab label="Install">
      <md-card class="install-card">
        <md-card-header>
          <md-card-title>Installation</md-card-title>
          <md-card-subtitle>How to save the app on iOS.</md-card-subtitle>
        </md-card-header>
        <md-card-content>
          <img md-card-image src="assets/about-install-1.jpg">
          <p>Tap the middle icon at the bottom of your browser.</p>
          <img md-card-image src="assets/about-install-2.jpg">
          <p>Scroll the list of icons to the left until you find "Add to Home Screen"; press it.</p>
          <img md-card-image src="assets/about-install-3.jpg">
          <p>Click "Add".</p>
          <img md-card-image src="assets/about-install-4.jpg">
          <p>Now you can launch the app from your Home Screen.</p>
        </md-card-content>
      </md-card>
    </md-tab>
    
    <md-tab label="Forward">
      <md-card class="foward-card">
        <md-card-header>
          <md-card-title>MK</md-card-title>
          <md-card-subtitle>MARK is used by the BCSSA</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="assets/bcspeedskating-logo-full.svg">
        <md-card-content>
          <p>
            MK is a simple time-tracking app designed to make it simpler to track races when using a 
            security system. Design and code by Thomas McLennan. The source code is publicly 
            available on <a href="https://github.com/exac/mark/">GitHub</a>. MK is a simple app written 
            in Google's Angular2.
           </p>
        </md-card-content>
        <md-card-actions>
          <button md-button onclick="location.href='https://github.com/exac/mk/'">GITHUB</button>
          <button md-button onclick="location.href='http://www.speed-skating.bc.ca/'">BCSSA</button>
        </md-card-actions>
      </md-card>
      
    </md-tab>
    <md-tab label="Usage">
      <md-card class="usage-card">
        <md-card-header>
          <div md-card-avatar class="usage-header-image"></div>
          <md-card-title>Usage</md-card-title>
          <md-card-subtitle>Quick-start guide</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="assets/about-buttons.svg">
        <md-card-content>
          <p>
            In an example race we might have the following scenario:
          </p>
          <md-list>
            <md-list-item>
              <h4 md-line>A race is started</h4>
              <p md-line>Press <span class="green">Start</span>.</p>
            </md-list-item> 
            <md-list-item>
              <h4 md-line>The lead skater completes a lap</h4>
              <p md-line>Press <span class="grey">Lap</span>.</p>
            </md-list-item> 
            <md-list-item>
              <h4 md-line>The lead skater completes another lap</h4>
              <p md-line>Press <span class="grey">Lap</span>.</p>
            </md-list-item>
            <md-list-item>
              <h4 md-line>The referee calls for a mark</h4>
              <p md-line>Press <span class="red">Mark</span>.</p>
            </md-list-item>
            <md-list-item>
              <h4 md-line>The lead skater finishes.</h4>
              <p md-line>Press <span class="grey">Lap</span>.</p>
            </md-list-item> 
            <md-list-item>
              <h4 md-line>The last skater crosses the line</h4>
              <p md-line>Press <span class="green">End</span>.</p>
            </md-list-item> 
          </md-list>
          <p>Now, if the referees convene and request to see the infraction from the third lap, you can load up the 
          replay-system from the time of the first lap, until the time of the fourth lap (or even less!).</p>
          <p>You can add comments to races by tapping the right-side of the race and typing.</p>
          <md-divider></md-divider>
          <p>If you want to remove the races, or change the race number of the next race, you can do this in the 
          settings. Open the settings by tapping the 'cog' icon in the top right. From here you can change the time to 
          match the system, edit the race number, or reset the races data.</p>
        </md-card-content>
        <md-card-actions>
          <button md-button routerLink="/settings">SETTINGS</button>
          <button md-button routerLink="/main">GET STARTED</button>
        </md-card-actions>
      </md-card>
    </md-tab>
  </md-tab-group>
</md-card>
`
})

export class AboutComponent {

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  onClickClose() {
    let link = ['/main'];
    this.router.navigate(link);
  }
}
