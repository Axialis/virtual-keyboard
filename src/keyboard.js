class Keyboard {
  constructor() {
    this.keyboard = null;
  }

  drawKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    document.body.append(this.keyboard);
  }
}

export default Keyboard;
