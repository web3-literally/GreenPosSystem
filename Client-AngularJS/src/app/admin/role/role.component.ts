import { Component, OnInit, ViewChild } from '@angular/core';
import { SmartTableData } from '../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from './role-edit-dialog/role-edit-dialog';

import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { Permission } from '../../models/permission.model';
import Swal from 'sweetalert2';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {

  settings = {
    hideSubHeader: true,
    columns: {
      updatedDate: {
        title: 'Updated at',
        type: 'date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy hh:mm:ss');
          return formatted;
        },
        filter: false,
      },
      description: {
        title: 'Description',
        type: 'string',
        filter: false,
      },
      name: {
        title: 'Role Name',
        type: 'string',
        filter: false,
      },
      usersCount: {
        title: 'User Count',
        type: 'string',
        filter: false,
      }
    },

    pager: {
      display: true,
      perPage: 10
    },

    mode: 'external',
    actions: {
      position: 'right',
      add:false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    data: [
      { id: 1, updated: '2019-08-09', description: 'root', username: 'Apollo' },
      { id: 2, updated: '2019-08-09', description: 'root', username: 'Apollo' },
      { id: 3, updated: '2019-08-09', description: 'root', username: 'Apollo' },
      { id: 4, updated: '2019-08-09', description: 'root', username: 'Apollo' },
      { id: 5, updated: '2019-08-09', description: 'root', username: 'Apollo' },
      { id: 6, updated: '2019-08-09', description: 'root', username: 'Apollo' },
    ],
  };

  source: LocalDataSource = new LocalDataSource();

  names: string[] = [];

  columns: any[] = [];
  rows: Role[] = [];
  rowsCache: Role[] = [];
  allPermissions: Permission[] = [];
  editedRole: Role;
  sourceRole: Role;
  editingRoleName: { name: string };

  constructor(
    private datePipe: DatePipe,
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private accountService: AccountService) { }

  ngOnInit() {
    //this.source.load(this.settings.data);
    this.loadData();
  }

  onAdd() {
    this.editingRoleName = { name: "" };

    this.dialogService.open(DialogNamePromptComponent, {
      context: {
        title: 'Add Role',
        roledata: new Role(),
        allPermissions: this.allPermissions,
        allRoles: this.rows,
        canManageRoles: this.canManageRoles,
        isNew: true,
      },
    }).onClose.subscribe(data => this.saveRole(data));
  }

  onEdit(event) {

    console.log(event);
    this.editingRoleName = { name: event.data.name };
    this.sourceRole = event.data;
    console.log('role component ', event.data);
    console.log('role component allPermissions', this.allPermissions);
    console.log('rows ----------', this.rows);
    this.dialogService.open(DialogNamePromptComponent, {
      context: {
        title: 'Edit Role',
        roledata: event.data,
        allPermissions: this.allPermissions,
        allRoles: this.rows,
        canManageRoles: this.canManageRoles,
      },
    }).onClose.subscribe(data => this.saveRole(data));
  }

  saveRole(data) {
    console.log(data);
    if (!data || !data.roledata) {
      return;
    }
    if (!data.isNew) { // Edit handler
      this.accountService.updateRole(data.roledata).subscribe(response => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Role has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.loadData();
      });
    } else { // Add handler
      this.accountService.newRole(data.roledata).subscribe(response => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Role has been created',
          showConfirmButton: false,
          timer: 1500
        })
        this.loadData();
      });
    }
  }

  onDelete(event) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.accountService.deleteRole(event.data)
        .subscribe(results => {
          this.loadData();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        },
        error => {
          Swal.fire(
            'Failed!',
            'warning'
          )
        });
       
      }
    })
  }


  loadData() {
    this.accountService.getRolesAndPermissions()
      .subscribe(results => {
        const roles = results[0];
        const permissions = results[1];

        roles.forEach((role, index, roles) => {
          (role as any).index = index + 1;
        });
        this.rowsCache = [...roles];
        this.rows = roles;
        this.allPermissions = permissions;
        console.log(this.rows);
        this.source.load(this.rows);
      },
        error => {
        });
  }


  get canManageRoles() {
    return this.accountService.userHasPermission(Permission.RoleEdit);
  }
}
