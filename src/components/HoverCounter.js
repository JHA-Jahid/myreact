import React from 'react';

function HoverCounter({ count, incrementCount, theme }) {
    const style =
        theme === 'dark'
            ? {
                  backgroundColor: '#800080',
                  color: '#ffffff',
                  fontSize: '40px',
                  fontFamily: 'tahoma',
              }
            : { color: '#800080' };
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} Times
            </h1>
        </div>
    );
}

export default HoverCounter;
