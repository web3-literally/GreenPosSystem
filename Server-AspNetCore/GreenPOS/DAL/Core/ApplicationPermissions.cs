// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

namespace DAL.Core
{
    public static class ApplicationPermissions
    {
        public static ReadOnlyCollection<ApplicationPermission> AllPermissions;

        
        /// <summary>
        /// Backoffice Admin Capabilities
        /// </summary>
        /// 
        public const string ManagePartnerPermissionGroupName = "Manage Partner";
        public static ApplicationPermission PartnerView             = new ApplicationPermission("Partner: View", "partners.view", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerAdd              = new ApplicationPermission("Partner: Add", "partners.add", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerRemove           = new ApplicationPermission("Partner: Remove", "partners.remove", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerEdit             = new ApplicationPermission("Partner: Edit", "partners.edit", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerEnable           = new ApplicationPermission("Partner: Enable", "partners.enable", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerDisable          = new ApplicationPermission("Partner: Disable", "partners.disable", ManagePartnerPermissionGroupName, "");
        public static ApplicationPermission PartnerDuplicate        = new ApplicationPermission("Partner: Duplicate", "partners.duplicate", ManagePartnerPermissionGroupName, "");

        public const string ManageCompanyPermissionGroupName = "Manage Company";
        public static ApplicationPermission CompanyView             = new ApplicationPermission("Company: View", "company.view", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyAdd              = new ApplicationPermission("Company: Add", "company.add", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyRemove           = new ApplicationPermission("Company: Remove", "company.remove", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyEdit             = new ApplicationPermission("Company: Edit", "company.edit", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyEnable           = new ApplicationPermission("Company: Enable", "company.enable", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyDisable          = new ApplicationPermission("Company: Disable", "company.disable", ManageCompanyPermissionGroupName, "");
        public static ApplicationPermission CompanyDuplicate        = new ApplicationPermission("Company: Duplicate", "company.duplicate", ManageCompanyPermissionGroupName, "");

        public const string ManageBranchPermissionGroupName = "Manage Branch";
        public static ApplicationPermission BranchView              = new ApplicationPermission("Branch: View", "branch.view", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchAdd               = new ApplicationPermission("Branch: Add", "branch.add", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchRemove            = new ApplicationPermission("Branch: Remove", "branch.remove", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchEdit              = new ApplicationPermission("Branch: Edit", "branch.edit", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchEnable            = new ApplicationPermission("Branch: Enable", "branch.enable", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchDisable           = new ApplicationPermission("Branch: Disable", "branch.disable", ManageBranchPermissionGroupName, "");
        public static ApplicationPermission BranchDuplicate         = new ApplicationPermission("Branch: Duplicate", "branch.duplicate", ManageBranchPermissionGroupName, "");

        public const string ManageBusinessPlanPermissionGroupName = "Manage Business Plan";
        public static ApplicationPermission BusinessPlanView        = new ApplicationPermission("Business Plan: View", "business_plan.view", ManageBusinessPlanPermissionGroupName, "");
        public static ApplicationPermission BusinessPlanChange      = new ApplicationPermission("Business Plan: Change", "business_plan.change", ManageBusinessPlanPermissionGroupName, "");

        public const string ManageUserPermissionGroupName = "Manage User";
        public static ApplicationPermission UserView                = new ApplicationPermission("User: View", "user.view", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserAdd                 = new ApplicationPermission("User: Add", "user.add", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserRemove              = new ApplicationPermission("User: Remove", "user.remove", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserEdit                = new ApplicationPermission("User: Edit", "user.edit", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserEnable              = new ApplicationPermission("User: Enable", "user.enable", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserDisable             = new ApplicationPermission("User: Disable", "user.disable", ManageUserPermissionGroupName, "");
        public static ApplicationPermission UserDuplicate           = new ApplicationPermission("User: Duplicate", "user.duplicate", ManageUserPermissionGroupName, "");

        public const string ManageRolePermissionGroupName = "Manage Role";
        public static ApplicationPermission RoleView                = new ApplicationPermission("Role: View", "role.view", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleAdd                 = new ApplicationPermission("Role: Add", "role.add", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleRemove              = new ApplicationPermission("Role: Remove", "role.remove", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleEdit                = new ApplicationPermission("Role: Edit", "role.edit", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleEnable              = new ApplicationPermission("Role: Enable", "role.enable", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleDisable             = new ApplicationPermission("Role: Disable", "role.disable", ManageRolePermissionGroupName, "");
        public static ApplicationPermission RoleDuplicate           = new ApplicationPermission("Role: Duplicate", "role.duplicate", ManageRolePermissionGroupName, "");

        public const string ManageSettingPermissionGroupName = "Manage Setting";
        public static ApplicationPermission SettingView                         = new ApplicationPermission("Setting: View", "setting.view", ManageSettingPermissionGroupName, "");
        public static ApplicationPermission SettingBusinessPlanEnablement       = new ApplicationPermission("Setting: Business Plan Enablement", "setting.business_plan_enablement", ManageSettingPermissionGroupName, "");
        public static ApplicationPermission SettingPOSSystemSettingEnablement   = new ApplicationPermission("Setting: POS System Setting Enablement", "setting.possystem_setting_enablement", ManageSettingPermissionGroupName, "");

        public const string ManageBillingPermissionGroupName = "Manage Billing";
        public static ApplicationPermission BillingView             = new ApplicationPermission("Billing: View", "billing.view", ManageBillingPermissionGroupName, "");
        public static ApplicationPermission BillingUpdate           = new ApplicationPermission("Billing: Update", "billing.update", ManageBillingPermissionGroupName, "");

        /// <summary>
        /// Fronted POS User Capabilities
        /// </summary>
        public const string ManageOrderPermissionGroupName = "Manage Order";
        public static ApplicationPermission OrderTake               = new ApplicationPermission("Order: Take", "order.take", ManageOrderPermissionGroupName, "");
        public static ApplicationPermission OrderAdd                = new ApplicationPermission("Order: Add", "order.add", ManageOrderPermissionGroupName, "");
        public static ApplicationPermission OrderRemove             = new ApplicationPermission("Order: Remove", "order.remove", ManageOrderPermissionGroupName, "");
        public static ApplicationPermission OrderEdit               = new ApplicationPermission("Order: Edit", "order.edit", ManageOrderPermissionGroupName, "");
        public static ApplicationPermission OrderView               = new ApplicationPermission("Order: View", "order.view", ManageOrderPermissionGroupName, "");
        public static ApplicationPermission OrderCancel             = new ApplicationPermission("Order: Cancel", "order.cancel", ManageOrderPermissionGroupName, "");
        
        public const string ManagePaymentPermissionGroupName = "Manage Payment";
        public static ApplicationPermission PaymentCollect          = new ApplicationPermission("Payment: Collect", "payment.collect", ManagePaymentPermissionGroupName, "");
        public static ApplicationPermission PaymentView             = new ApplicationPermission("Payment: View", "payment.view", ManagePaymentPermissionGroupName, "");
        public static ApplicationPermission PaymentCancel           = new ApplicationPermission("Payment: Cancel", "payment.cancel", ManagePaymentPermissionGroupName, "");
        public static ApplicationPermission PaymentMethod           = new ApplicationPermission("Payment: Method", "payment.method", ManagePaymentPermissionGroupName, "");
        
        public const string ManageReceiptPermissionGroupName = "Manage Receipt";
        public static ApplicationPermission ReceiptPrint            = new ApplicationPermission("Receipt: Print", "receipt.print", ManageReceiptPermissionGroupName, "");
        public static ApplicationPermission ReceiptView             = new ApplicationPermission("Receipt: View", "receipt.view", ManageReceiptPermissionGroupName, "");
        public static ApplicationPermission ReceiptConfiguration    = new ApplicationPermission("Receipt: Configuration", "receipt.configuration", ManageReceiptPermissionGroupName, "");

        public const string ManageDicountPermissionGroupName = "Manage Discount";
        public static ApplicationPermission DiscountOnSelectItem    = new ApplicationPermission("Discount: On Select Item", "discount.on_select_item", ManageDicountPermissionGroupName, "");
        public static ApplicationPermission DiscountOnBill          = new ApplicationPermission("Discount: On Bill", "discount.on_bill", ManageDicountPermissionGroupName, "");

        public const string ManageRefundPermissionGroupName = "Manage Refund";
        public static ApplicationPermission RefundOnSelectItem      = new ApplicationPermission("Refund: On Select Item", "refund.on_select_item", ManageRefundPermissionGroupName, "");
        public static ApplicationPermission RefundAllItemsOnReceipt = new ApplicationPermission("Refund: All Items On Receipt", "refund.all_items_on_receipt", ManageRefundPermissionGroupName, "");
        
        public const string ManageProductPermissionGroupName = "Manage Product";
        public static ApplicationPermission ProductView             = new ApplicationPermission("Product: View", "product.view", ManageProductPermissionGroupName, "");
        public static ApplicationPermission ProductAdd              = new ApplicationPermission("Product: Add", "product.add", ManageProductPermissionGroupName, "");
        public static ApplicationPermission ProductRemove           = new ApplicationPermission("Product: Remove", "product.remove", ManageProductPermissionGroupName, "");
        public static ApplicationPermission ProductEdit             = new ApplicationPermission("Product: Edit", "product.edit", ManageProductPermissionGroupName, "");
        public static ApplicationPermission ProductEnable           = new ApplicationPermission("Product: Enable", "product.enable", ManageProductPermissionGroupName, "");
        public static ApplicationPermission ProductDisable          = new ApplicationPermission("Product: Disable", "product.disable", ManageProductPermissionGroupName, "");

        public const string ManageMenuPermissionGroupName = "Manage Menu";
        public static ApplicationPermission MenuView                = new ApplicationPermission("Menu: View", "menu.view", ManageMenuPermissionGroupName, "");
        public static ApplicationPermission MenuAdd                 = new ApplicationPermission("Menu: Add", "menu.add", ManageMenuPermissionGroupName, "");
        public static ApplicationPermission MenuRemove              = new ApplicationPermission("Menu: Remove", "menu.remove", ManageMenuPermissionGroupName, "");
        public static ApplicationPermission MenuEdit                = new ApplicationPermission("Menu: Edit", "menu.edit", ManageMenuPermissionGroupName, "");
        public static ApplicationPermission MenuEnable              = new ApplicationPermission("Menu: Enable", "menu.enable", ManageMenuPermissionGroupName, "");
        public static ApplicationPermission MenuDisable             = new ApplicationPermission("Menu: Disable", "menu.disable", ManageMenuPermissionGroupName, "");

        public const string ManageStockPermissionGroupName = "Manage Stock";
        public static ApplicationPermission StockView               = new ApplicationPermission("Stock: View", "stock.view", ManageStockPermissionGroupName, "");
        public static ApplicationPermission StockTransfer           = new ApplicationPermission("Stock: Transfer", "stock.transfer", ManageStockPermissionGroupName, "");
        public static ApplicationPermission StockTake               = new ApplicationPermission("Stock: Take", "stock.take", ManageStockPermissionGroupName, "");
        public static ApplicationPermission StockReturn             = new ApplicationPermission("Stock: Return", "stock.return", ManageStockPermissionGroupName, "");

        public const string ManageTablePermissionGroupName = "Manage Table";
        public static ApplicationPermission TableView               = new ApplicationPermission("Table: View", "table.view", ManageTablePermissionGroupName, "");
        public static ApplicationPermission TableAdd                = new ApplicationPermission("Table: Add", "table.add", ManageTablePermissionGroupName, "");
        public static ApplicationPermission TableRemove             = new ApplicationPermission("Table: Remove", "table.remove", ManageTablePermissionGroupName, "");
        public static ApplicationPermission TableEdit               = new ApplicationPermission("Table: Edit", "table.edit", ManageTablePermissionGroupName, "");
        public static ApplicationPermission TableEnable             = new ApplicationPermission("Table: Enable", "table.enable", ManageTablePermissionGroupName, "");
        public static ApplicationPermission TableDisable            = new ApplicationPermission("Table: Disable", "table.disable", ManageTablePermissionGroupName, "");

        public const string ManageReportPermissionGroupName = "Manage Report";
        public static ApplicationPermission ReportView = new ApplicationPermission("Report: View", "report.view", ManageReportPermissionGroupName, "");

        public const string ManageCustomerPermissionGroupName = "Manage Customer";
        public static ApplicationPermission CustomerView            = new ApplicationPermission("Customer: View", "customer.view", ManageTablePermissionGroupName, "");
        public static ApplicationPermission CustomerAdd             = new ApplicationPermission("Customer: Add", "customer.add", ManageTablePermissionGroupName, "");
        public static ApplicationPermission CustomerRemove          = new ApplicationPermission("Customer: Remove", "customer.remove", ManageTablePermissionGroupName, "");
        public static ApplicationPermission CustomerEdit            = new ApplicationPermission("Customer: Edit", "customer.edit", ManageTablePermissionGroupName, "");

        public const string ManageSupplierPermissionGroupName = "Manage Supplier";
        public static ApplicationPermission SupplierView            = new ApplicationPermission("Supplier: View", "supplier.view", ManageSupplierPermissionGroupName, "");
        public static ApplicationPermission SupplierAdd             = new ApplicationPermission("Supplier: Add", "supplier.add", ManageSupplierPermissionGroupName, "");
        public static ApplicationPermission SupplierRemove          = new ApplicationPermission("Supplier: Remove", "supplier.remove", ManageSupplierPermissionGroupName, "");
        public static ApplicationPermission SupplierEdit            = new ApplicationPermission("Supplier: Edit", "supplier.edit", ManageSupplierPermissionGroupName, "");

        public const string ManageStaffPermissionGroupName = "Manage Staff";
        public static ApplicationPermission StaffView               = new ApplicationPermission("Staff: View", "staff.view", ManageStaffPermissionGroupName, "");
        public static ApplicationPermission StaffAdd                = new ApplicationPermission("Staff: Add", "staff.add", ManageStaffPermissionGroupName, "");
        public static ApplicationPermission StaffRemove             = new ApplicationPermission("Staff: Remove", "staff.remove", ManageStaffPermissionGroupName, "");
        public static ApplicationPermission StaffEdit               = new ApplicationPermission("Staff: Edit", "staff.edit", ManageStaffPermissionGroupName, "");

        public const string ManageTaxPermissionGroupName = "Manage Tax";
        public static ApplicationPermission TaxView                 = new ApplicationPermission("Tax: View", "tax.view", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission TaxAdd                  = new ApplicationPermission("Tax: Add", "tax.add", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission TaxRemove               = new ApplicationPermission("Tax: Remove", "tax.remove", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission TaxEdit                 = new ApplicationPermission("Tax: Edit", "tax.edit", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission TaxEnable               = new ApplicationPermission("Tax: Enable", "tax.enable", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission TaxDisable              = new ApplicationPermission("Tax: Disable", "tax.disable", ManageTaxPermissionGroupName, "");

        public const string ManageNotificationPermissionGroupName = "Manage Notification";
        public static ApplicationPermission NotificationStock       = new ApplicationPermission("Notification: Stock", "notification.stock", ManageNotificationPermissionGroupName, "");
        public static ApplicationPermission NotificationDiscount    = new ApplicationPermission("Notification: Discount", "notification.discount", ManageNotificationPermissionGroupName, "");
        public static ApplicationPermission NotificationRefund      = new ApplicationPermission("Notification: Refund", "notification.refund", ManageNotificationPermissionGroupName, "");

        public const string ManagePrinterPermissionGroupName = "Manage Printer";
        public static ApplicationPermission PrinterView             = new ApplicationPermission("Printer: View", "printer.view", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission PrinterAdd              = new ApplicationPermission("Printer: Add", "printer.add", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission PrinterRemove           = new ApplicationPermission("Printer: Remove", "printer.remove", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission PrinterEdit             = new ApplicationPermission("Printer: Edit", "printer.edit", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission PrinterEnable           = new ApplicationPermission("Printer: Enable", "printer.enable", ManageTaxPermissionGroupName, "");
        public static ApplicationPermission PrinterDisable          = new ApplicationPermission("Printer: Disable", "printer.disable", ManageTaxPermissionGroupName, "");
        


        /// <summary>
        /// OLD
        /// </summary>
        public const string UsersPermissionGroupName = "User Permissions";
        public static ApplicationPermission ViewUsers = new ApplicationPermission("View Users", "users.view", UsersPermissionGroupName, "Permission to view other users account details");
        public static ApplicationPermission ManageUsers = new ApplicationPermission("Manage Users", "users.manage", UsersPermissionGroupName, "Permission to create, delete and modify other users account details");

        public const string RolesPermissionGroupName = "Role Permissions";
        public static ApplicationPermission ViewRoles = new ApplicationPermission("View Roles", "roles.view", RolesPermissionGroupName, "Permission to view available roles");
        public static ApplicationPermission ManageRoles = new ApplicationPermission("Manage Roles", "roles.manage", RolesPermissionGroupName, "Permission to create, delete and modify roles");
        public static ApplicationPermission AssignRoles = new ApplicationPermission("Assign Roles", "roles.assign", RolesPermissionGroupName, "Permission to assign roles to users");


        static ApplicationPermissions()
        {
            List<ApplicationPermission> allPermissions = new List<ApplicationPermission>()
            {
                PartnerView,     
                PartnerAdd,      
                PartnerRemove,   
                PartnerEdit,     
                PartnerEnable,
                PartnerDisable,
                PartnerDuplicate,

                CompanyView,
                CompanyAdd,
                CompanyRemove,
                CompanyEdit,
                CompanyEnable,
                CompanyDisable,
                CompanyDuplicate,

                BranchView,
                BranchAdd,
                BranchRemove,
                BranchEdit,
                BranchEnable,
                BranchDisable,
                BranchDuplicate,

                BusinessPlanView,
                BusinessPlanChange,

                UserView,
                UserAdd,
                UserRemove,
                UserEdit,
                UserEnable,
                UserDisable,
                UserDuplicate,

                RoleView,
                RoleAdd,
                RoleRemove,
                RoleEdit,
                RoleEnable,
                RoleDisable,
                RoleDuplicate,

                SettingView,
                SettingBusinessPlanEnablement,
                SettingPOSSystemSettingEnablement,

                BillingView,
                BillingUpdate,

                OrderTake,
                OrderAdd,
                OrderRemove,
                OrderEdit,
                OrderView,
                OrderCancel,

                PaymentCollect,
                PaymentView,
                PaymentCancel,
                PaymentMethod,

                ReceiptPrint,
                ReceiptView,
                ReceiptConfiguration,

                DiscountOnSelectItem,
                DiscountOnBill,

                RefundOnSelectItem,
                RefundAllItemsOnReceipt,

                ProductView,
                ProductAdd,
                ProductRemove,
                ProductEdit,
                ProductEnable,
                ProductDisable,

                MenuView,
                MenuAdd,
                MenuRemove,
                MenuEdit,
                MenuEnable,
                MenuDisable,

                StockView,
                StockTransfer,
                StockTake,
                StockReturn,

                TableView,
                TableAdd,
                TableRemove,
                TableEdit,
                TableEnable,
                TableDisable,

                ReportView,

                CustomerView,
                CustomerAdd,
                CustomerRemove,
                CustomerEdit,

                SupplierView,
                SupplierAdd,
                SupplierRemove,
                SupplierEdit,

                StaffView,
                StaffAdd,
                StaffRemove,
                StaffEdit,

                TaxView,
                TaxAdd,
                TaxRemove,
                TaxEdit,
                TaxEnable,
                TaxDisable,

                NotificationStock,
                NotificationDiscount,
                NotificationRefund,

                PrinterView,
                PrinterAdd,
                PrinterRemove,
                PrinterEdit,
                PrinterEnable,
                PrinterDisable,
                

                //////////////OLD//////////////
                ViewUsers,
                ManageUsers,

                ViewRoles,
                ManageRoles,
                AssignRoles,
            };

            AllPermissions = allPermissions.AsReadOnly();
        }

        public static ApplicationPermission GetPermissionByName(string permissionName)
        {
            return AllPermissions.Where(p => p.Name == permissionName).SingleOrDefault();
        }

        public static ApplicationPermission GetPermissionByValue(string permissionValue)
        {
            return AllPermissions.Where(p => p.Value == permissionValue).SingleOrDefault();
        }

        public static string[] GetAllPermissionValues()
        {
            return AllPermissions.Select(p => p.Value).ToArray();
        }

        public static string[] GetAdministrativePermissionValues()
        {
            return new string[] { ManageUsers, ManageRoles, AssignRoles };
        }
    }



    public class ApplicationPermission
    {
        public ApplicationPermission()
        { }

        public ApplicationPermission(string name, string value, string groupName, string description = null)
        {
            Name = name;
            Value = value;
            GroupName = groupName;
            Description = description;
        }



        public string Name { get; set; }
        public string Value { get; set; }
        public string GroupName { get; set; }
        public string Description { get; set; }


        public override string ToString()
        {
            return Value;
        }


        public static implicit operator string(ApplicationPermission permission)
        {
            return permission.Value;
        }
    }
}
