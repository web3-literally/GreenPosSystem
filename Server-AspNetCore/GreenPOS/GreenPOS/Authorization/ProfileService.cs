// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using DAL.Core;
using DAL.Models;

namespace GreenPOS.Authorization
{
    public class ProfileService : IProfileService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _claimsFactory;

        public ProfileService(UserManager<ApplicationUser> userManager, IUserClaimsPrincipalFactory<ApplicationUser> claimsFactory)
        {
            _userManager = userManager;
            _claimsFactory = claimsFactory;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await _userManager.FindByIdAsync(sub);
            var principal = await _claimsFactory.CreateAsync(user);

            var claims = principal.Claims.ToList();
            claims = claims.Where(claim => context.RequestedClaimTypes.Contains(claim.Type)).ToList();

            if (user.JobTitle != null)
                claims.Add(new Claim(PropertyConstants.JobTitle, user.JobTitle));

            if (user.FullName != null)
                claims.Add(new Claim(PropertyConstants.FullName, user.FullName));

            if (user.Configuration != null)
                claims.Add(new Claim(PropertyConstants.Configuration, user.Configuration));

            //if (user.POSUserName != null)
            //    claims.Add(new Claim(PropertyConstants.POSUserName, user.POSUserName));

            //if (user.POSUserLogin != null)
            //    claims.Add(new Claim(PropertyConstants.POSUserLogin, user.POSUserLogin));

            //if (user.VerifyStatus != null)
            //    claims.Add(new Claim(PropertyConstants.VerifyStatus, user.VerifyStatus));

            if (user.StaffName != null)
                claims.Add(new Claim(PropertyConstants.StaffName, user.StaffName));

            if (user.StaffID != null)
                claims.Add(new Claim(PropertyConstants.StaffID, user.StaffID));
            if (user.CompanyName != null)
                claims.Add(new Claim(PropertyConstants.CompanyName, user.CompanyName));

            if (user.BranchName != null)
                claims.Add(new Claim(PropertyConstants.BranchName, user.BranchName));

            if (user.ManageBy != null)
                claims.Add(new Claim(PropertyConstants.ManageBy, user.ManageBy));


            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await _userManager.FindByIdAsync(sub);

            context.IsActive = (user != null) && user.IsEnabled;
        }
    }
}