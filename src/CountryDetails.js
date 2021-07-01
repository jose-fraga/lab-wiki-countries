import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {

    const [country, setCountry] = useState({});


    useEffect(() => {
        let currentCountry = props.data.find(eachCountry => eachCountry.cca3 === props.match.params.dynamicId)
        setCountry(currentCountry);
    }, [props])

    console.log(country.borders);
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
                  {country.borders?.map(eachBorder => {
                    let borderCountry = props.data.find(eachCountry => eachCountry.cca3 === eachBorder)
                    return (
                      <li> <Link to = {borderCountry.cca3}>{borderCountry.name.common}</Link></li>                  
                    )                  
                  }) }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default CountryDetails;