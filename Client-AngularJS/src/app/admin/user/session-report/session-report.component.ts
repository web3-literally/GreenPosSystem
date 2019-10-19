import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-session-report',
  templateUrl: './session-report.component.html',
  styleUrls: ['./session-report.component.scss']
})
export class SessionReportComponent {

  settings = {
    columns: {
      order_date: {
        title: 'Order Date',
        type: 'date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy hh:mm:ss');
          return formatted;
        }
      },
      order_number: {
        title: 'Order Number',
        type: 'string',
      },
      branch: {
        title: 'Branch',
        type: 'string',
      },
      table_name: {
        title: 'Table',
        type: 'string',
      },
      items: {
        title: 'Items',
        type: 'string',
      },
      total_amount: {
        title: 'Total Amount',
        type: 'string',
      },
      payment_type: {
        title: 'Payment Type',
        type: 'string',
      },
      reprint: {
        title: 'Reprint',
        type: 'string',
      },
    },

    pager: {
      display: true,
      perPage: 10
    },

    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    data: [
      
    ],
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private datePipe: DatePipe,
    private service: SmartTableData,
  ) { }

  ngOnInit() {
    this.source.load(this.settings.data);
  }

}
