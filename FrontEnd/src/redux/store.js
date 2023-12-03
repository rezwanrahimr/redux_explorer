<<<<<<< HEAD
import { applyMiddleware, createStore } from "redux";
=======
<<<<<<< HEAD
const { createStore } = require("redux");

let store = createStore()
=======
import { createStore } from "redux";
>>>>>>> 444f10c54f38eb66d7d65edaa43b06e60f6dc7b1
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
>>>>>>> 3ee690e045216e5b688a5bbd4e5610cf16a35286
