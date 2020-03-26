// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching

import * as musicService from './services/music-service';

const searchTypes = {
  album: 'album',
  artist: 'artist',
  song: 'song'
};

const searchAlbumAsync = (query): Promise<IAlbumResponse> => {
  const url = '/music/album';
  const params = { query: query };

  return musicService.get<IAlbumResponse>(url, params).then((response) => {
    return response;
  });
};

const searchArtistAsync = (query): Promise<IArtistResponse> => {
  const url = '/music/artist';
  const params = { query: query };

  return musicService.get<IArtistResponse>(url, params).then((response) => {
    return response;
  });
};

const searchSongAsync = (query): Promise<ISongResponse> => {
  const url = '/music/song';
  const params = { query: query };

  return musicService.get<ISongResponse>(url, params).then((response) => {
    return response;
  });
};

const searchEntityAsync = (entity, query): Promise<IAlbumResponse | IArtistResponse | ISongResponse> => {
  if(entity === searchTypes.album){
    return searchAlbumAsync(query);

  } else if (entity === searchTypes.artist){
    return searchArtistAsync(query);
  }
  else if (entity === searchTypes.song){
    return searchSongAsync(query);
  }

  return null;
};

export const getMockAlbumResults = () => {
  // https://itunes.apple.com/search?term=jack+johnson&entity=album&limit=25
  // https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching

  let results = [];
  let i = 0;
  let count = 10;
  let item: IAlbum = {
    wrapperType: 'collection',
    collectionType: 'Album',
    artistId: 909253,
    collectionId: 1440857781,
    amgArtistId: 468749,
    artistName: 'Jack Johnson',
    collectionName: 'In Between Dreams (Bonus Track Version)',
    collectionCensoredName: 'In Between Dreams (Bonus Track Version)',
    artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
    collectionViewUrl:
      'https://music.apple.com/us/album/in-between-dreams-bonus-track-version/1440857781?uo=4',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg',
    artworkUrl100:
      'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg',
    collectionPrice: 9.99,
    collectionExplicitness: 'notExplicit',
    trackCount: 16,
    copyright: '℗ 2013 Jack Johnson',
    country: 'USA',
    currency: 'USD',
    releaseDate: '2005-03-01T08:00:00Z',
    primaryGenreName: 'Rock'
  };

  for (i; i < count; i++) {
    let currentItem = Object.assign({}, item);
    currentItem.collectionId = item.collectionId + 1;
    results.push(currentItem);
  }

  return results;
};

export const getMockArtistResults = () => {
  // https://itunes.apple.com/search?term=jack+johnson&entity=album&limit=25
  // https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching

  let results = [];
  let i = 0;
  let count = 10;
  let item: IArtist = {
    amgArtistId: 468749,
    artistId: 909253,
    artistLinkUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4',
    artistName: 'Jack Johnson',
    artistType: 'Artist',
    primaryGenreId: 21,
    primaryGenreName: 'Rock',
    wrapperType: 'artist'
  };

  for (i; i < count; i++) {
    let currentItem = Object.assign({}, item);
    currentItem.artistId = item.artistId + 1;
    results.push(currentItem);
  }

  return results;
};

export { searchTypes, searchEntityAsync };
