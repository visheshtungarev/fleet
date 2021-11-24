import { LOADER, UNSPLASHIMAGE } from "../constants";

const INITIAL_STATE = {
  image: {},
  loader: false,
};

const UnsplashReducer = (state = INITIAL_STATE, action) => {
  if (action.type === undefined) {
    return state;
  }

  switch (action.type) {
    case UNSPLASHIMAGE: {
      return { ...state, image: action.payload };
    }
    case LOADER: {
      return { ...state, loader: action.payload };
    }
    default:
      return state;
  }
};

export default UnsplashReducer;
