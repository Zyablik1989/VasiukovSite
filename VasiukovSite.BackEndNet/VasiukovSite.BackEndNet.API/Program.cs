using VasiukovSite.BackEndNet.API;
using VasiukovSite.BackEndNet.API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<ServerData>();
builder.Services.AddSingleton<IServerDataService, ServerDataService>();
builder.Services.AddSingleton<IProfileService, ProfileService>();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowAll");
//#if DEBUG
//app.UseHttpsRedirection();
//#endif
//app.UseAuthorization();

app.MapControllers();

app.Run();
