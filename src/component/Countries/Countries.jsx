import React from 'react';
import { useEffect, useState } from "react";
import Country from '../CountryDetails/Country';
import './Countries.css'

const Countries = () => {
    const[cities, setCountry] = useState([])
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data =>setCountry(data.slice(0,50)))
    },[])
  
    return (
        <div className="miniComponent">
        {
        cities.map(city => <Country city={city}
            key={city.cca3}
            // name={city.name.common}
            //  flag={city.flags.png}
            //  population={city.population}
             
             ></Country>)
        
        }
      </div>
    );
};

// function DetailsCountries(props){
//     return(
//         <div className="info">
//           <h3>CountryName:{props.name.common}</h3>   
//           <img src={props.flags.png} alt="images Flags" />   
//         </div>
//     )
//   }

export default Countries;