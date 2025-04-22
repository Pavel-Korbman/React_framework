import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const App = () => (
  <Router>
    <div>
      <header className="App-header">
        4 ДЗ
      </header>      
      <Routes>
        <Route path="*" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  </Router>
);

export default App;
