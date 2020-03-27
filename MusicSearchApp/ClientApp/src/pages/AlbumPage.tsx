import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchContainer } from '../containers/SearchContainer';
import { SearchResultsAlbum } from '../components/search/SearchResultsAlbum';
import { PageWrapper } from './PageWrapper';

export const AlbumPage = () => {
  const searchType = musicProvider.searchTypes.album;
  let placeholderText = "Search for an album";

  return (
    <PageWrapper>
      <SearchContainer
        searchType={searchType}
        searchFormPlaceholder={placeholderText}
        resultsComponent={SearchResultsAlbum}
      />
    </PageWrapper>
  );

}
