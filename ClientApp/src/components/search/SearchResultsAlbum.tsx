import React from 'react';
import { SearchResults } from './SearchResults';

const mediaCardMap = (item:IAlbum) : IMediaCardProps => {
  return {
    imageSrc: item.artworkUrl100,
    imageAlt: 'album artwork for ' + item.collectionName,
    title: item.collectionName,
    text: item.artistName,
    buttonText: "View on Apple Music",
    link: item.collectionViewUrl
  }
}

export const SearchResultsAlbum =(props:{results:IAlbum[]}) => {
  return (
    <SearchResults 
      mediaCardMap={mediaCardMap} 
      results={props.results} />
  );
}
