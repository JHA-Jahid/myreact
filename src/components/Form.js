import React from 'react';

export class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is Awesome',
        library: 'React',
        isAwsome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwsome: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, text, library, isAwsome } = this.state;
        console.log(title, text, library, isAwsome);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={this.state.library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        checked={this.state.isAwsome}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
