import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent {

  settings = {
    columns: {
      signin_at: {
        title: 'SignIn At',
        type: 'date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy hh:mm:ss');
          return formatted;
        }
      },
      signout_at: {
        title: 'SignOut At',
        type: 'date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy hh:mm:ss');
          return formatted;
        }
      },
      id: {
        title: 'ID',
        type: 'string',
      },
      pos_username: {
        title: 'POS UserName',
        type: 'string',
      },
      staff_name: {
        title: 'Staff Name',
        type: 'string',
      },
    },

    pager: {
      display: true,
      perPage: 10
    },

    mode: 'external',
    actions: {
      add: false,
      delete: false,
      columnTitle: "Report",
      position: 'right',
    },
    edit: {
      editButtonContent: '<i class="nb-star"></i>',
    },
    data: [
      {id:1, signin_at:'2019-08-09', signout_at:'2019-08-09', pos_username:'Apollo', staff_name:'Larry' },
      {id:2, signin_at:'2019-08-09', signout_at:'2019-08-09', pos_username:'Apollo', staff_name:'Larry' },
      {id:3, signin_at:'2019-08-09', signout_at:'2019-08-09', pos_username:'Apollo', staff_name:'Larry' },
    ],
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private service: SmartTableData,
    ) 
    { }

  ngOnInit() {
    this.source.load(this.settings.data);
  }

  onReport(event) {
    this.router.navigateByUrl('/admin/user/session-report');
  }

}
