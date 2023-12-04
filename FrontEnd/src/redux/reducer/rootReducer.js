import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import LoadReducer from "./LoadReducer";
import DeleteReducer from "./DeleteReducer";

const rootReducer = combineReducers({
  postData: PostReducer,
  loadData: LoadReducer,
  deleteItem: DeleteReducer,
});

export default rootReducer;
