import { useCallback, useState } from 'react';
import Button1 from './components/Button1';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Count 1" />
            <Button1 handleClick={incrementByOne}>Increment by One</Button1>
            <hr />
            <ShowCount count={count2} title="Count 2" />
            <Button1 handleClick={incrementByFive}>Increment by Five</Button1>
        </div>
    );
}

export default App;
