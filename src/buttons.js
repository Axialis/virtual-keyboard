class Button {
  constructor(key) {
    this.key = key;
    this.lineText = [
      this.string_0,
      this.string_1,
      this.string_2,
      this.string_3,
      this.string_4,
      this.string_5,
      this.string_6,
      this.string_7,
    ];
    this.type = [
      '#UNSHIFT_EN',
      '#SHIFT_EN',
      '#UNSHIFT_RU',
      '#SHIFT_RU',
      '#CAPSLOCK_UNSHIFT_EN',
      '#CAPSLOCK_SHIFT_EN',
      '#CAPSLOCK_UNSHIFT_RU',
      '#CAPSLOCK_SHIFT-RU',
    ];

    this.parent = document.querySelector('.keyboard');
    this.div = null;
  }

  addRow() {
    this.div = document.createElement('div');
    this.div.classList.add('buttons-row');
  }

  addElementsInRow() {
    this.parent.append(this.div);
  }

  addCodeClass(k, i) {
    if (Number.isInteger(parseInt(this.key.UNSHIFT.EN[k][i], 10))) {
      this.button.classList.add(`Digit${this.key.UNSHIFT.EN[k][i]}`);
    } else if (this.key.UNSHIFT.EN[k][i] === '`') {
      this.button.classList.add('Backquote');
    } else if (this.key.UNSHIFT.EN[k][i] === 'space') {
      this.button.classList.add('Space');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Enter') {
      this.button.classList.add('Enter');
    } else if (this.key.UNSHIFT.EN[k][i] === 'backspace') {
      this.button.classList.add('Backspace');
    } else if (this.key.UNSHIFT.EN[k][i] === '=') {
      this.button.classList.add('Equal');
    } else if (this.key.UNSHIFT.EN[k][i] === '-') {
      this.button.classList.add('Minus');
    } else if (this.key.UNSHIFT.EN[k][i] === '/') {
      this.button.classList.add('Slash');
    } else if (this.key.UNSHIFT.EN[k][i] === '|' || this.key.UNSHIFT.EN[k][i] === '\\') {
      this.button.classList.add('Backslash');
    } else if (this.key.UNSHIFT.EN[k][i] === '_') {
      this.button.classList.add('Minus');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LShift') {
      this.button.classList.add('ShiftLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RShift') {
      this.button.classList.add('ShiftRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LAlt') {
      this.button.classList.add('AltLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RAlt') {
      this.button.classList.add('AltRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LCtrl') {
      this.button.classList.add('ControlLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RCtrl') {
      this.button.classList.add('ControlRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'TAB') {
      this.button.classList.add('Tab');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Del') {
      this.button.classList.add('NumpadDecimal');
    } else if (this.key.UNSHIFT.EN[k][i] === ';') {
      this.button.classList.add('Semicolon');
    } else if (this.key.UNSHIFT.EN[k][i] === '\'') {
      this.button.classList.add('Quote');
    } else if (this.key.UNSHIFT.EN[k][i] === '▲') {
      this.button.classList.add('ArrowUp');
    } else if (this.key.UNSHIFT.EN[k][i] === '◄') {
      this.button.classList.add('ArrowLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === '▼') {
      this.button.classList.add('ArrowDown');
    } else if (this.key.UNSHIFT.EN[k][i] === '►') {
      this.button.classList.add('ArrowRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'WIN') {
      this.button.classList.add('MetaLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === ',') {
      this.button.classList.add('Coma');
    } else if (this.key.UNSHIFT.EN[k][i] === '.') {
      this.button.classList.add('Perion');
    } else if (this.key.UNSHIFT.EN[k][i] === 'CAPSLOCK') {
      this.button.classList.add('CapsLock');
    } else if (this.key.UNSHIFT.EN[k][i] === '[') {
      this.button.classList.add('BracketLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === ']') {
      this.button.classList.add('BracketRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'ENTER') {
      this.button.classList.add('Enter');
    } else {
      this.button.classList.add(`Key${this.key.SHIFT.EN[k][i]}`);
    }
  }

  createSpanLineInButton() {
    for (let m = 0; m < this.lineText.length; m += 1) {
      this.lineText[m] = document.createElement('span');
      this.lineText[m].setAttribute('id', this.type[m]);
      if (m > 0) {
        this.lineText[m].classList.add('hidden');
      }
    }
  }

  namingButton(k, i) {
    if (this.key.UNSHIFT.EN[k][i] === 'LShift'
    || this.key.UNSHIFT.EN[k][i] === 'RShift'
    || this.key.UNSHIFT.EN[k][i] === 'LAlt'
    || this.key.UNSHIFT.EN[k][i] === 'RAlt'
    || this.key.UNSHIFT.EN[k][i] === 'LCtrl'
    || this.key.UNSHIFT.EN[k][i] === 'RCtrl'
    ) {
      this.lineText[0].innerHTML = this.key.UNSHIFT.EN[k][i].slice(1);
      this.lineText[1].innerHTML = this.key.SHIFT.EN[k][i].slice(1);
      this.lineText[2].innerHTML = this.key.UNSHIFT.RU[k][i].slice(1);
      this.lineText[3].innerHTML = this.key.SHIFT.RU[k][i].slice(1);
      this.lineText[4].innerHTML = this.key.CAPSLOCK_UNSHIFT.EN[k][i].slice(1);
      this.lineText[5].innerHTML = this.key.CAPSLOCK_SHIFT.EN[k][i].slice(1);
      this.lineText[6].innerHTML = this.key.CAPSLOCK_UNSHIFT.RU[k][i].slice(1);
      this.lineText[7].innerHTML = this.key.CAPSLOCK_SHIFT.RU[k][i].slice(1);
    } else {
      this.lineText[0].innerHTML = this.key.UNSHIFT.EN[k][i];
      this.lineText[1].innerHTML = this.key.SHIFT.EN[k][i];
      this.lineText[2].innerHTML = this.key.UNSHIFT.RU[k][i];
      this.lineText[3].innerHTML = this.key.SHIFT.RU[k][i];
      this.lineText[4].innerHTML = this.key.CAPSLOCK_UNSHIFT.EN[k][i];
      this.lineText[5].innerHTML = this.key.CAPSLOCK_SHIFT.EN[k][i];
      this.lineText[6].innerHTML = this.key.CAPSLOCK_UNSHIFT.RU[k][i];
      this.lineText[7].innerHTML = this.key.CAPSLOCK_SHIFT.RU[k][i];
    }
  }

  addTextToButton() {
    for (let m = 0; m < this.lineText.length; m += 1) {
      this.button.append(this.lineText[m]);
    }
  }

  drawButton() {
    for (let k = 0; k < this.key.UNSHIFT.EN.length; k += 1) {
      this.addRow();

      for (let i = 0; i < this.key.UNSHIFT.EN[k].length; i += 1) {
        this.button = document.createElement('div');
        this.button.classList.add('key');
        this.createSpanLineInButton();
        this.addCodeClass(k, i);
        this.namingButton(k, i);
        this.addTextToButton();
        this.addCodeClass(k, i);
        this.div.append(this.button);
      }
      this.addElementsInRow();
    }
  }
}

export default Button;
