import React, { useState } from 'react';
require('dotenv').config();

const SearchBox = (props) => {
  const url = process.env.REACT_APP_API_URL
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      props.setCurrentSearchTerm(searchTerm)
      const encodedURI = encodeURI(`${url}&s=${searchTerm}&type=movie`)
      setSearchTerm('')
      getResults(encodedURI)
    }
  }

  const getResults = async (uri) => {
    const response = await fetch(uri);
    const data = await response.json();
    props.setResults(data.Search)
    props.setShowResults(true)
  }

  return (props.visible ?
    // <div className="search-box-container">
    <form className="search-form">
      <div className="input-container">
        <i className="fas fa-search"></i>
        <input value={searchTerm} onChange={handleChange} className="search-bar" type="text" placeholder="Enter a movie title..." autoFocus required />
        <button onClick={handleSearch} className="search-btn" type="submit">
          Search
        </button>
      </div>
    </form>
    // </div>
    : null)
};

export default SearchBox;