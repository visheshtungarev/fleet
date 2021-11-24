import { combineReducers } from "redux";
import UnsplashReducer from "./unsplashReducer";

const appReducer = combineReducers({
  UnsplashReducer: UnsplashReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
