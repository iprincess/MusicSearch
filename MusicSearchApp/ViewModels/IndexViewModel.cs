using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicSearch.ViewModels
{
	public class IndexViewModel
	{
		private readonly ILogger<IndexViewModel> _logger;
		private bool IsMobile;

		public IndexViewModel(ILoggerFactory loggerFactory, bool isMobile)
		{
			_logger = loggerFactory.CreateLogger<IndexViewModel>();
			IsMobile = isMobile;
		}

	}
}
