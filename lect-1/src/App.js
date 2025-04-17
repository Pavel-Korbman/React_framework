import logo from './logo.svg';
import './App.css';


function App() {
  const username = 'Pavel';
  return (
    <div className="App">
      <h1>Привет {username}</h1>
      <Article number='1' name='Info' />
      <Article number='2' name='Blog' />
      <Article1 number='1' name='Info' />
      <Article1 number='2' name='Blog' />

    </div>
  );
}

// С пропсами:
function Article(props) {
  return (
    <div>
      <h2 className='title'>Статья про {props.name} № {props.number}</h2>
      <a className='textLink' href="#">читать статью</a>
    </div>
  )
}

// С деструктизацией:

function Article1({ number, name }) {
  let themeSiteWhite = true;
  // let themeSiteWhite = false;
  return (
    <div>
      <h2 style={{color: themeSiteWhite ? 'black' : 'yellow'}}>Статья про {name} номер {number}</h2>
      <a className='textLink' href="#">читать статью</a>
    </div>
  )
}











export default App;
