import { combineReducers } from 'redux';

const _gcd = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  

// REDUCERS //
const collatz = (state = 27, action) => {
    switch (action.type) {
        case 'ITER_COLLATZ':
            return state % 2 == 1 ? state * 3 + 1 : state / 2;
        case 'ADD_COLLATZ':
            return state + action.val;
        default:
        return state;
    }
};

const oeis_terms = (state = [1,1,3], action) => {
    switch(action.type){
        case 'ITER_OEIS':
            let n, p1 = state[1], p2 = state[2], gcd = _gcd(p1, p2);
            if(gcd> 1){
                n = (p1 + p2) / gcd;
            }
            else{
                n = p1 + p2 + 1;
            }
            return [p1, p2, n];
        default:
            return state;
    }
}
const oeis_n = (state = 2, action) => {
    switch(action.type){
        case 'ITER_OEIS':
            return state + 1;
        default:
            return state;
    }
}

// COMBINE REDUCERS //
export default combineReducers({
    collatz,
    oeis_terms,
    oeis_n
});