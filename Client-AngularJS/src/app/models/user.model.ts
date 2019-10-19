// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

export class User {
  // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(id?: string, userName?: string, fullName?: string, email?: string, jobTitle?: string, phoneNumber?: string, roles?: string[],
    posUserName?: string, posUserLogin?: string, verifyStatus?: string, staffName?: string, staffID?: string, companyName?: string, branchName?: string, manageBy?: string) {

    this.id = id;
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.jobTitle = jobTitle;
    this.phoneNumber = phoneNumber;
    this.roles = roles;

    this.posUserName = posUserName;
    this.posUserLogin = posUserLogin;
    this.verifyStatus = verifyStatus;
    this.staffName = staffName;
    this.staffID = staffID;
    this.companyName = companyName;
    this.branchName = branchName;
    this.manageBy = manageBy;
  }


  get friendlyName(): string {
    let name = this.fullName || this.userName;

    if (this.jobTitle) {
      name = this.jobTitle + ' ' + name;
    }

    return name;
  }


  public id: string;
  public userName: string;
  public fullName: string;
  public email: string;
  public jobTitle: string;
  public phoneNumber: string;
  public isEnabled: boolean;
  public isLockedOut: boolean;
  public roles: string[];

  public posUserName: string;
  public posUserLogin: string;
  public verifyStatus: string;
  public staffName: string;
  public staffID: string;
  public companyName: string;
  public branchName: string;
  public manageBy: string;
}
