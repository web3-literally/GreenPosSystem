import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../@core/utils';
import { ADMIN_MENU_ITEMS } from './admin-menu'

import { AccountService } from '../services/account.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['admin.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="getMenu()"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

export class AdminComponent {
  
  //admin_menu = ADMIN_MENU_ITEMS;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private accountService: AccountService)
    {

    }
  ngAfterViewInit()
  {
    // this.sidebarService.collapse('menu-sidebar');
    // this.layoutService.changeLayoutSize();
  }
  getMenu() {
    let newmenu = ADMIN_MENU_ITEMS;
    this.setMenuvisibility(newmenu);
    return newmenu;
  }

  setMenuvisibility(menu){
    menu.forEach(element => {
      if (this.accountService.userHasPermission(element.data) || !element.data){
        element.hidden = false;
        if (element.children)
        this.setMenuvisibility(element.children);
      }
      else
        element.hidden = true;      
    });
  }
}
