import React, {Component} from 'react';
import './css/CoffeeButton.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class CoffeeButton extends Component {
    constructor(props) {
        super(props);
        this.onMyClick = this.onMyClick.bind(this);
    }

    onMyClick() {
        this.props.makeCoffee();
    }

    render() {
        const buttonstyles= {};
        this.props.disabled ? buttonstyles.color = "rgba(0,0,0,0.5)" : buttonstyles.color = "black";
        return (
            <button className="Button-coffee" style={buttonstyles} disabled={this.props.disabled} onClick={this.onMyClick}>
                {this.props.taste}
            </button>
        )
    }
}

export default CoffeeButton;