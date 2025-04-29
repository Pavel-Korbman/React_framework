import './App.css';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       7 дз
      </header>
      <Provider store={store}>
        <TaskList />
      </Provider>
    </div>
  );
}

export default App;
