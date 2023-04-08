// import { DECREMENT, INCREMENT } from "./actionType";

// export const increment=()=>{
//     return{
//         type:INCREMENT,
//         payload:2
//     }
// }
// export const decrement=()=>{
//     return{ 
//         type:DECREMENT,
//         payload:2
//     }
// }

import { DECREMENT, INCREMENT } from "./actionType";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};