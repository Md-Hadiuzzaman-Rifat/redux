import React from 'react';
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className='App'>
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    </div>
  );
};

export default App;