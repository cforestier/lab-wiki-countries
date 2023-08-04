import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const [foundCountry, setFoundCountry] = useState(null);
  const getCountry = (alpha3Code) =>
    countries.find((country) => country.alpha3Code === alpha3Code);

  useEffect(() => {
    const countrySelected = getCountry(countryId);
    if (countrySelected) {
      setFoundCountry(countrySelected);
    }
  }, [countryId]);
  return (
    <>
      {!foundCountry && (
        <h1>please click on a country to display its details</h1>
      )}
      {foundCountry && (
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
