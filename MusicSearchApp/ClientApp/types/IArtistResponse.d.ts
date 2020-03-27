interface IArtistResponse extends IMusicResponse<IArtist>{

}

interface IArtist {
	amgArtistId: number;
	artistId: number;
	artistLinkUrl: string;
	artistName: string;
	artistType: string;
	primaryGenreId: number;
	primaryGenreName: string;
	wrapperType: string;
}