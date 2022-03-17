import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className="info">
          <h3>CountryName:{props.name.common}</h3>   
          <img src={props.flags.png} alt="images Flags" />   
        </div>
    );
};

export default Country;