import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function CountriesList(props) {
  function list() {
    console.log(props.data);
    return props.data.map((country) => {
      return (
        <Link
          className="list-group-item list-group-item-action"
          to={`/${country.cca3}`}
        >
          {country.name.official}
        </Link>
      );
    });
  }

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">{list()}</div>
    </div>
  );
}

export default CountriesList;
