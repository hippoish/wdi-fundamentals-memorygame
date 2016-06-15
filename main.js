var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*if (cardOne === cardTwo) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
*/

var gameBoard = document.getElementById('game-board');
var newCard;

var createBoard = function(x) {
	for (var i = 0; i < x; i++) {
		newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
};

createBoard(4);
