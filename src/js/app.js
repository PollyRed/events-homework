import Board from './Board';
import Game from './Game';

window.addEventListener('load', () => {
  const board = new Board();
  board.createBoard();

  const game = new Game();
  game.start();
  /* const fields = Array.from(document.querySelectorAll('.field'));

  const goblin = document.createElement('div');
  goblin.classList.add('goblin');

  let currentIndex = -1;
  let missCounter = 0;

  const interval = setInterval(() => {
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').remove();
    }

    let randomIndex = Math.floor(Math.random() * fields.length);
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * fields.length);
    }
    currentIndex = randomIndex;

    fields[randomIndex].appendChild(goblin);
    missCounter += 1;

    if (missCounter > 5) {
      alert('Game Over!');
      clearInterval(interval);
    }
  }, 1000);

  for (const field of fields) {
    field.addEventListener('click', (event) => {
      event.preventDefault();
      const goblinDiv = event.currentTarget.querySelector('.goblin');
      if (goblinDiv != null) {
        goblinDiv.remove();

        missCounter -= 1;
        if (missCounter < 0) {
          missCounter = 0;
        }

        console.log('+1');
      }
    });
  } */
});
