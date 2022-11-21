class SweetCoffeeMachine {

	constructor()  {
		this.errorState = 0;
	}

	/**
	 * Callback for retrieving ready messages, takes callback function as parameter.
	 */
	readyCallback(callback) {
		this._cbReady = callback;
	}

	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 */
	makeLatte() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady();
			}
		}, 2000);
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * sugar and milk are values between [0,100]
	 */
	makeCappuccino() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady();
			}
		}, 2000);
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * cacao is a value between [0,100]
	 */
	makeEspresso() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady();
			}
		}, 2000);
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * cacao is a value between [0,100]
	 */
	makeMacchiato() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady();
			}
		}, 2000);
		return true
	}
}

export default SweetCoffeeMachine;