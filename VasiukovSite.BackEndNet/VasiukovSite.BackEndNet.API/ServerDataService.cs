using System.Globalization;
using VasiukovSite.BackEndNet.API.Models;

namespace VasiukovSite.BackEndNet.API
{
    public class ServerDataService : IServerDataService
    {
        private readonly ServerData _serverData;
        private readonly DateTime _serverStartupTime;

        public ServerDataService(ServerData serverData)
        {
            _serverStartupTime = DateTime.Now;
            _serverData = serverData;
            _serverData.StartTime = _serverStartupTime.ToString(CultureInfo.InvariantCulture);
        }
        public ServerData GetServerData()
        {
            var upTime = (DateTime.Now - _serverStartupTime);
            _serverData.UpTime = string.Format("{0:%d} days, {0:%h} hours, {0:%m} minutes, {0:%s} seconds", upTime);
            return _serverData;
        }
    }
}
