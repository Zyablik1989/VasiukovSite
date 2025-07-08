using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VasiukovSite.BackEndNet.API.Models;

namespace VasiukovSite.BackEndNet.API.Controllers
{
    [Route("api/profile/v1/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ILogger<ProfileController> _logger;
        private readonly IProfileService _profileService;

        public ProfileController(ILogger<ProfileController> logger,
            IProfileService profileService)
        {
            _logger = logger;
            _profileService = profileService;
        }

        [HttpGet]
        [Route("profileData")]
        public Profile GetProfileData()
        {
            return _profileService.Profile;
        }
    }
}
