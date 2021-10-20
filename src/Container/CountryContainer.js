import React, {useState, useEffect} from 'react';
import CountriesList from '../Components/CountriesList';
import CountrySelector from '../Components/CountrySelect';


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    return(
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>        
    )

}

export default CountryContainer;