import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import LoadReducer from "./LoadReducer";

const rootReducer = combineReducers({
  postData: PostReducer,
  loadData: LoadReducer,
});

export default rootReducer;
