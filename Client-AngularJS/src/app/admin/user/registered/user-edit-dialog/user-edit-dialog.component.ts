import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';

import { User } from '../../../../models/user.model';
import { Role } from '../../../../models/role.model';
import { UserEdit } from '../../../../models/user-edit.model';

import { AccountService } from '../../../../services/account.service';
import { AlertService, MessageSeverity } from '../../../../services/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent {

  @Input() title: string;
  @Input() userdata: UserEdit;
  @Input() allRoles: Role[];
  @Input() canManageUsers: any;
  @Input() isNew: boolean;

  //public userEdit: UserEdit;
  public selectedRole: string;
  public submitted: boolean;
  constructor(protected ref: NbDialogRef<UserEditDialogComponent>,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit() {
    if (this.userdata.roles)
      this.selectedRole = this.userdata.roles[0];
  }

  cancel() {
    this.ref.close();
  }

  onSubmit(user: NgForm) {
    this.submitted = true;
    if (this.selectedRole)
      this.userdata.roles = [this.selectedRole];

    console.log(this.userdata);
    // let keys = Object.keys(this.userdata);
    // for (var i = 0; i < keys.length; i++)
    // {
    //   if (!this.userdata[keys[i]])
    //     return;
    // }
    if (!this.userdata.userName || !this.userdata.email || !this.userdata.staffName || !this.userdata.staffID ||
      !this.userdata.companyName || !this.userdata.branchName || !this.userdata.manageBy || !this.userdata.roles ||
      (this.userdata.newPassword && this.userdata.newPassword == this.userdata.confirmPassword && this.userdata.newPassword.length < 6) ||
      (this.userdata.newPassword != this.userdata.confirmPassword))
      return;

    this.submitted = false;
    this.userdata.updatebyAdmin = true;

    if (this.isNew) {
      this.accountService.newUser(this.userdata).subscribe(user => this.saveSuccessHelper(user), error => this.saveFailedHelper(error));
    } else {
      this.accountService.updateUser(this.userdata).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
    }
    //this.ref.close({ userdata: this.userdata, isNew: this.isNew });
  }

  private saveSuccessHelper(user?: User) {
    if (this.isNew) {
      Swal.fire({
        position: 'top-end',
        title:'New User Created!',
        type:'success',
      });
    } else {
      Swal.fire({
        position: 'top-end',
        title:'User Changed!',
        type:'success'
      });
    }
    this.ref.close();
  }


  private saveFailedHelper(error: any) {
    console.log(error.error[""]);
    this.alertService.showStickyMessage(error, null, MessageSeverity.error);
  }
}
