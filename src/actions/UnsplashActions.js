import { createApi } from "unsplash-js";
import { LOADER, UNSPLASHIMAGE } from "../constants";
const unsplash = createApi({
  accessKey: "ReeHY8tY18uO8gLhT-reihi2VO_fgN94WR05oVLhjxM",
});
export const getImages = (payload) => async (dispatch) => {
  //can add loader dispatch here
  dispatch({
    type: LOADER,
    payload: true,
  });
  let response = await unsplash.search.getPhotos({ query: payload });
  //loader dispatch will again callled for stop
  dispatch({
    type: LOADER,
    payload: false,
  });
  if (response.status === 200) {
    console.log("dispatching....");
    dispatch({
      type: UNSPLASHIMAGE,
      payload: response.response.results[0],
    });
  }
};
