import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";

const rootReducer = combineReducers({
  postData: PostReducer,
});

export default rootReducer;
