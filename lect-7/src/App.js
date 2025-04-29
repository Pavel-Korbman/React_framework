import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import HiButton from './components/ButtonHi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        7 Лекция. Redux middlewares. Redux persist.
      </header>
      <Provider store={store}>
        <HiButton />
      </Provider>
    </div>


  );
}

export default App;
