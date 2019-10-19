import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
