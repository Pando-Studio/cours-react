import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res: any) => {
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Countries</h1>
      {countries &&
        countries.map((country: any) => {
          return <div> {country.name.common} </div>;
        })}
    </div>
  );
};

export default Countries;
