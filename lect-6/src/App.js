import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonComponent from './components/ButtonComponent';
import ButtonComponentMinus from './components/ButtonComponentMinus';
import CounterComponent from './components/CounterComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        6 Лекция. Погружение в Redux.
      </header>
      <Provider store={store}>
        <div>
          <CounterComponent/>
          <ButtonComponent/>
          <ButtonComponentMinus/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
