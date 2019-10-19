import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Role } from '../../../models/role.model';
import { Permission } from '../../../models/permission.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'role-edit-dialog.html',
  styleUrls: ['role-edit-dialog.scss'],
})
export class DialogNamePromptComponent {
  [x: string]: any;

  @Input() title: string;
  @Input() roledata: Role;
  @Input() allPermissions: Permission[];
  @Input() allRoles: Role[];
  @Input() canManageRoles: any;
  @Input() isNew: boolean;

  groupNameList: any[];

  private isNewRole = false;
  public isSaving: boolean;
  public showValidationErrors = true;
  public roleEdit: Role = new Role();
  public selectedValues: { [key: string]: boolean; } = {};
  public selectedRoles: { [key: string]: boolean; } = {};
  public groupCheckList: { [key: string]: number; } = {};
  private editingRoleName: string;

  public formResetToggle = true;

  public changesSavedCallback: () => void;
  public changesFailedCallback: () => void;
  public changesCancelledCallback: () => void;
  public roleForm: FormGroup;

  public submitted: boolean;

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    if (!this.roledata.permissions) return;
    
    this.roledata.permissions.forEach(p => this.selectedValues[p.value] = true);
    this.updateGroupCheckBox();
  }

  cancel() {
    this.ref.close();
  }


  onSubmit() {
    this.submitted = true;
    if(this.roledata.name && this.roledata.description) {
      this.roledata.permissions = this.getSelectedPermissions();
      this.submitted = false;      
      this.ref.close({ roledata: this.roledata, isNew: this.isNew });
    }
  }



  selectAll() {
    this.allPermissions.forEach(p => this.selectedValues[p.value] = true);
    this.updateGroupCheckBox();
  }


  selectNone() {
    this.allPermissions.forEach(p => this.selectedValues[p.value] = false);
    this.selectedRoles = {};
    this.updateGroupCheckBox();
  }


  updateGroupCheckBox()
  {
    this.allPermissions.forEach(p=>this.groupCheckList[p.groupName] = 1);
    this.allPermissions.forEach(p => {
      this.groupCheckList[p.groupName] = this.groupCheckList[p.groupName] * (this.selectedValues[p.value] ? 1: 0);
    });
    console.log('this.groupCheckList', this.groupCheckList);
  }
  
  toggleGroup(groupName: string, checked: boolean) {
    console.log(checked);
    let firstMemberValue: boolean;

    this.allPermissions.forEach(p => {
      if (p.groupName != groupName) {
        return;
      }

      // if (firstMemberValue == null) {
      //   firstMemberValue = this.selectedValues[p.value] == true;
      // }

      this.selectedValues[p.value] = checked;
    });
  }

  selectUpdated(){
    this.updateGroupCheckBox();
  }


  private getSelectedPermissions() {
    return this.allPermissions.filter(p => this.selectedValues[p.value] == true);
  }


  resetForm(replace = false) {

    if (!replace) {
      this.form.reset();
    } else {
      this.formResetToggle = false;

      setTimeout(() => {
        this.formResetToggle = true;
      });
    }
  }


  newRole(allPermissions: Permission[]) {
    this.isNewRole = true;
    this.showValidationErrors = true;

    this.editingRoleName = null;
    this.allPermissions = allPermissions;
    this.selectedValues = {};
    this.roleEdit = new Role();

    return this.roleEdit;
  }

  editRole(role: Role, allPermissions: Permission[]) {
    if (role) {
      this.isNewRole = false;
      this.showValidationErrors = true;

      this.editingRoleName = role.name;
      this.allPermissions = allPermissions;
      this.selectedValues = {};
      role.permissions.forEach(p => this.selectedValues[p.value] = true);
      this.roleEdit = new Role();
      Object.assign(this.roleEdit, role);

      return this.roleEdit;
    } else {
      return this.newRole(allPermissions);
    }
  }

  // create modal - role select handler
  onSelectRoles() {
    this.allPermissions.forEach(p => this.selectedValues[p.value] = false);
    this.allRoles.forEach((r, key) => {
      if (this.selectedRoles[key + 1]) {
        r.permissions.forEach(p => this.selectedValues[p.value] = true);
      }
    })
    this.updateGroupCheckBox();
  }
}
