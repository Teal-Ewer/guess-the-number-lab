const game = {
	title: "Guess the Number!",
	biggestNum: 10,
	smallestNum: 1,
	secretNum: null,
	prevGuesses: [],
	play: function () {
		this.secretNum =
			Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
			this.smallestNum;
		do {
			this.getGuess();
			this.render();
		} while (this.prevGuesses[this.prevGuesses.length - 1] !== this.sectetNum);
	},
	getGuess: function () {
		let playerGuess = null;
		do {
			playerGuess = parseInt(
				prompt(
					`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`
				)
			);
		} while (
			isNaN(playerGuess) ||
			playerGuess > this.biggestNum ||
			playerGuess < this.smallestNum
		);
		this.prevGuesses.push(playerGuess);
	},
	render: function () {
		let highLow;
		playerGuess = this.prevGuesses[this.prevGuesses.length - 1];
		highLow = playerGuess > this.secretNum ? "high" : "low";
		return playerGuess === this.secretNum
			? alert(
					`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
			  )
			: alert(
					`Your guess is too ${highLow}. Previous guesses: ${this.prevGuesses.join(
						", "
					)}.`
			  );
	},
};

game.play();
