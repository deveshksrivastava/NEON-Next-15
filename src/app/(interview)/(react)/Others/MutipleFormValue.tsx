import React, { useState, useEffect, useRef } from 'react';
export default function MultipleFormValue() {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        address: '',
    });
    const [city, setCity] = useState('Delhi'); //Normal case

    const handleInputChange = (field: any) => {
        // syntax: return (e) =>{}
        return (e: any) => {
            //no return here with ({})
            setUser((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        };
    };

    const handleInputChangeNormal = (e) => {
        setUser((prev) => ({
            ...prev,
            address: e.target.value,
        }));
    };

    return (
        <>
            <input value={user.name} onChange={handleInputChange('name')} />
            <input value={user.surname} onChange={handleInputChange('surname')} />
            <input value={user.address} onChange={handleInputChange('address')} />
            <input value={user.address} onChange={handleInputChangeNormal} />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            {JSON.stringify(user)} && CITY: {city}
        </>
    );
}
