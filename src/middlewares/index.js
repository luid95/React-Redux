//
//next: Funcion que se llama cuando el middleware haya terminado su trabajo
//action: Informacion de lo que se está pasando
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    
    //Aletracion del action para retornar mediante el middleware
    const featured = [{ name: 'Eddie'}, ...actionInfo.action.payload];
    
    const updatedActionInfo = { 
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured }
    };
    console.log("action 2");
    console.log(updatedActionInfo);
    next(updatedActionInfo);
};