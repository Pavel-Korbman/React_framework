import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDitails';


const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержание статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержание статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержание статьи 3' }
]; // приходит с бэкенда

const App = () => (
  <Router>
    <div>
      <header className="App-header">
        4 Лекция ReactRouter. Просмотр статей.
      </header>
      <h1>Приложение для просмотра статей</h1>
      <Routes>
        {/* <Route path='/' element={<ArticleList articles={articles} />} /> */}
        <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />} />
      </Routes>
    </div>
  </Router>
);

export default App;
