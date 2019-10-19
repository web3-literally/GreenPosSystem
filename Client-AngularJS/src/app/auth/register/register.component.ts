import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../assets/old/styles/app.scss',
    '../../assets/old/styles/bootstrap-extend.min.css',
    '../../assets/old/styles/site.min.css',
    './register.component.scss',
  ]
})
export class RegisterComponent implements OnInit {

  lockscreen = require("../../assets/old/images/lockscreen.png");
  pos_logo = require("../../assets/old/images/pos-logo.png");
  pos_logo_light = require("../../assets/old/images/pos-logo-light.png");
  nubeslab_light = require("../../assets/old/images/nubeslab-light.png");
  
  constructor() { }

  ngOnInit() {
    
  }
} 