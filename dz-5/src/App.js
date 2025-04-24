import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import ToggleTheme from './components/toggleTheme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       5 ДЗ
      </header>
      <Provider store={store}>
        <ToggleTheme />
      </Provider>
    </div>
  );
}

export default App;
