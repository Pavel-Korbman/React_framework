import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/catalog" element={<Catalog />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product" element={<Product />} />
          <Route path="/registration" element={<Registration />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
