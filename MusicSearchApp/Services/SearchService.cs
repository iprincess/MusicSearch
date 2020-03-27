using MusicSearch.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace MusicSearch.Services
{
	public class SearchService : ISearchService
	{
		// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching
		public HttpClient Client { get; }

		public SearchService(HttpClient client)
		{
			client.BaseAddress = new Uri("https://itunes.apple.com/search/");

			Client = client;
		}

		public async Task<string> SearchByAlbum(string query)
		{
			var encodedQuery = HttpUtility.UrlEncode(query);
			var url = $"?term={encodedQuery}&media=music&entity=album&attribute=albumTerm&limit=25";
			var response = await Client.GetAsync(url);

			response.EnsureSuccessStatusCode();

			var result = await response.Content.ReadAsStringAsync();

			return result;
		}

		public async Task<string> SearchByArtist(string query)
		{
			var encodedQuery = HttpUtility.UrlEncode(query);
			var url = $"?term={encodedQuery}&media=music&entity=musicArtist&attribute=artistTerm&limit=25";
			var response = await Client.GetAsync(url);

			response.EnsureSuccessStatusCode();

			var result = await response.Content.ReadAsStringAsync();

			return result;
		}

		public async Task<string> SearchBySong(string query)
		{
			var encodedQuery = HttpUtility.UrlEncode(query);
			var url = $"?term={encodedQuery}&media=music&entity=song&attribute=songTerm&limit=25";
			var response = await Client.GetAsync(url);

			response.EnsureSuccessStatusCode();

			var result = await response.Content.ReadAsStringAsync();

			return result;
		}
	}

}
