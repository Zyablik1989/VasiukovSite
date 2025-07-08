namespace VasiukovSite.BackEndNet.API.Models
{
    public class Profile
    {
        public string Name
        {
            get
            {
                return "Aleksei Vasiukov";
            }
        }
        public string Occupation
        {
            get
            {
                return @$"Occupation: currently .Net (C#, WPF, MAUI, XAMARIN) Developer, future Angular Fullstack Developer, former Support Engineer.";
            }
        }

        public string OccupationDetails
        {
            get
            {
                return $@"I am working on WPF projects mostly. By the moment I've been honored to serve for several multicultural companies located in Canada, Portugal, Switzerland and Russia.
Next step for me will be switching to Angular javascript framework and have .NET as backend (just like I do for this personal website). 
My knowledge in SQLite and MS SQL I'd like to also apply to implement assets retrieval for this site.
Backend server with an API for this website placed on dedicated Ubuntu linux behind nginx and https-certified just as the site itself.";
            }
        }
    }
}
