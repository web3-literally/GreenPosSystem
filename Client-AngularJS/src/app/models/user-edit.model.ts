// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { User } from './user.model';


export class UserEdit extends User {
    constructor(currentPassword?: string, newPassword?: string, confirmPassword?: string, updatebyAdmin?: boolean) {
        super();

        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
        this.updatebyAdmin = updatebyAdmin;
    }

    public currentPassword: string;
    public newPassword: string;
    public confirmPassword: string;
    public updatebyAdmin: boolean = false;
}
