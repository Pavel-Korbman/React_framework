import logo from './logo.svg';
import './App.css';
import { createContext, useContext } from 'react';


// React.Context - для получения данных в компонент н алюбом уровне вложенности, без передачи их через промежуточные компоненты, а получая напрямую из контекста

const messageContext = createContext();

function GrandGrandChild() {  // компонент использует контекст
  const message = useContext(messageContext);
  return <span>{message}</span>;
}

function GrandParent() {  // компонент устанавливает контекст

  return (
    <messageContext.Provider value='Привет это содержание контекста'>
      <Parent />
    </messageContext.Provider>
  );  // messageContext - не обязательное название - можно любое
}

// далее передаём контекст вниз к дочерним элементам:

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  return <GrandGrandChild />
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Лекция 5
      </header>
      <h1>Пример использования React.Context</h1>
      <GrandParent/>
    </div>
  );
}

export default App;
