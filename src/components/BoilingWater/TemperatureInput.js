import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahernheit',
};
function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]} : for knowing water boiled</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e, scale)}
                />
            </fieldset>
        </div>
    );
}
export default TemperatureInput;
