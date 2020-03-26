using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MusicSearch.ViewModels;

namespace MusicSearch.Controllers
{
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ILoggerFactory _loggerFactory;

        public HomeController(ILoggerFactory loggerFactory, ILogger<HomeController> logger)
        {
            _logger = logger;
            _loggerFactory = loggerFactory;
        }
        public IActionResult Index()
        {
            var isMobile = IsMobile();
            var model = new IndexViewModel(_loggerFactory, isMobile);

            if (isMobile)
            {
                return View(model);
            }
            else
            {
                return View("Views/Home/Index.Desktop.cshtml", model);
            }
        }
    }
}