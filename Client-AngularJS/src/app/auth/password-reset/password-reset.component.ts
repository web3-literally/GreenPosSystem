import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss',
    '../../assets/old/styles/app.scss',
    '../../assets/old/styles/bootstrap-extend.min.css',
    '../../assets/old/styles/site.min.css',
  ]
})
export class PasswordResetComponent implements OnInit {

  lockscreen = require("../../assets/old/images/lockscreen.png");
  pos_logo = require("../../assets/old/images/pos-logo.png");
  pos_logo_light = require("../../assets/old/images/pos-logo-light.png");
  nubeslab_light = require("../../assets/old/images/nubeslab-light.png");

  constructor() { }

  ngOnInit() {
  }

} 