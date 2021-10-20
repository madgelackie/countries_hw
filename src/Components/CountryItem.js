import React from 'react';

const CountryItem = ({country}) => {

    return (
        <li>{country.name} {country.population}</li>
    )
}

export default CountryItem;