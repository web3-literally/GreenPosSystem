// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Permission } from './permission.model';


export class Role {

    constructor(name?: string, description?: string, updateddate?: string, permissions?: Permission[]) {

        this.name = name;
        this.description = description;
        this.permissions = permissions;
        this.updateddate = updateddate;
    }

    public id: string;
    public name: string;
    public description: string;
    public updateddate: string;
    public usersCount: number;
    public permissions: Permission[];
}
