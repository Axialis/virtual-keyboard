class Button {
  constructor(key) {
    this.key = key;
    this.button = null;
    this.parent = document.querySelector('.keyboard');
  }

  drawButton() {
    this.key.forEach((element) => {
      this.button = document.createElement('span');
      this.button.classList.add('key');
      this.button.innerHTML = `${element}`;
      this.parent.append(this.button);
    });
  }
}

export default Button;
