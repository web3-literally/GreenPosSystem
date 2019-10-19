import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { NbDialogService } from '@nebular/theme';

import { AccountService } from '../../../services/account.service';
import { Utilities } from '../../../services/utilities';
import { User } from '../../../models/user.model';
import { Role } from '../../../models/role.model';
import { Permission } from '../../../models/permission.model';
import { UserEdit } from '../../../models/user-edit.model';

import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';
import { AlertService, MessageSeverity } from '../../../services/alert.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  settings = {
    columns: {
      userName: {
        title: 'UserName',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phoneNumber: {
        title: 'Contact Number',
        type: 'string',
      },
      staffName: {
        title: 'Staff Name',
        type: 'string',
      },
      staffID: {
        title: 'Staff ID',
        type: 'string',
      },
      companyName: {
        title: 'Company Name',
        type: 'string',
      },
      branchName: {
        title: 'BranchName',
        type: 'string',
      },
      manageBy: {
        title: 'Managed By',
        type: 'string',
      },
      businessPlan: {
        title: 'Business Plan',
        type: 'string',
      },
      roles: {
        title: 'Role',
        type: 'string',
      },
      // verifyStatus: {
      //   title: 'Status',
      //   type: 'string',
      // },
      isEnabled: {
        title: 'Status',
        type: 'boolean',
        valuePrepareFunction: (flag) => {
          if (flag == true)
            return 'Enable';
          else
            return 'Disable'
        },
      },
    },

    pager: {
      display: true,
      perPage: 10
    },

    //hideSubHeader: true,

    mode: 'external',

    actions: {
      position: 'right',
      custom: [
        {
          name: 'enable',
          title: '<i class="nb-checkmark"></i>'
        },
        {
          name: 'disable',
          title: '<i class="nb-close"></i>'
        }
      ],
      add: false,
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
      {},
      {},
      {}
    ],
  };

  source: LocalDataSource = new LocalDataSource();

  columns: any[] = [];
  rows: User[] = [];
  rowsCache: User[] = [];
  editedUser: UserEdit;
  sourceUser: UserEdit;
  editingUserName: { name: string };
  allRoles: Role[] = [];

  constructor(
    private datePipe: DatePipe,
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private accountService: AccountService,
    private alertService: AlertService,
    private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.loadData();
  }

  onAdd(event) {
    this.editingUserName = { name: "" };

    this.dialogService.open(UserEditDialogComponent, {
      context: {
        title: 'New User',
        userdata: new UserEdit(),
        allRoles: this.allRoles,
        canManageUsers: this.canManageUsers,
        isNew: true,
      },
    }).onClose.subscribe(data => this.loadData());
  }

  onEdit(event) {
    //console.log(event);
    this.editingUserName = { name: event.data.name };
    this.sourceUser = event.data;
    this.dialogService.open(UserEditDialogComponent, {
      context: {
        title: 'Edit User',
        userdata: event.data,
        allRoles: this.allRoles,
        canManageUsers: this.canManageUsers,
      },
    }).onClose.subscribe(data => this.loadData());
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
        this.accountService.deleteUser(event.data)
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
    if (this.canViewRoles) {
      this.accountService.getUsersAndRoles().subscribe(results => this.onDataLoadSuccessful(results[0], results[1]), error => this.onDataLoadFailed(error));
    } else {
      this.accountService.getUsers().subscribe(users => this.onDataLoadSuccessful(users, this.accountService.currentUser.roles.map(x => new Role(x))), error => this.onDataLoadFailed(error));
    }
  }

  onDataLoadSuccessful(users: User[], roles: Role[]) {
    users.forEach((user, index, users) => {
      (user as any).index = index + 1;
    });

    this.rowsCache = [...users];
    this.rows = users;
    this.allRoles = roles;
    //console.log("users info-----------------", this.rows);
    this.source.load(this.rows);
  }

  onDataLoadFailed(error: any) {
    Swal.fire(
      'Failed!',
      'Unable to retrieve users from the server!',
      'warning'
    )
  }

  onEnable(event) {
    switch (event.action) {
      case 'enable':
        //console.log("enable-----", event.data);
        this.editedUser = event.data;
        this.editedUser.isEnabled = true;
        this.accountService.updateUser(this.editedUser).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
        break;
      case 'disable':
        //console.log("enable-----", event.data);
        this.editedUser = event.data;
        this.editedUser.isEnabled = false;
        this.accountService.updateUser(this.editedUser).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
        break;
    }
  }

  private saveSuccessHelper(user?: User) {
    if (this.editedUser.isEnabled == true)
    {
      Swal.fire({
        position: 'top-end',
        title:'User Enabled!',
        type:'success'
      });
    }
    else{
      Swal.fire({
        position: 'top-end',
        title:'User Disabled!',
        type:'warning'
      });
    }
    this.loadData();
  }


  private saveFailedHelper(error: any) {
    console.log(error.error[""]);
    this.alertService.showStickyMessage(error, null, MessageSeverity.error);
  }

  get canAssignRoles() {
    return this.accountService.userHasPermission(Permission.UserEdit);
  }

  get canViewRoles() {
    return this.accountService.userHasPermission(Permission.RoleView);
  }

  get canManageUsers() {
    return this.accountService.userHasPermission(Permission.UserEdit);
  }

}
