import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital } = props.country;
    return (
        <div className='country'>
            <h1>Name: {name}</h1>
            <img src={flag} alt="" />
            <p>Capital:{capital}</p>
        </div>
    );
};

export default Country;