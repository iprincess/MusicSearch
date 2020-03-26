import React from 'react';
import { SearchResults } from './SearchResults';

const mediaCardMap = (item:ISong) : IMediaCardProps => {
  return {
    imageSrc: item.artworkUrl100,
    imageAlt: 'album artwork for ' + item.collectionName,
    title: item.trackName,
    text: `${item.artistName} (${item.collectionName})`,
    buttonText: "View on Apple Music",
    link: item.trackViewUrl,
    audioFileUrl: item.previewUrl
  }
}

export const SearchResultsSong =(props:{results:ISong[]}) => {
  return (
    <SearchResults 
      mediaCardMap={mediaCardMap} 
      results={props.results} />
  );
}
