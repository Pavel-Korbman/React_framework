import './App.css';
import InputForm from './components/FormSubmit';
import ParentCounter from './components/ParentCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Лекция 3
      </header>
      <h2>Элемент счётчик внутри родительского элемента.</h2>
      <ParentCounter/>
      <h2>Отправка формы.</h2>
      <InputForm/>
    </div>
  );
}

export default App;
