
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        4 лекция Children
      </header>
      <div className='uni-block'>
        {console.log(
          <DivWithChild>
            <p>Новый текст</p>
            <div>Новый элемент</div>
          </DivWithChild>)
        }
      </div>
      <div>
        <h2>Пример использования children</h2>
        <BorderComp>
          <p>Абзац внутри рамки</p>
          <button>Кнопка внутри рамки</button>
        </BorderComp>
        <BorderComp>
          <p>Новый Абзац внутри рамки</p>
        </BorderComp>
        <h2>Пример использования props.children</h2>
        <div>
          <Card title='Карточка 1'>
            <p>Содержимое карточки 1</p>
            <button>Действие</button>
          </Card>
          <Card title='Карточка 2'>
            <p>Содержимое карточки 2</p>
            <a href='#'>Ссылка</a>
          </Card>
        </div>


        <p>Абзац снаружи рамки</p>
      </div>
    </div>
  );
}

function DivWithChild({ children }) {
  return (
    <div>{children}</div>
  )
}

function BorderComp({ children }) {
  return (<div style={{ border: '1px solid black', padding: '16px' }}>
    {children}
    </div>);
}

const Card =({title, children})=>{
  return (
  <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px'}}>
    <h2>{title}</h2>
    <p>Любой рекламный текст</p>
    {children}
    </div>
);
}



export default App;
