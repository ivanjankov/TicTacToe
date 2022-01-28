document.addEventListener('DOMContentLoaded', () => {
	let DOMStrings = {
		square: '.square',
		restartBtn: '.restart_btn',
		modal: 'winner_modal',
		modalWinner: 'winner',
		turn: 'turn',
	};

	let winningComb = ['012', '345', '678', '036', '147', '258', '246', '048'];
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
					checkWinner(winningComb);
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

	function checkWinner(winningArray) {
		let winComb = winningArray;
		let singleComb, playingSquares;
		playingSquares = document.querySelectorAll(DOMStrings.square);
		winComb.forEach((comb) => {
			singleComb = comb.split('');
			compareSquares(singleComb, playingSquares);
		});
	}

	function compareSquares(currComb, htmlEl) {
		let playingSquares = Array.from(htmlEl);
		let combArr = currComb.map(Number);
		let winner;
		let tie = checkIfTie();

		if (
			playingSquares[combArr[0]].innerHTML ==
				playingSquares[combArr[1]].innerHTML &&
			playingSquares[combArr[2]].innerHTML ==
				playingSquares[combArr[0]].innerHTML &&
			playingSquares[combArr[0]].innerHTML !== ''
		) {
			winner = playingSquares[combArr[0]].innerHTML;
			announceWinner(winner);
			return;
		} else if (tie) {
			announceWinner('Tie');
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
		console.log(validator);
		return validator;
	}

	uIController();
});
