import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchContainer } from '../containers/SearchContainer';
import { SearchResultsArtist } from '../components/search/SearchResultsArtist';
import { PageWrapper } from './PageWrapper';

export const ArtistPage = () => {
  const searchType = musicProvider.searchTypes.artist;
  let placeholderText = "Search for an artist";

  return (
    <PageWrapper>
      <SearchContainer
        searchType={searchType}
        searchFormPlaceholder={placeholderText}
        resultsComponent={SearchResultsArtist}
      />
    </PageWrapper>
  );

}
