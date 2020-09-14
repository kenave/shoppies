import React, { useState } from 'react';

const Nomination = (props) => {
  const [nominated, setNomination] = useState(true)

  const handleNomination = () => {
    setNomination(false)
    props.removeNomination(props.object)
  }

  return (
    <li className="nominated-item">
      {props.title} ({props.year})
      <button
        className="remove-nomination-btn"
        onClick={handleNomination}
        disabled={!nominated}
      >
        Remove
      </button>
    </li>
  )
}

export default Nomination;