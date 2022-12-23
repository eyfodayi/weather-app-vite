import { combineReducers } from "redux";
import weathersReducer from "./reducers/weathersReducer";

const rootReducer = combineReducers({
  weathers: weathersReducer,
});

export default rootReducer;
