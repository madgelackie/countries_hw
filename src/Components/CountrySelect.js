import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleSelect = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }

    const countriesOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name} {country.population}</option> 
    })

    return (
        <select defaultValue="" onChange={handleSelect}>
            <option value="" selected>Choose a country</option>
            {countriesOptions}
        </select>
    )
}

export default CountrySelector;
