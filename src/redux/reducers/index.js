import { combineReducers } from 'redux';

// REDUCERS //
const test = (state = 27, action) => {
  switch (action.type) {
    case 'TEST1':
      return state % 2 == 1 ? state * 3 + 1 : state / 2;
    case 'TEST2':
        return state + action.val;
    default:
      return state;
  }
};

// COMBINE REDUCERS //
export default combineReducers({
    test
});