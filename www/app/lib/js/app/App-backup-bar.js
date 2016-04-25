import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        red:0,
        green:0,
        blue:0}
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            red:reactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green:reactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue:reactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render(){
        return (
            <div>
            <Slider ref="red" update={this.update} />
            {this.state.red}
            <Slider ref="blue" update={this.update} />
            {this.state.blue}
            <Slider ref="green" update={this.update} />
            {this.state.green}
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
        <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
         </div>
     )
    }
}

export default App
