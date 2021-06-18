import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';

class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
        return (
            <div className="App">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCount={incrementCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
