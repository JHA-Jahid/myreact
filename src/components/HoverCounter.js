import React from 'react';

function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: '#800080',
                  color: '#ffffff',
                  fontSize: '40px',
                  fontFamily: 'tahoma',
              }
            : { color: '#800080', fontSize: '40px' };
    console.log('Hover Counter Rendered');
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} Times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}

export default HoverCounter;
