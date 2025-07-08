using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VasiukovSite.BackEndNet.API.Models;

namespace VasiukovSite.BackEndNet.API.Controllers
{
    [ApiController]
    [Route("/")]
    public class ServerController : ControllerBase
    {
        private readonly IServerDataService _serverDataService;
        public ServerController(IServerDataService serverDataService)
        {
            _serverDataService = serverDataService;
        }

        [HttpGet]
        public ServerData GetServerData()
        {
            var a = _serverDataService.GetServerData();
            return _serverDataService.GetServerData();
        }
    }
}
