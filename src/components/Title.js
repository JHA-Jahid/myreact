import React from 'react';

function Title() {
    console.log('rendering Title...');
    return <h1>UseCallback Hook Tutorial</h1>;
}

export default React.memo(Title);
