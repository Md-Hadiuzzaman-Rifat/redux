import { createStore } from "redux"
import actionReducer from "./action/actionReducer"
export const store =createStore(actionReducer)