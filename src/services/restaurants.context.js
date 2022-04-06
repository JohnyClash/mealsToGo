import React, { useState, createContext, useEffect, useMemo } from 'react';
// import { restaurantRequest, restaurantTransform }

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    return (
        <RestaurantsContext.Provider

            // value={[{ item: 1 }, { item: 2 }, { item: 3 }]}>
            value={{
                restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
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