import React from 'react';
import CountryContainer from '../Container/CountryContainer';

const CountryDetail = ({selectedCountry}) => {
    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>{selectedCountry.flag}</p>
            <p>{selectedCountry.subregion}</p>
            <p>{selectedCountry.capital}</p>
        </div>
    )
}

export default CountryDetail.js
