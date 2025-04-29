

export const middleware1 = (store) => (next) => (action) => {
    
    
    setTimeout(() => {
        console.log('Работа мидлвара 1');
        return next(action);        
    }, 1500);
    
};
