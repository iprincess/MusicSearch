using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MusicSearch.Controllers
{
    public class BaseController : Controller
    {
		public bool IsMobile()
		{
			Regex _rgMobile = new Regex(@"\bmobile", RegexOptions.IgnoreCase);

			// use 'mobile' as a default if someone hits this with no ua,
			string ua = GetUserAgent();

			if (string.IsNullOrEmpty(ua))
			{
				return true;
			}

			if (_rgMobile.IsMatch(ua))
			{
				return true;
			}

			return false;
		}

		protected string GetUserAgent()
		{
			var userAgent = Request.Headers["User-Agent"];

			if (string.IsNullOrEmpty(userAgent))
			{
				return null;
			}
			else
			{
				return Convert.ToString(userAgent[0]);
			}
		}
	}
}