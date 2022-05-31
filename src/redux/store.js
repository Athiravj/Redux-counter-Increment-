import { createStore } from "redux";
import buttonReducer from "./buttonContainer/buttonReducer";

const store = createStore(buttonReducer);

export default store;
