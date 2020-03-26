import React from 'react';
import { SearchResults } from './SearchResults';

const mediaCardMap = (item:IArtist) : IMediaCardProps => {
  return {
    title: item.artistName,
    buttonText: "View on Apple Music",
    link: item.artistLinkUrl
  }
}

export const SearchResultsArtist =(props:{results:IArtist[]}) => {
  return (
    <SearchResults 
      mediaCardMap={mediaCardMap} 
      results={props.results} />
  );
}
