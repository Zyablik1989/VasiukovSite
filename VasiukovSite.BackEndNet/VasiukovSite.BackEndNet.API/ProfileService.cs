﻿using VasiukovSite.BackEndNet.API.Models;

namespace VasiukovSite.BackEndNet.API
{
    public class ProfileService : IProfileService
    {
        public Profile Profile { get; } = new Profile();
    }
}
