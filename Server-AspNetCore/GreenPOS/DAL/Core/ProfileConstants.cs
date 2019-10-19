// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Core
{
    public static class ClaimConstants
    {
        ///<summary>A claim that specifies the subject of an entity</summary>
        public const string Subject = "sub";

        ///<summary>A claim that specifies the permission of an entity</summary>
        public const string Permission = "permission";
    }



    public static class PropertyConstants
    {

        ///<summary>A property that specifies the full name of an entity</summary>
        public const string FullName = "fullname";

        ///<summary>A property that specifies the job title of an entity</summary>
        public const string JobTitle = "jobtitle";

        ///<summary>A property that specifies the configuration/customizations of an entity</summary>
        public const string Configuration = "configuration";

        //public const string POSUserName = "posusername";
        //public const string POSUserLogin = "posuserlogin";
        //public const string VerifyStatus = "VerifyStatus";
        public const string StaffName = "staffname";
        public const string StaffID = "staffid";
        public const string CompanyName = "companyname";
        public const string BranchName = "branchname";
        public const string ManageBy = "manageby";
    }



    public static class ScopeConstants
    {
        ///<summary>A scope that specifies the roles of an entity</summary>
        public const string Roles = "roles";
    }
}
