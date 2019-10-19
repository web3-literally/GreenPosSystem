import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [
    '../assets/old/styles/app.scss',
    './welcome.component.scss', 
  ]
})
export class WelcomeComponent implements OnInit {
  lockscreen = require("../assets/old/images/lockscreen.png");
  pos_logo = require("../assets/old/images/pos-logo.png");
  pos_logo_light = require("../assets/old/images/pos-logo-light.png");
  nubeslab_light = require("../assets/old/images/nubeslab-light.png");
  index_banner = require("../assets/old/images/index-banner.jpg");
  features_icon = require("../assets/old/images/features-icon.png");
  
  constructor() { }

  ngOnInit() {

  }
} 