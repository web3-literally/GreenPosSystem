using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class UserSession: AuditableEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string StaffName { get; set; }
        public DateTime SignInAt { get; set; }
        public DateTime SignOutAt { get; set; }
    }
}
