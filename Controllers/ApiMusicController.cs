using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MusicSearch.Interfaces;

namespace MusicSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private readonly ILogger<MusicController> _logger;
        private readonly ISearchService _searchService;

        public MusicController(ILogger<MusicController> logger, ISearchService searchService)
        {
            _logger = logger;
            _searchService = searchService;
        }

        [HttpGet]
        [Route("album")]
        public async Task<string> GetAlbum(string query)
        {
            var response = await _searchService.SearchByAlbum(query);
            return response;
        }

        [HttpGet]
        [Route("artist")]
        public async Task<string> GetArtist(string query)
        {
            var response = await _searchService.SearchByArtist(query);
            return response;
        }

        [HttpGet]
        [Route("song")]
        public async Task<string> GetSong(string query)
        {
            var response = await _searchService.SearchBySong(query);
            return response;
        }
    }
}
