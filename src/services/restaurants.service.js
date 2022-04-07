
import { mocks, mockImages } from './mock/index.js';
import camelize from 'camelize';
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        if (!mocks[location]) {
            reject('not found');
        }
        resolve(mocks[location])

    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurant,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        }
    })
    return camelize(mappedResults);
}

// restaurantsRequest().then((x) => { restaurantsTransform(x) })
//     /// === .then((response)=>responseTranformer(response))
//     // .then(transformed => console.log(transformed))
//     .catch((err) => console.log(err))

