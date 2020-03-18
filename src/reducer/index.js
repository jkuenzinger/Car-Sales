// briing in all the actions i need so that they can pass props properly
import {ADD_TOTAL, ADD_FEATURE, REMOVE_FEATURE} from '../actions/index';

//below I am setting up intial state with the data that was originally declare dint he app.js
const intialState={
 additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

// Below I am goin to set up the Reducers I delecared 
// IE ADD_TOTAL, ADD_FEATURE, REMOVE_FEATURE

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:

            return{
                ...state, car:{
                    ...state.car, features: state.car.features.includes(action.payload) ?
                    [...state.car.features] : [...state.car.features, action.payload]
                }
            }

         case ADD_TOTAL:
             return{
                 ...state,
                 additionalPrice: state.additionalPrice + action.payload
             }   

        case REMOVE_FEATURE:
            return{
                ...state,
                car:{
                    ...state.car,
                    features: state.car.features.filter(car => car.id !==action.payload.id)
                }
            }
   default:
        return state;
   
  }
}
