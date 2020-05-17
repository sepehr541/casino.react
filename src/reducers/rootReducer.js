import { INITIALIZE, UPDATE, LEAVE } from './constants';

// FROM : https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example
function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues)
}
let initialState = {}
export const rootReducer = (state = initialState, action) => {
    console.log("reducer called by action " + action.type);    
    
    switch (action.type) {
        case(INITIALIZE): {
            return action.payload;
        }

        case (UPDATE): {
            return updateObject(state, action.payload);
        }

        case (LEAVE): {
            return {};
        }
        
        default:
            return state;
    }
};

export default rootReducer;