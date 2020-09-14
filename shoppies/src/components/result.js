import React from 'react';

const Result = (props) => {

  const handleNomination = () => {
    props.object.nominated = true
    props.addNomination(props.object)
  }

  return (
    <li className="result-item">
      {props.title} ({props.year})
      <button
        className="nominate-btn"
        onClick={handleNomination}
        disabled={props.object.nominated}
      >
        Nominate
      </button>
    </li>
  )
}

export default Result;