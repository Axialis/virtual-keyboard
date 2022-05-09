class Keyboard {
  constructor() {
    this.keyboard = null;
    this.input = null;
  }

  drawKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    document.body.append(this.keyboard);
  }

  drawInputField() {
    this.input = document.createElement('textarea');
    this.input.classList.add('input-field');
    document.body.append(this.input);
  }
}

export default Keyboard;
