import React from 'react';

function HoverCounter({ count, incrementCount }) {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
        </div>
    );
}

export default HoverCounter;
