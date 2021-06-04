import React, { Component } from 'react';

export class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'I am the Emoji Component';

        if (override) {
            text = override;
        }
        return <div>{text}</div>;
    }
}

export default Emoji;
