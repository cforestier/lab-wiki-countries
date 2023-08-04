import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  // cons [countriesList, setCountriesList] = useState([]);
  // useEffect(() => {
  //   setCountriesList(countries);
  // }, [countries]);
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group list-countries">
        {countries.map((country) => {
          return (
            <>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`flag from ${country.name.common}`}
                style={{ width: 100 }}
              />
              <Link
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                {country.name.common}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
