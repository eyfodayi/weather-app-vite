import { dataStatus, weatherTypes } from "../actions/actionTypes";

const initialState = {
  details: [],
  data: [],
  isLoading: null,
  isError: null,
};

const weathersReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherTypes.ADD_CITY_WEATHER:
      return { ...action, isLoading: false, details: action.payload };
    case dataStatus.IS_LOADING:
      return { ...state, isLoading: true };
    case weatherTypes.ADD_CITIES_WEATHER:
      state.data.push(action.payload);
      return { ...state, isLoading: false };
    case dataStatus.IS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default weathersReducer;
