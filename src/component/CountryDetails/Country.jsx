import React from 'react';
import './Country.css';

const Country = (props) => {
    //console.log(props.city)
    const {population, flags, name} = props.city
    
    return (
        <div className="info">
          <h3>CountryName:{name.common}</h3>   
          <h3>CountryPopulation:{population}</h3>   
          <img src={flags.png} alt="images Flags" />   
        </div>
    );
};

export default Country;