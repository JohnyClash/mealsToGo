import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantsRequest, restaurantsTransform } from '../services/restaurants.service'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(null);

    retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then((x) => {
                    console.log('this is the length of x:', x)
                    return restaurantsTransform(x)
                })
                .then((results) => {
                    console.log('this is results', results)
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                })
        }, 3000)
    }

    useEffect(() => {
        retrieveRestaurants()
    }, []);
    return (
        <RestaurantsContext.Provider

            // value={[{ item: 1 }, { item: 2 }, { item: 3 }]}>
            value={{
                restaurants,
                isLoading,
                isError
            }}>
            {props.children}

        </RestaurantsContext.Provider >
    )
}


// import React, { useState, createContext, useEffect, useMemo } from "react";

// import { restaurantRequest, restaurantTransform } from "./restaurants.service";

// export const RestaurantsContext = createContext();

// export const RestaurantsContextProvider = ({ children }) => {
//     return (
//         <RestaurantsContext.Provider
//             value={{
//                 restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
//             }}
//         >
//             {children}
//         </RestaurantsContext.Provider>
//     );
// };