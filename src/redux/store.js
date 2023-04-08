// import { createStore } from "redux";
// import countReducer from "./counter/countReducer";

// const store=createStore(countReducer)

// export default store;

import { createStore } from "redux";
import counterReducer from "./counter/countReducer";

const store = createStore(counterReducer);

export default store;