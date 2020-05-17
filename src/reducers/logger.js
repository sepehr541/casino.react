const Logger = store => next => action => {
    console.log(action);
    next(action);
}

export default Logger;