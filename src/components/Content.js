import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function Content() {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={counter}
                                theme={theme}
                                incrementCount={incrementCount}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}

export default Content;
