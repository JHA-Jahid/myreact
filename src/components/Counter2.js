import { useReducer } from 'react';

const initialState = {
    counter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.value };
        case 'decrement':
            return { counter: state.counter - action.value };
        default:
            return state.counter;
    }
};

function Counter() {
    const [count, despatch] = useReducer(reducer, initialState);
    return (
        <div style={{ textAlign: 'center', marginTop: '30%' }}>
            <h1>Count - {count.counter} </h1>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() =>
                    despatch({
                        type: 'increment',
                        value: 1,
                    })
                }
            >
                Increment By 1
            </button>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() =>
                    despatch({
                        type: 'increment',
                        value: 5,
                    })
                }
            >
                Increment By 5
            </button>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() =>
                    despatch({
                        type: 'decrement',
                        value: 1,
                    })
                }
            >
                Decrement By 1
            </button>
            <button
                style={{ fontSize: '25px', color: '#fff', background: '#000', margin: '5px' }}
                type="button"
                onClick={() =>
                    despatch({
                        type: 'decrement',
                        value: 5,
                    })
                }
            >
                Decrement By 5
            </button>
        </div>
    );
}

export default Counter;
