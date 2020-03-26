import './SearchContainer.scss';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as musicProvider from '../providers/music-provider';
import { queryUtil } from '../helpers/queryUtil';
import { SearchForm } from '../components/search/SearchForm';


export const SearchContainer = (props:ISearchPageProps) => {
  const params = useParams();
  const history = useHistory();
  const [query, setQuery] = useState(params.query ? queryUtil.getQueryFromUrlParam(params.query) : '');
  const [results, setResults] = useState(null);
  
  const onQueryChangeHandler = (q) => {
    if (q !== '' && q !== query) {
      setQuery(q);
      const queryUrlParam = queryUtil.getUrlParamFromQuery(q);
      history.push('/' + props.searchType + '/' + queryUrlParam);
    }
  }

  useEffect( () => {
    if(query && query !== ''){
      musicProvider.searchEntityAsync(props.searchType, query)
        .then(response => {
          setResults(response.results);
        })
        .catch(error => {
          console.log("SearchContainer music request error", error);
        })
    }
  }, [query])

  return (
    <div className="search-container">
      <SearchForm 
        query={query} 
        onQueryChangeHandler={onQueryChangeHandler} 
        placeholder={props.searchFormPlaceholder}
        />
      <props.resultsComponent results={results} />
    </div>
  );

}
