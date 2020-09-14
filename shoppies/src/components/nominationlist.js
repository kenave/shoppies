import React from 'react';
import Nomination from './nomination';

const NominationsList = (props) => {
  const classNames = props.full ? "nominations-container full" : "nominations-container"

  return (props.nominations.length > 0 ?
    <div className={classNames}>
      <span className="title">Nominations</span>
      <ul>
        {props.nominations ? props.nominations.map(nom =>
          <Nomination
            key={nom.imdbID}
            title={nom.Title}
            year={nom.Year}
            object={nom}
            removeNomination={props.removeNomination}
          />) : null
        }
      </ul>
    </div>
    : null)
}

export default NominationsList;