import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Programs from './components/Programs/Programs';
import Lecturers from './components/Lecturers/Lecturers'
import Support from './components/Support/Support';
import Lesson from './components/Lesson/Lesson';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/lecturers" element={<Lecturers />} />
            <Route path="/support" element={<Support />} />
            <Route path="/lesson" element={<Lesson />} />
            {/* <Route path="/registration" element={<Registration />} /> */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
