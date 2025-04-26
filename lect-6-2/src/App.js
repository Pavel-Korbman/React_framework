import './App.css';
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { FilterProvider } from './contexts/FilterContext';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        6 лекция 2 часть Таск Менеджер на Redux
      </header>
      <Provider store={store}>
        <FilterProvider>
          <AddTodo />
          <TodoList />
          <TodoFilter />
        </FilterProvider>
      </Provider>

    </div>
  );
}

export default App;
