import { bindActionCreators } from "redux";
import { store } from "../store";
import * as UAction from "./UnsplashActions";
export const actions = {
  ...UAction,
};

export default bindActionCreators(actions, store.dispatch);
