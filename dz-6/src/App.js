import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        6 ДЗ. Приложение для управления каталогом продуктов.
      </header>
      <Provider store={store}>
        <AddProduct />
        <ProductEdit/>
        <ProductList/>
      </Provider>

    </div>
  );
}

export default App;
