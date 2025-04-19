import './App.css';
import Counter from './components/Counter';
import RefExample from './components/RefExample';
import Timer from './components/timer';
import Show from './components/visible';

function App() {
  return (
    <div className="App">
      <header className="App-header">Лекция 2
      </header>
      <Timer/>
      <RefExample/>
      <Counter />
      <p></p>
      <Show />

    </div>
  );
}

export default App;
