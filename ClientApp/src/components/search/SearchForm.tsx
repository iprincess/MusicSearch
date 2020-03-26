import './SearchForm.scss';
import React, { useState } from 'react';


export const SearchForm = (props:ISearchFormProps) => {
  const [query, setQuery] = useState(props.query);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onQueryChangeHandler(query);
  }

  const onQueryChange = (event) => {
    setQuery(event.target.value);
  }

  return (    
    <form onSubmit={handleSubmit} className="search-form form-inline justify">
      <label className="sr-only" htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        placeholder={props.placeholder}
        value={query}
        onChange={onQueryChange} />
      <button
        type="submit"
      >Submit</button>
    </form>
  );

}
