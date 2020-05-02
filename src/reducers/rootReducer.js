import { INITIALIZE, UPDATE, PLAYER_LEFT } from './constants';

// FROM : https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example
function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues)
}
let initialState = {}
export const rootReducer = (state = initialState, action) => {
    console.log('reducer Called');
    switch (action.type) {
        case('TEST'): {
            return updateObject(state, {'test' : action.payload})
            
        }
        case(INITIALIZE): {
            return action.payload;
        }

        case (UPDATE): {
            return updateObject(state, action.payload);
        }

        case (PLAYER_LEFT): {
            delete state[action.payload];
            return state;
        }
        
        default:
            return state;
    }
};

export default rootReducer;