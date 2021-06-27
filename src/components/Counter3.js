import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    const [count, despatch] = useReducer(reducer, initialState);
    return (
        <div style={{ textAlign: 'center', marginTop: '30%' }}>
            <h1>Count - {count} </h1>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() => despatch('increment')}
            >
                Increment
            </button>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() => despatch('decrement')}
            >
                Decrement
            </button>
        </div>
    );
}

export default Counter;
