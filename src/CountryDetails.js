import React from 'react';
import { useState, useEffect } from 'react';

function CountryDetails(props) {

    const [country, setCountry] = useState({});

    function getBorders() {
        
        return (
            <Link
                to={`/${country.cca3}`}
            >
            {country.name.official}
          </Link>
        );
    }


    useEffect(() => {
        let currentCountry = props.data.find(eachCountry => eachCountry.cca3 === props.match.params.dynamicId)
        setCountry(currentCountry);
    }, [props.country, props.match.params.dynamicId])

    return (
        <div className="col-7">
        <h1>{country.name?.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default CountryDetails;