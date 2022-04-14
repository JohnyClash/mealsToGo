import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './location.services'

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('san fransisco')

    const onSearch = (searchKeyword = "Antwerp") => {
        console.log(searchKeyword)
        setIsLoading(true);
        setKeyword(searchKeyword)
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                console.log('inside 3rd then')
                setIsLoading(false);
                setLocation(result);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error);
            })
    }
    useEffect(() => {
        onSearch(
        );
    }, [])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: () => null,
                keyword,

            }}
        >
            {children}
        </LocationContext.Provider>
    )
}