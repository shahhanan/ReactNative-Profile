import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
         console.log("in create store configure store");
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}