export const middleware1 = (store) => (next) => (action) => {    
    setTimeout(() => {        
        return next(action);        
    }, 1500);    
};
