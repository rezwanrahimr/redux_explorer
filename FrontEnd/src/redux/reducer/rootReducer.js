import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import LoadReducer from "./LoadReducer";
import DeleteReducer from "./DeleteReducer";
import UpdateReducer from "./UpdateReducer";

const rootReducer = combineReducers({
  postData: PostReducer,
  loadData: LoadReducer,
  deleteItem: DeleteReducer,
  updateData: UpdateReducer,
});

export default rootReducer;
