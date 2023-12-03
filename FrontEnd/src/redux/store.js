<<<<<<< HEAD
const { createStore } = require("redux");

let store = createStore()
=======
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
>>>>>>> 3ee690e045216e5b688a5bbd4e5610cf16a35286
