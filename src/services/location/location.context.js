import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        if (!searchKeyword.length) {
            // don't do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                console.log(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    };

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};



// import React, { useState, useEffect } from "react";

// import { locationRequest, locationTransform } from "./location.services";

// export const LocationContext = React.createContext();

// export const LocationContextProvider = ({ children }) => {
//     const [keyword, setKeyword] = useState("San Francisco");
//     const [location, setLocation] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const onSearch = (searchKeyword) => {
//         setIsLoading(true);
//         setKeyword(searchKeyword);
//         if (!searchKeyword.length) {
//             // don't do anything
//             return;
//         }
//         locationRequest(searchKeyword.toLowerCase())
//             .then(locationTransform)
//             .then((result) => {
//                 setIsLoading(false);
//                 setLocation(result);
//                 console.log(result);
//             })
//             .catch((err) => {
//                 setIsLoading(false);
//                 setError(err);
//             });
//     };

//     return (
//         <LocationContext.Provider
//             value={{
//                 isLoading,
//                 error,
//                 location,
//                 search: onSearch,
//                 keyword,
//             }}
//         >
//             {children}
//         </LocationContext.Provider>
//     );
// };










// import React, { useState, useEffect, createContext } from 'react';

// import { locationRequest, locationTransform } from './location.services'

// export const LocationContext = createContext();

// export const LocationContextProvider = ({ children }) => {
//     const [location, setLocation] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [keyword, setKeyword] = useState('')

//     const onSearch = (searchKeyword) => {
//         setIsLoading(true);
//         setKeyword(searchKeyword);
//         if (!searchKeyword.length) {
//             // don't do anthing
//             return;
//         }
//         console.log('we are in OnSearch:: ', searchKeyword);
//         locationRequest(searchKeyword.toLowerCase())
//             .then(locationTransform)
//             .then(result => {
//                 setIsLoading(false);
//                 setLocation(result);
//                 console.log('location request just setLocation')
//                 console.log(result);
//             })
//             .catch(error => {
//                 setIsLoading(false);
//                 setError(error);
//                 console.log('location.context.js.onSearch.locationRequest error:' + err);
//             })
//     }

//     return (
//         <LocationContext.Provider
//             value={{
//                 isLoading,
//                 error,
//                 location,
//                 search: (x) => {
//                     console.log('search context triggered with:: ' + x)
//                     onSearch(x)
//                 },
//                 keyword,

//             }}
//         >
//             {children}
//         </LocationContext.Provider>
//     )
// }