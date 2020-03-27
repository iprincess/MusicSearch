using Moq;
using Moq.Protected;
using MusicSearch.Services;
using NUnit.Framework;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace MusicSearch.Tests.Services
{
	[TestFixture]
	public class SeachServiceTests
	{
		private SearchService _searchService;
		private Mock<FakeHttpMessageHandler> _mockMessageHandler;
		private Mock<HttpRequestMessage> _mockHttpRequestMessage;
		private string urlTemplate = "https://itunes.apple.com/search/?term={QUERY}&media=music&entity={ENTITY}&attribute={ATTRIBUTE}&limit=25";
		private string query = "unicorn";

		[SetUp]
		public void Setup()
		{
			_mockMessageHandler = new Mock<FakeHttpMessageHandler>() { CallBase = true };
			_mockHttpRequestMessage = new Mock<HttpRequestMessage>();

			// setup a happy path
			_mockMessageHandler.Setup(m => m.Send(It.IsAny<HttpRequestMessage>()))
				.Returns(new HttpResponseMessage
				{
					StatusCode = System.Net.HttpStatusCode.OK,
					Content = new StringContent("some string")
				});			

			var httpClient = new HttpClient(_mockMessageHandler.Object);
			_searchService = new SearchService(httpClient);
		}

		[TearDown]
		public void TearDown()
		{
			_mockHttpRequestMessage.Object.RequestUri = null;
		}

		[Test]
		public async Task SearchByAlbumUsesCorrectUrl()
		{
			var entity = "album";
			var attribute = "albumTerm";
			var expectedUrl= urlTemplate.Replace("{QUERY}", query).Replace("{ENTITY}", entity).Replace("{ATTRIBUTE}", attribute);
			var expectedRequestMessage = It.Is<HttpRequestMessage>(r => 
				r.RequestUri == new System.Uri(expectedUrl) && 
				r.Method == HttpMethod.Get
			);

			var result = await _searchService.SearchByAlbum(query);

			Assert.IsNotNull(result);

			_mockMessageHandler.Verify(m => m.Send(It.Is<HttpRequestMessage>(r =>
				r.RequestUri == new System.Uri(expectedUrl)
			)));

		}

		[Test]
		public async Task SearchByArtistUsesCorrectUrl()
		{	
			var entity = "musicArtist";
			var attribute = "artistTerm";
			var expectedUrl = urlTemplate.Replace("{QUERY}", query).Replace("{ENTITY}", entity).Replace("{ATTRIBUTE}", attribute);
			var expectedRequestMessage = It.Is<HttpRequestMessage>(r =>
				r.RequestUri == new System.Uri(expectedUrl) &&
				r.Method == HttpMethod.Get
			);

			var result = await _searchService.SearchByArtist(query);

			Assert.IsNotNull(result);

			_mockMessageHandler.Verify(m => m.Send(It.Is<HttpRequestMessage>(r =>
				r.RequestUri == new System.Uri(expectedUrl)
			)));

		}

		[Test]
		public async Task SearchBySongUsesCorrectUrl()
		{
			var entity = "song";
			var attribute = "songTerm";
			var expectedUrl = urlTemplate.Replace("{QUERY}", query).Replace("{ENTITY}", entity).Replace("{ATTRIBUTE}", attribute);
			var expectedRequestMessage = It.Is<HttpRequestMessage>(r =>
				r.RequestUri == new System.Uri(expectedUrl) &&
				r.Method == HttpMethod.Get
			);

			var result = await _searchService.SearchBySong(query);

			Assert.IsNotNull(result);

			_mockMessageHandler.Verify(m => m.Send(It.Is<HttpRequestMessage>(r =>
				r.RequestUri == new System.Uri(expectedUrl)
			)));

		}

		[Test]
		public async Task ShouldReturnThirdPartyResponse()
		{
			System.Reflection.Assembly a = System.Reflection.Assembly.GetExecutingAssembly();
			var stream = a.GetManifestResourceStream("MusicSearch.Tests.Resources.itunesResponse.json");
			string response;

			using (StreamReader sr = new StreamReader(stream))
			{
				response = sr.ReadToEnd();
			}

			_mockMessageHandler.Setup(m => m.Send(It.IsAny<HttpRequestMessage>()))
				.Returns(new HttpResponseMessage
				{
					StatusCode = System.Net.HttpStatusCode.OK,
					RequestMessage = new HttpRequestMessage() { RequestUri = null },
					Content = new StringContent(response)
				});

			var result = await _searchService.SearchByAlbum(query);

			Assert.IsNotNull(result);
			Assert.AreEqual(response, result);

		}

		[Test]
		public async Task ShouldThrowExceptionIfUnsuccessful()
		{
			_mockMessageHandler.Setup(m => m.Send(It.IsAny<HttpRequestMessage>()))
				.Returns(new HttpResponseMessage
				{
					StatusCode = System.Net.HttpStatusCode.InternalServerError,
				});

			Assert.That(async() => { var result = await _searchService.SearchByAlbum(query); }, Throws.TypeOf<System.Net.Http.HttpRequestException>());

		}
	}
}