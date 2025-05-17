import { createStore } from "redux";
import rootReducer from "./reducers/newsReducer";

const store = createStore(rootReducer);

export default store;