interface ISongResponse extends IMusicResponse<ISong> {

}

interface ISong {
	wrapperType: string;
	kind: string;
	artistId: number;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	trackCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	trackViewUrl: string;
	previewUrl: string;
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	releaseDate: string; // "1989-03-03T08:00:00Z"
	collectionExplicitness: string;
	trackExplicitness: string;
	discCount: number;
	discNumber: number;
	trackCount: number;
	trackNumber: number;
	trackTimeMillis: number;
	country: string;
	currency: string;
	primaryGenreName: string;
	isStreamable: boolean;

	// wrapperType: "track"
	// kind: "song"
	// artistId: 20044
	// collectionId: 83448003
	// trackId: 83445997
	// artistName: "Madonna"
	// collectionName: "Like a Prayer"
	// trackName: "Like a Prayer"
	// collectionCensoredName: "Like a Prayer"
	// trackCensoredName: "Like a Prayer"
	// artistViewUrl: "https://music.apple.com/us/artist/madonna/20044?uo=4"
	// collectionViewUrl: "https://music.apple.com/us/album/like-a-prayer/83448003?i=83445997&uo=4"
	// trackViewUrl: "https://music.apple.com/us/album/like-a-prayer/83448003?i=83445997&uo=4"
	// previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/Music/dc/45/31/mzm.kteqltlu.aac.p.m4a"
	// artworkUrl30: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/28/9d/04/289d0422-437c-5c9b-b86f-3afecc326ed4/source/30x30bb.jpg"
	// artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/28/9d/04/289d0422-437c-5c9b-b86f-3afecc326ed4/source/60x60bb.jpg"
	// artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/28/9d/04/289d0422-437c-5c9b-b86f-3afecc326ed4/source/100x100bb.jpg"
	// collectionPrice: 9.99
	// trackPrice: 1.29
	// releaseDate: "1989-03-03T08:00:00Z"
	// collectionExplicitness: "notExplicit"
	// trackExplicitness: "notExplicit"
	// discCount: 1
	// discNumber: 1
	// trackCount: 11
	// trackNumber: 1
	// trackTimeMillis: 340867
	// country: "USA"
	// currency: "USD"
	// primaryGenreName: "Pop"
	// isStreamable: true
}