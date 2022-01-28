document.addEventListener('DOMContentLoaded', () => {
	let DOMStrings = {
		square: '.square',
		restartBtn: '.restart_btn',
	};

	let winningComb = [123, 456, 789, 147, 258, 369, 357, 159];

	function inputHtmlBasedOnPlayer() {
		let player = 1;
		let squares = document.querySelectorAll(DOMStrings.square);

		squares.forEach((el) => {
			el.addEventListener(
				'click',
				() => {
					if (player == 1) {
						el.innerHTML = 'X';
						player = 0;
					} else if (player == 0) {
						el.innerHTML = 'O';
						player = 1;
					}
				},
				{ once: true }
			);
		});
	}

	function resetFields() {
		let fields = document.querySelectorAll(DOMStrings.square);
		fields.forEach((element) => {
			element.innerHTML = '';
		});
		inputHtmlBasedOnPlayer();
	}

	function restartButtonFunc() {
		let restartBtn = document.getElementsByClassName('restart_btn')[0];
		restartBtn.addEventListener('click', resetFields);
	}

	function uIController() {
		inputHtmlBasedOnPlayer();
		restartButtonFunc();
	}

	uIController();
});
