/**
 * Created by Thomas on 2017-03-01.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'settings-button',
  template: `
<a routerLink="/settings" routerLinkActive="active">
  <svg id="settingsButton" x="0px" y="0px" width="32px" height="32px" viewBox="-123.5 578.5 32 32" enable-background="new -123.5 578.5 32 32" xml:space="preserve">
      <g id="COG_1_">
          <g>
              <g>
                  <path fill="#FFFFFF" d="M-95.886,590.84l-0.545-1.292c1.866-4.219,1.743-4.344,1.38-4.71l-2.384-2.329l-0.237-0.199h-0.276
                      c-0.146,0-0.581,0-4.205,1.644l-1.334-0.538c-1.724-4.273-1.901-4.273-2.405-4.273h-3.363c-0.504,0-0.701-0.001-2.299,4.289
                      l-1.328,0.54c-2.449-1.034-3.886-1.559-4.273-1.559l-0.318,0.01l-2.565,2.515c-0.389,0.365-0.524,0.495,1.449,4.647l-0.543,1.288
                      c-4.366,1.688-4.366,1.852-4.366,2.368v3.298c0,0.518,0,0.699,4.381,2.27l0.543,1.284c-1.866,4.217-1.741,4.343-1.378,4.706
                      l2.384,2.332l0.238,0.204h0.277c0.143,0,0.573,0,4.202-1.648l1.332,0.542c1.725,4.273,1.902,4.272,2.408,4.272h3.364
                      c0.515,0,0.697,0,2.301-4.287l1.335-0.54c2.446,1.034,3.879,1.56,4.265,1.56l0.32-0.01l2.584-2.529
                      c0.368-0.37,0.496-0.499-1.466-4.635l0.54-1.289c4.373-1.689,4.373-1.866,4.373-2.371v-3.295
                      C-91.5,592.585-91.5,592.403-95.886,590.84z M-107.501,600.307c-3.084,0-5.596-2.463-5.596-5.488
                      c0-3.024,2.511-5.483,5.596-5.483c3.083,0,5.589,2.46,5.589,5.483C-101.913,597.844-104.419,600.307-107.501,600.307z"/>
              </g>
          </g>
      </g>
  </svg>
</a>
`
})

export class SettingsButton {

}