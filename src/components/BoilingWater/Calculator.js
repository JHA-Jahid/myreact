import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahenheit } from './lib/converter';
import TemperatureInput from './TemperatureInput';

export class Calculator extends Component {
    state = { temperature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
