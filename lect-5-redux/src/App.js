import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Лекция 5 ч2 Redux
      </header>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
