import React, { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    console.log('Content Rendered');
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        theme={theme}
                        incrementCount={incrementCount}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}

export default Content;
