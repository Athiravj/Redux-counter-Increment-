import "./App.css";
import React from "react";
import BoxContainer from "./components/button";
import AnswerContaiiner from "./components/input";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BoxContainer />
        <AnswerContaiiner />
      </div>
    </Provider>
  );
}

export default App;
