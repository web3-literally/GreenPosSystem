import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-in',
  templateUrl: './branch-in.component.html',
  styleUrls: [
    '../../assets/old/styles/app.scss',
    '../../assets/old/styles/bootstrap-extend.min.css',
    '../../assets/old/styles/site.min.css',
    './branch-in.component.scss']
})
export class BranchInComponent implements OnInit {

  lockscreen = require("../../assets/old/images/lockscreen.png");
  pos_logo = require("../../assets/old/images/pos-logo.png");
  pos_logo_light = require("../../assets/old/images/pos-logo-light.png");
  nubeslab_light = require("../../assets/old/images/nubeslab-light.png");
  constructor() { }

  ngOnInit() {
  }

} 