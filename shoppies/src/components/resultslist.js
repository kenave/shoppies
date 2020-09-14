import React from 'react';
import Result from '../components/result';

const ResultsList = (props) => {
  return props.visible ? (
    <div className="results-container">
      <span className="title">
        Results for "{props.currentSearchTerm}"
        </span>
      <ul>
        {props.results ? props.results.map(r => <Result
          object={r}
          key={r.imdbID}
          title={r.Title}
          year={r.Year}
          addNomination={props.addNomination}
        />) : <h3>No results found, please try again</h3>}
      </ul>
    </div>
  ) : null;
}

export default ResultsList;