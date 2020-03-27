import React from 'react';
import * as musicProvider from '../providers/music-provider';
import { SearchContainer } from '../containers/SearchContainer';
import { SearchResultsSong } from '../components/search/SearchResultsSong';
import { PageWrapper } from './PageWrapper';

export const SongPage = () => {
  const searchType = musicProvider.searchTypes.song;
  let placeholderText = "Search for a song";

  return (
    <PageWrapper>
      <SearchContainer
        searchType={searchType}
        searchFormPlaceholder={placeholderText}
        resultsComponent={SearchResultsSong}
      />
    </PageWrapper>   
  );

}
