document.addEventListener('DOMContentLoaded', () => {
	let DOMStrings = {
		square: '.square',
	};

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

	inputHtmlBasedOnPlayer();
});
