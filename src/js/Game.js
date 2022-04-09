export default class Game {
  constructor() {
    this.score = 0;
    this.currentIndex = -1;
    this.missCounter = 0;
    this.fields = null;
  }

  start() {
    this.fields = Array.from(document.querySelectorAll('.field'));

    const goblin = document.createElement('div');
    goblin.classList.add('goblin');

    const interval = setInterval(() => {
      if (document.querySelector('.goblin')) {
        document.querySelector('.goblin').remove();
      }

      let randomIndex = Math.floor(Math.random() * this.fields.length);
      while (randomIndex === this.currentIndex) {
        randomIndex = Math.floor(Math.random() * this.fields.length);
      }
      this.currentIndex = randomIndex;

      this.fields[randomIndex].appendChild(goblin);
      this.missCounter += 1;

      if (this.missCounter > 5) {
        alert('Game Over!');
        document.querySelector('.goblin').remove();
        clearInterval(interval);
      }
    }, 1000);

    this.addListeners();
  }

  addListeners() {
    for (const field of this.fields) {
      field.addEventListener('click', (event) => {
        event.preventDefault();
        const goblinDiv = event.currentTarget.querySelector('.goblin');
        if (goblinDiv != null) {
          goblinDiv.remove();

          this.missCounter -= 1;
          if (this.missCounter < 0) {
            this.missCounter = 0;
          }

          this.score += 1;
        }
      });
    }
  }
}
