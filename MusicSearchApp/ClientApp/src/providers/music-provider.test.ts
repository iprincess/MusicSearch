import * as musicProvider from "./music-provider";
import * as musicService from './services/music-service';

jest.mock('./services/music-service');
const musicServiceMock = musicService as jest.Mocked<typeof musicService>;

describe("music-provider", () => {
	test("searchEntityAsync should return musicService response", () => {
		const searchType = musicProvider.searchTypes.album;		
		const expected = musicProvider.getMockAlbumResults()
		musicServiceMock.get.mockResolvedValue(expected);

		return musicProvider.searchEntityAsync(searchType, "unicorn")
			.then(response => {
				expect(response).toEqual(expected);
				expect(musicServiceMock.get).toHaveBeenCalled();
			})
	});
});