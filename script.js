document.addEventListener('DOMContentLoaded', () => {
	let DOMStrings = {
		square: '.square',
		restartBtn: '.restart_btn',
		modal: 'winner_modal',
		modalWinner: 'winner',
		turn: 'turn',
		playerOne: 'player_one_score',
		playerTwo: 'player_two_score',
		tie: 'tie',
	};

	let currTurn = document.getElementsByClassName(DOMStrings.turn)[0];

	function inputHtmlBasedOnPlayer() {
		let player = 1;
		let squares = document.querySelectorAll(DOMStrings.square);

		squares.forEach((el) => {
			el.addEventListener(
				'click',
				() => {
					if (player == 1) {
						el.innerHTML = 'X';
						currTurn.innerText = 'TURN O';
						player = 0;
					} else if (player == 0) {
						el.innerHTML = 'O';
						currTurn.innerText = 'TURN X';
						player = 1;
					}
					checkWinner();
				},
				{ once: true }
			);
		});
	}

	function resetFields() {
		let fields = document.querySelectorAll(DOMStrings.square);
		let modal = document.getElementById(DOMStrings.modal);
		currTurn.innerText = 'TURN X';
		modal.classList.add('hidden');
		fields.forEach((element) => {
			element.innerHTML = '';
		});
		inputHtmlBasedOnPlayer();
	}

	function restartButtonFunc() {
		let restartBtn = document.querySelectorAll(DOMStrings.restartBtn);
		restartBtn.forEach((btn) => {
			btn.addEventListener('click', resetFields);
		});
	}

	function uIController() {
		inputHtmlBasedOnPlayer();
		restartButtonFunc();
	}

	function checkWinner() {
		let playingSquares = Array.from(
			document.querySelectorAll(DOMStrings.square)
		);
		let combArr = [210, 345, 678, 360, 147, 258, 246, 804];
		let winner;
		for (let i = 0; i < combArr.length; i++) {
			let currItem = String(combArr[i]).split('').map(Number);
			console.log('Current item is: ', combArr[i]);
			if (
				playingSquares[currItem[0]].innerHTML ==
					playingSquares[currItem[1]].innerHTML &&
				playingSquares[currItem[2]].innerHTML ==
					playingSquares[currItem[0]].innerHTML &&
				playingSquares[currItem[0]].innerHTML !== ''
			) {
				winner = playingSquares[currItem[0]].innerHTML;
				announceWinner(winner);
				updateScore(winner);

				break;
			} else if (checkIfTie() && i == combArr.length - 1) {
				announceWinner('Tie');
				updateScore('Tie');
				break;
			}
		}
	}

	function announceWinner(win) {
		let modal = document.getElementById(DOMStrings.modal);
		let winner = document.getElementById(DOMStrings.modalWinner);
		modal.classList.remove('hidden');
		winner.innerText = win;
	}

	function checkIfTie() {
		let squares = Array.from(document.querySelectorAll(DOMStrings.square));
		let validator = squares.every((el) => el.innerText !== '');
		return validator;
	}

	uIController();
});
