interface IAlbumResponse extends IMusicResponse<IAlbum> {

}

interface IAlbum {
	amgArtistId: number;
	artistId: number;
	artistName: string;
	artistViewUrl: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionCensoredName: string;
	collectionExplicitness: string;
	collectionId: number;
	collectionName: string;
	collectionPrice: number;
	collectionType: string;
	collectionViewUrl: string;
	copyright: string;
	country: string;
	currency: string;
	primaryGenreName: string;
	releaseDate: string; // "2005-03-01T08:00:00Z"
	trackCount: number;
	wrapperType: string;
}