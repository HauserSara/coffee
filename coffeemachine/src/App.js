import React, {Component} from 'react';
import './css/App.css';
import CoffeeButton from './CoffeeButton';
import SweetCoffeeMachine from './mock/SweetCoffeeMock';
import CoffeeOff from './images/CoffeeOff.png'
import CoffeeOn from './images/CoffeeOn.png'

class App extends Component {

    constructor(props) {
        super(props);

        this.sweetCoffeeMachine = new SweetCoffeeMachine();
        this.setToReady = this.setToReady.bind(this);
        this.sweetCoffeeMachine.readyCallback(this.setToReady);

        this.makeLatte = this.makeLatte.bind(this);
        this.makeCappuccino = this.makeCappuccino.bind(this);
        this.makeEspresso = this.makeEspresso.bind(this);
        this.makeMacchiato = this.makeMacchiato.bind(this);

        this.state = {message: "Ready for use", disabled: false};
    }

    setToReady() {
        this.setState({message: "Ready for use", disabled: false});
        this.forceUpdate();
    }

    makeLatte() {
        this.setState({message: "Making Latte...", disabled: true});
        this.sweetCoffeeMachine.makeLatte();
    }

    makeCappuccino() {
        this.setState({message: "Making Cappuccino...", disabled: true});
        this.sweetCoffeeMachine.makeCappuccino();
    }

    makeEspresso() {
        this.setState({message: "Making Espresso...", disabled: true});
        this.sweetCoffeeMachine.makeEspresso();
    }

    makeMacchiato() {
        this.setState({message: "Making Macchiato...", disabled: true});
        this.sweetCoffeeMachine.makeMacchiato();
    }

    render() {
    //const imgList = ['./images/CoffeeOff.png', './images/CoffeeOn.png'];
    const bgstyles = {};
    this.state.disabled ? bgstyles.backgroundColor = "black" : bgstyles.backgroundColor =  "yellow";
        return (
            <div className="Wrapper" style={{backgroundImage: 'url(./images/CoffeeOff.png)'}}>
                <div className="App">
                    <table>
                        <tbody>
                        <tr>
                            <td><CoffeeButton taste="Latte" disabled={this.state.disabled} makeCoffee={this.makeLatte}/></td>
                            <td><CoffeeButton taste="Cappuccino" disabled={this.state.disabled} makeCoffee={this.makeCappuccino}/></td>
                        </tr>
                        <tr>
                            <td><CoffeeButton taste="Macchiato" disabled={this.state.disabled} makeCoffee={this.makeMacchiato}/></td>
                            <td><CoffeeButton taste="Espresso" disabled={this.state.disabled} makeCoffee={this.makeEspresso}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="Status">
                        {this.state.message}
                    </div>
                </div>
                <img className="Background" style={bgstyles} alt="Kaffeemaschine" src={`url${CoffeeOn}`}/>
            </div>
        )
    }
}

export default App;