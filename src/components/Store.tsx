import { createStore, Action } from 'redux';

interface SetUserDataAction extends Action<string> {
    payload: any; // Replace 'any' with the appropriate type for the payload
}

// Define initial state
const initialState = {
    userData: null,
};

// Define reducer
const rootReducer = (state = initialState, action: SetUserDataAction) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

// Create store
const store = createStore(rootReducer);

export default store;

export class RootState {
}