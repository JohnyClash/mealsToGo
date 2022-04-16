import React, {
    useState,
    useContext,
    createContext,
    useEffect,
    useMemo,
} from "react";

import {
    restaurantsRequest,
    restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../services/location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);

        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };
    useEffect(() => {
        console.log(location)
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};




// import React, { useState, createContext, useContext, useEffect, useMemo } from 'react';
// import { LocationContext } from '../services/location/location.context'
// import { restaurantsRequest, restaurantsTransform } from '../services/restaurants.service'

// export const RestaurantsContext = createContext();

// export const RestaurantsContextProvider = (props) => {
//     const [restaurants, setRestaurants] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setError] = useState(null);
//     const { location } = useContext(LocationContext);


//     const retrieveRestaurants = (loc) => {
//         console.log('inside retrieve rest')
//         setIsLoading(true);
//         setRestaurants([]);

//         setTimeout(() => {
//             restaurantsRequest(loc)
//                 .then((x) => {
//                     return restaurantsTransform(x)
//                 })
//                 .then((results) => {
//                     setIsLoading(false);
//                     console.log('setting restaraunts to:', results)
//                     setRestaurants(results);
//                 })
//                 .catch((err) => {
//                     setIsLoading(false);
//                     setError(err);
//                 })
//         }, 1000)
//     }

//     useEffect(() => {
//         if (location) {
//             console.log(location)
//             console.log('location string:', location)
//             const locationString = `${location.lat},${location.lat}`
//             retrieveRestaurants(locationString)
//         }
//     }, []);
//     return (
//         <RestaurantsContext.Provider

//             // value={[{ item: 1 }, { item: 2 }, { item: 3 }]}>
//             value={{
//                 restaurants,
//                 isLoading,
//                 isError
//             }}>
//             {props.children}

//         </RestaurantsContext.Provider >
//     )
// }


