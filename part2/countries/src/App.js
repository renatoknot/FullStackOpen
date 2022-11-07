import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [showOneCountry, setShowOneCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  useEffect(() => {
    setShowOneCountry(
      countriesFiltered.length === 1 ? { ...countriesFiltered[0] } : {},
    );
  }, [countriesFiltered]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCountriesFiltered(
      countries.filter((country) => {
        if (
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return country;
        }
      }),
    );
  };

  const showCountries = () => {
    if (countriesFiltered.length <= 1) return;
    return countriesFiltered.map((country) => (
      <p key={country.name.common}>
        {country.name.common} -{" "}
        <button onClick={() => setShowOneCountry(country)}>show</button>
      </p>
    ));
  };

  return (
    <div>
      Find Countries: <input value={search} onChange={handleSearch} />
      {countriesFiltered.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        showCountries()
      )}
      {showOneCountry.name && <Country data={showOneCountry} />}
    </div>
  );
}

export default App;
