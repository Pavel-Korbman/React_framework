import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import TemperatureConverter from './components/Converter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       ДЗ 3
      </header>
      <h3>Конвертер температуры:</h3>
      <TemperatureConverter/>
      <p></p>
      <h3>Список дел:</h3>
      <TodoList/>      
    </div>
  );
}

export default App;
