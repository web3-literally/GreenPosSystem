// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

export type PermissionNames =
    'View Users' | 'Manage Users' |
    'View Roles' | 'Manage Roles' | 'Assign Roles'
    
    | 'PartnerView'
    | 'PartnerAdd'
    | 'PartnerRemove'
    | 'PartnerEdit'
    | 'PartnerEnable'
    | 'PartnerDisable'
    | 'PartnerDuplicate'

    | 'CompanyView'
    | 'CompanyAdd'
    | 'CompanyRemove'
    | 'CompanyEdit'
    | 'CompanyEnable'
    | 'CompanyDisable'
    | 'CompanyDuplicate'

    | 'BranchView'
    | 'BranchAdd'
    | 'BranchRemove'
    | 'BranchEdit'
    | 'BranchEnable'
    | 'BranchDisable'
    | 'BranchDuplicate'

    | 'BusinessPlanView'
    | 'BusinessPlanChange'

    | 'UserView'
    | 'UserAdd'
    | 'UserRemove'
    | 'UserEdit'
    | 'UserEnable'
    | 'UserDisable'
    | 'UserDuplicate'

    | 'RoleView'
    | 'RoleAdd'
    | 'RoleRemove'
    | 'RoleEdit'
    | 'RoleEnable'
    | 'RoleDisable'
    | 'RoleDuplicate'

    | 'SettingView'
    | 'SettingBusinessPlanEnablement'
    | 'SettingPOSSystemSettingEnablement'

    | 'BillingView'
    | 'BillingUpdate'


    | 'OrderTake'
    | 'OrderAdd'
    | 'OrderRemove'
    | 'OrderEdit'
    | 'OrderView'
    | 'OrderCancel'

    | 'PaymentCollect'
    | 'PaymentView'
    | 'PaymentCancel'
    | 'PaymentMethod'

    | 'ReceiptPrint'
    | 'ReceiptView'
    | 'ReceiptConfiguration'

    | 'DiscountOnSelectItem'
    | 'DiscountOnBill'

    | 'RefundOnSelectItem'
    | 'RefundAllItemsOnReceipt'

    | 'ProductView'
    | 'ProductAdd'
    | 'ProductRemove'
    | 'ProductEdit'
    | 'ProductEnable'
    | 'ProductDisable'

    | 'MenuView'
    | 'MenuAdd'
    | 'MenuRemove'
    | 'MenuEdit'
    | 'MenuEnable'
    | 'MenuDisable'

    | 'StockView'
    | 'StockTransfer'
    | 'StockTake'
    | 'StockReturn'

    | 'TableView'
    | 'TableAdd'
    | 'TableRemove'
    | 'TableEdit'
    | 'TableEnable'
    | 'TableDisable'

    | 'ReportView'

    | 'CustomerView'
    | 'CustomerAdd'
    | 'CustomerRemove'
    | 'CustomerEdit'

    | 'SupplierView'
    | 'SupplierAdd'
    | 'SupplierRemove'
    | 'SupplierEdit'

    | 'StaffView'
    | 'StaffAdd'
    | 'StaffRemove'
    | 'StaffEdit'

    | 'TaxView'
    | 'TaxAdd'
    | 'TaxRemove'
    | 'TaxEdit'
    | 'TaxEnable'
    | 'TaxDisable'

    | 'NotificationStock'
    | 'NotificationDiscount'
    | 'NotificationRefund'

    | 'PrinterView'
    | 'PrinterAdd'
    | 'PrinterRemove'
    | 'PrinterEdit'
    | 'PrinterEnable'
    | 'PrinterDisable';



export type PermissionValues =
    'users.view' | 'users.manage' |
    'roles.view' | 'roles.manage' | 'roles.assign'

    | "partners.view"
    | "partners.add"
    | "partners.remove"
    | "partners.edit"
    | "partners.enable"
    | "partners.disable"
    | "partners.duplicate"

    | "company.view"
    | "company.add"
    | "company.remove"
    | "company.edit"
    | "company.enable"
    | "company.disable"
    | "company.duplicate"

    | "branch.view"
    | "branch.add"
    | "branch.remove"
    | "branch.edit"
    | "branch.enable"
    | "branch.disable"
    | "branch.duplicate"

    | "business_plan.view"
    | "business_plan.change"

    | "user.view"
    | "user.add"
    | "user.remove"
    | "user.edit"
    | "user.enable"
    | "user.disable"
    | "user.duplicate"

    | "role.view"
    | "role.add"
    | "role.remove"
    | "role.edit"
    | "role.enable"
    | "role.disable"
    | "role.duplicate"

    | "setting.view"
    | "setting.business_plan_enablement"
    | "setting.possystem_setting_enablement"

    | "billing.view"
    | "billing.update"


    | "order.take"
    | "order.add"
    | "order.remove"
    | "order.edit"
    | "order.view"
    | "order.cancel"

    | "payment.collect"
    | "payment.view"
    | "payment.cancel"
    | "payment.method"

    | "receipt.print"
    | "receipt.view"
    | "receipt.configuration"

    | "discount.on_select_item"
    | "discount.on_bill"

    | "refund.on_select_item"
    | "refund.all_items_on_receipt"

    | "product.view"
    | "product.add"
    | "product.remove"
    | "product.edit"
    | "product.enable"
    | "product.disable"

    | "menu.view"
    | "menu.add"
    | "menu.remove"
    | "menu.edit"
    | "menu.enable"
    | "menu.disable"

    | "stock.view"
    | "stock.transfer"
    | "stock.take"
    | "stock.return"

    | "table.view"
    | "table.add"
    | "table.remove"
    | "table.edit"
    | "table.enable"
    | "table.disable"

    | "report.view"

    | "customer.view"
    | "customer.add"
    | "customer.remove"
    | "customer.edit"

    | "supplier.view"
    | "supplier.add"
    | "supplier.remove"
    | "supplier.edit"

    | "staff.view"
    | "staff.add"
    | "staff.remove"
    | "staff.edit"

    | "tax.view"
    | "tax.add"
    | "tax.remove"
    | "tax.edit"
    | "tax.enable"
    | "tax.disable"

    | "notification.stock"
    | "notification.discount"
    | "notification.refund"

    | "printer.view"
    | "printer.add"
    | "printer.remove"
    | "printer.edit"
    | "printer.enable"
    | "printer.disable";

export class Permission {
    //Old Permission
    public static readonly viewUsersPermission: PermissionValues = 'users.view';
    public static readonly manageUsersPermission: PermissionValues = 'users.manage';

    public static readonly viewRolesPermission: PermissionValues = 'roles.view';
    public static readonly manageRolesPermission: PermissionValues = 'roles.manage';
    public static readonly assignRolesPermission: PermissionValues = 'roles.assign';

    //New Permission
    public static readonly PartnerView: PermissionValues = "partners.view";
    public static readonly PartnerAdd: PermissionValues = "partners.add";
    public static readonly PartnerRemove: PermissionValues = "partners.remove";
    public static readonly PartnerEdit: PermissionValues = "partners.edit";
    public static readonly PartnerEnable: PermissionValues = "partners.enable";
    public static readonly PartnerDisable: PermissionValues = "partners.disable";
    public static readonly PartnerDuplicate: PermissionValues = "partners.duplicate";

    public static readonly CompanyView: PermissionValues = "company.view";
    public static readonly CompanyAdd: PermissionValues = "company.add";
    public static readonly CompanyRemove: PermissionValues = "company.remove";
    public static readonly CompanyEdit: PermissionValues = "company.edit";
    public static readonly CompanyEnable: PermissionValues = "company.enable";
    public static readonly CompanyDisable: PermissionValues = "company.disable";
    public static readonly CompanyDuplicate: PermissionValues = "company.duplicate";

    public static readonly BranchView: PermissionValues = "branch.view";
    public static readonly BranchAdd: PermissionValues = "branch.add";
    public static readonly BranchRemove: PermissionValues = "branch.remove";
    public static readonly BranchEdit: PermissionValues = "branch.edit";
    public static readonly BranchEnable: PermissionValues = "branch.enable";
    public static readonly BranchDisable: PermissionValues = "branch.disable";
    public static readonly BranchDuplicate: PermissionValues = "branch.duplicate";

    public static readonly BusinessPlanView: PermissionValues = "business_plan.view";
    public static readonly BusinessPlanChange: PermissionValues = "business_plan.change";

    public static readonly UserView: PermissionValues = "user.view";
    public static readonly UserAdd: PermissionValues = "user.add";
    public static readonly UserRemove: PermissionValues = "user.remove";
    public static readonly UserEdit: PermissionValues = "user.edit";
    public static readonly UserEnable: PermissionValues = "user.enable";
    public static readonly UserDisable: PermissionValues = "user.disable";
    public static readonly UserDuplicate: PermissionValues = "user.duplicate";

    public static readonly RoleView: PermissionValues = "role.view";
    public static readonly RoleAdd: PermissionValues = "role.add";
    public static readonly RoleRemove: PermissionValues = "role.remove";
    public static readonly RoleEdit: PermissionValues = "role.edit";
    public static readonly RoleEnable: PermissionValues = "role.enable";
    public static readonly RoleDisable: PermissionValues = "role.disable";
    public static readonly RoleDuplicate: PermissionValues = "role.duplicate";

    public static readonly SettingView: PermissionValues = "setting.view";
    public static readonly SettingBusinessPlanEnablement: PermissionValues = "setting.business_plan_enablement";
    public static readonly SettingPOSSystemSettingEnablement: PermissionValues = "setting.possystem_setting_enablement";

    public static readonly BillingView: PermissionValues = "billing.view";
    public static readonly BillingUpdate: PermissionValues = "billing.update";


    public static readonly OrderTake: PermissionValues = "order.take";
    public static readonly OrderAdd: PermissionValues = "order.add";
    public static readonly OrderRemove: PermissionValues = "order.remove";
    public static readonly OrderEdit: PermissionValues = "order.edit";
    public static readonly OrderView: PermissionValues = "order.view";
    public static readonly OrderCancel: PermissionValues = "order.cancel";

    public static readonly PaymentCollect: PermissionValues = "payment.collect";
    public static readonly PaymentView: PermissionValues = "payment.view";
    public static readonly PaymentCancel: PermissionValues = "payment.cancel";
    public static readonly PaymentMethod: PermissionValues = "payment.method";

    public static readonly ReceiptPrint: PermissionValues = "receipt.print";
    public static readonly ReceiptView: PermissionValues = "receipt.view";
    public static readonly ReceiptConfiguration: PermissionValues = "receipt.configuration";

    public static readonly DiscountOnSelectItem: PermissionValues = "discount.on_select_item";
    public static readonly DiscountOnBill: PermissionValues = "discount.on_bill";

    public static readonly RefundOnSelectItem: PermissionValues = "refund.on_select_item";
    public static readonly RefundAllItemsOnReceipt: PermissionValues = "refund.all_items_on_receipt";

    public static readonly ProductView: PermissionValues = "product.view";
    public static readonly ProductAdd: PermissionValues = "product.add";
    public static readonly ProductRemove: PermissionValues = "product.remove";
    public static readonly ProductEdit: PermissionValues = "product.edit";
    public static readonly ProductEnable: PermissionValues = "product.enable";
    public static readonly ProductDisable: PermissionValues = "product.disable";

    public static readonly MenuView: PermissionValues = "menu.view";
    public static readonly MenuAdd: PermissionValues = "menu.add";
    public static readonly MenuRemove: PermissionValues = "menu.remove";
    public static readonly MenuEdit: PermissionValues = "menu.edit";
    public static readonly MenuEnable: PermissionValues = "menu.enable";
    public static readonly MenuDisable: PermissionValues = "menu.disable";

    public static readonly StockView: PermissionValues = "stock.view";
    public static readonly StockTransfer: PermissionValues = "stock.transfer";
    public static readonly StockTake: PermissionValues = "stock.take";
    public static readonly StockReturn: PermissionValues = "stock.return";

    public static readonly TableView: PermissionValues = "table.view";
    public static readonly TableAdd: PermissionValues = "table.add";
    public static readonly TableRemove: PermissionValues = "table.remove";
    public static readonly TableEdit: PermissionValues = "table.edit";
    public static readonly TableEnable: PermissionValues = "table.enable";
    public static readonly TableDisable: PermissionValues = "table.disable";

    public static readonly ReportView: PermissionValues = "report.view";

    public static readonly CustomerView: PermissionValues = "customer.view";
    public static readonly CustomerAdd: PermissionValues = "customer.add";
    public static readonly CustomerRemove: PermissionValues = "customer.remove";
    public static readonly CustomerEdit: PermissionValues = "customer.edit";

    public static readonly SupplierView: PermissionValues = "supplier.view";
    public static readonly SupplierAdd: PermissionValues = "supplier.add";
    public static readonly SupplierRemove: PermissionValues = "supplier.remove";
    public static readonly SupplierEdit: PermissionValues = "supplier.edit";

    public static readonly StaffView: PermissionValues = "staff.view";
    public static readonly StaffAdd: PermissionValues = "staff.add";
    public static readonly StaffRemove: PermissionValues = "staff.remove";
    public static readonly StaffEdit: PermissionValues = "staff.edit";

    public static readonly TaxView: PermissionValues = "tax.view";
    public static readonly TaxAdd: PermissionValues = "tax.add";
    public static readonly TaxRemove: PermissionValues = "tax.remove";
    public static readonly TaxEdit: PermissionValues = "tax.edit";
    public static readonly TaxEnable: PermissionValues = "tax.enable";
    public static readonly TaxDisable: PermissionValues = "tax.disable";

    public static readonly NotificationStock: PermissionValues = "notification.stock";
    public static readonly NotificationDiscount: PermissionValues = "notification.discount";
    public static readonly NotificationRefund: PermissionValues = "notification.refund";

    public static readonly PrinterView: PermissionValues = "printer.view";
    public static readonly PrinterAdd: PermissionValues = "printer.add";
    public static readonly PrinterRemove: PermissionValues = "printer.remove";
    public static readonly PrinterEdit: PermissionValues = "printer.edit";
    public static readonly PrinterEnable: PermissionValues = "printer.enable";
    public static readonly PrinterDisable: PermissionValues = "printer.disable";

    constructor(name?: PermissionNames, value?: PermissionValues, groupName?: string, description?: string) {
        this.name = name;
        this.value = value;
        this.groupName = groupName;
        this.description = description;
    }

    public name: PermissionNames;
    public value: PermissionValues;
    public groupName: string;
    public description: string;
}





