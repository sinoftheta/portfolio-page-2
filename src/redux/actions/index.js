// TEST ACTION //
export const iterateCollatz = () => ({ type: 'ITER_COLLATZ'});

export const addCollatz = (val) => ({ type: 'ADD_COLLATZ', val: val});

export const iterateOEIS = () => ({ type: 'ITER_OEIS'});