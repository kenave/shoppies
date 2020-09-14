import React, { useReducer, useState } from 'react';
import './App.css';
import SearchBox from './components/searchbox';
import ResultsList from './components/resultslist';
import NominationList from './components/nominationlist';
import FinishedBanner from './components/finishedbanner';

function reducer(state, action) {
  switch (action.type) {
    case 'new-results':
      if (action.payload) {
        action.payload.forEach(result => { // check if our results list contains any movies that we already nominated
          state.nominations.forEach(nomination => {
            if (nomination.imdbID === result.imdbID) {
              result.nominated = true;
            }
          }); // I hate this nested loop... is there another way?
        });
      }
      return {
        ...state,
        results: action.payload
      };
    case 'add-nomination':
      return {
        ...state,
        nominations: [...state.nominations, action.payload]
      };
    case 'remove-nomination':
      const thisResult = state.results.find(result => result.imdbID === action.payload.imdbID)
      if (thisResult) thisResult.nominated = false
      return {
        ...state,
        nominations: state.nominations.filter((nom) => nom.imdbID !== action.payload.imdbID)
      }
    default:
      return state;
  }
}

const App = () => {
  const [{ results, nominations }, dispatch] = useReducer(reducer, { results: [], nominations: [] })

  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="App">
      <span className="main-title">
        The Shoppies
      </span>
      <SearchBox
        visible={nominations.length < 5}
        setResults={(results) => dispatch({ type: 'new-results', payload: results })}
        setShowResults={setShowResults}
        setCurrentSearchTerm={setCurrentSearchTerm}
      />
      <div className="flex-container">
        <ResultsList
          visible={showResults && nominations.length < 5}
          currentSearchTerm={currentSearchTerm}
          results={results}
          addNomination={(result) => dispatch({ type: 'add-nomination', payload: result })}
        />
        <NominationList
          nominations={nominations}
          full={nominations.length >= 5}
          removeNomination={(nomination) => dispatch({ type: 'remove-nomination', payload: nomination })}
        />
      </div>
      <FinishedBanner
        visible={nominations.length >= 5}
      />
    </div>
  );
};

export default App;
