import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const [foundCountry, setFoundCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setFoundCountry(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [countryId]);
  const getCountry = (alpha3Code) =>
    countries.find((country) => country.alpha3Code === alpha3Code);

  return (
    <>
      {!foundCountry || isLoading === null ? (
        <h1>
          please click on a country to display its details or wait until data is
          loaded
        </h1>
      ) : (
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul className="list-countries-complete">
                    {foundCountry.borders.map((border) => {
                      return (
                        <li>
                          <Link to={`/${border}`}>
                            {getCountry(border).name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
