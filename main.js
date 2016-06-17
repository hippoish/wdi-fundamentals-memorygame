// array of game card values
var cards = ['queen', 'king', 'king', 'queen'];
// cards that have been clicked, or "turned over" on current turn
var cardsInPlay = [];

// find & save the board so we can add cards 
var gameBoard = document.getElementById('game-board');

// function to create board and cards
var createBoard = function() {
	// for each card
	for (var i = 0; i < cards.length; i++) {
		// create a div element 'newCard'
		var newCard = document.createElement('div');
		// add a class to the card for CSS purposes
		newCard.className = 'card';
		// set the card's 'data-card' attribute to a value of 'king' or 'queen'
		newCard.setAttribute('data-card', cards[i]);
		// when the card is clicked, run the function isTwoCards
		newCard.addEventListener('click', isTwoCards);
		//add the card to the board
		gameBoard.appendChild(newCard);
	}
};

// fcn to check whether 2 cards are turned over
var isTwoCards = function() {
	// adds the value of the clicked card to the cardsInPlay array
	cardsInPlay.push(this.getAttribute('data-card'));
	
	// "turn over" the card
	if (this.getAttribute('data-card') === 'king') {
		//king image
		this.innerHTML = "<img src='images/Hearts-13.png' alt='King of Hearts'>";
	} else {
		//queen image
		this.innerHTML = "<img src='images/Spades-12.png' alt='Queen of Spades'>";
	}

	// check if this is the 2nd card turned over
	if (cardsInPlay.length === 2) {
		// if it is, run the fuction isMatch on cardsInPlay
		isMatch(cardsInPlay);
		// reset cardsInPlay to empty for next turn
		cardsInPlay = [];
		// "turn back over" cards for next turn by clearing innerHTML on all card elements
		var x = document.getElementsByClassName('card');
		for (i = 0; i < x.length; i++) {
			x[i].innerHTML = "";
		}
	}
}

// fcn to check if the 2 turned over cards are the same
var isMatch = function(cardsInPlay) {

	// check for a match, then display appropriate message
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Not a match, try again.');
	}
}

// execute createBoard
createBoard();
