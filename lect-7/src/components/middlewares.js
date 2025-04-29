export const middleware1 = (store) => (next) => (action) => {
  console.log('Действие', action);
  console.log('Состояние до:', store.getState());  
  const result = next(action);
  console.log('Состояние после:', store.getState());
  return result;
};

export const middleware2 = (store) => (next) => (action) => { 
  setTimeout(() => {
    console.log('Второй мидлвар - тайм-ауты, вызовы api и т.д.');
  }, 1000);
  return next(action);
};
