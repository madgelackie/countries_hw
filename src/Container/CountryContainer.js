import React, {useState, useEffect} from 'react';


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return(
        <h3>list will appear here?</h3>
    )

}

export default CountryContainer;