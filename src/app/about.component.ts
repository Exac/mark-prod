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
    <md-tab label="Forward">
      <md-card class="foward-card">
        <md-card-header>
          <md-card-title>MK</md-card-title>
          <md-card-subtitle>MARK is used by the BCSSA</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="./bcspeedskating-logo-full.svg">
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
        <img md-card-image src="./about-buttons.svg">
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
