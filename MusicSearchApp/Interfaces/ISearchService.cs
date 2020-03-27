using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MusicSearch.Interfaces
{
	public interface ISearchService
	{
		public Task<string> SearchByAlbum(string query);
		public Task<string> SearchByArtist(string query);
		public Task<string> SearchBySong(string query);
	}
}
