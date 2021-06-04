import React from 'react';

function Text({ addEmoji }) {
    const text = 'I am JavaScript Programing Language';
    return <div>{addEmoji ? addEmoji(text, '❤❤❤') : text}</div>;
}

export default Text;
