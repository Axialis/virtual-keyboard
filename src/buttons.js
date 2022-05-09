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
      'UNSHIFT_EN',
      'SHIFT_EN',
      'UNSHIFT_RU',
      'SHIFT_RU',
      'CAPSLOCK_UNSHIFT_EN',
      'CAPSLOCK_SHIFT_EN',
      'CAPSLOCK_UNSHIFT_RU',
      'CAPSLOCK_SHIFT_RU',
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
      this.button.setAttribute('id', `Digit${this.key.UNSHIFT.EN[k][i]}`);
    } else if (this.key.UNSHIFT.EN[k][i] === '`') {
      this.button.setAttribute('id', 'Backquote');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Space') {
      this.button.setAttribute('id', 'Space');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Enter') {
      this.button.setAttribute('id', 'Enter');
    } else if (this.key.UNSHIFT.EN[k][i] === 'backspace') {
      this.button.setAttribute('id', 'Backspace');
    } else if (this.key.UNSHIFT.EN[k][i] === '=') {
      this.button.setAttribute('id', 'Equal');
    } else if (this.key.UNSHIFT.EN[k][i] === '-') {
      this.button.setAttribute('id', 'Minus');
    } else if (this.key.UNSHIFT.EN[k][i] === '/') {
      this.button.setAttribute('id', 'Slash');
    } else if (this.key.UNSHIFT.EN[k][i] === '|' || this.key.UNSHIFT.EN[k][i] === '\\') {
      this.button.setAttribute('id', 'Backslash');
    } else if (this.key.UNSHIFT.EN[k][i] === '_') {
      this.button.setAttribute('id', 'Minus');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LShift') {
      this.button.setAttribute('id', 'ShiftLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RShift') {
      this.button.setAttribute('id', 'ShiftRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LAlt') {
      this.button.setAttribute('id', 'AltLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RAlt') {
      this.button.setAttribute('id', 'AltRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'LCtrl') {
      this.button.setAttribute('id', 'ControlLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === 'RCtrl') {
      this.button.setAttribute('id', 'ControlRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'TAB') {
      this.button.setAttribute('id', 'Tab');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Del') {
      this.button.setAttribute('id', 'Delete');
    } else if (this.key.UNSHIFT.EN[k][i] === ';') {
      this.button.setAttribute('id', 'Semicolon');
    } else if (this.key.UNSHIFT.EN[k][i] === '\'') {
      this.button.setAttribute('id', 'Quote');
    } else if (this.key.UNSHIFT.EN[k][i] === '▲') {
      this.button.setAttribute('id', 'ArrowUp');
    } else if (this.key.UNSHIFT.EN[k][i] === '◄') {
      this.button.setAttribute('id', 'ArrowLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === '▼') {
      this.button.setAttribute('id', 'ArrowDown');
    } else if (this.key.UNSHIFT.EN[k][i] === '►') {
      this.button.setAttribute('id', 'ArrowRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'Win') {
      this.button.setAttribute('id', 'MetaLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === ',') {
      this.button.setAttribute('id', 'Comma');
    } else if (this.key.UNSHIFT.EN[k][i] === '.') {
      this.button.setAttribute('id', 'Period');
    } else if (this.key.UNSHIFT.EN[k][i] === 'CapsLock') {
      this.button.setAttribute('id', 'CapsLock');
    } else if (this.key.UNSHIFT.EN[k][i] === '[') {
      this.button.setAttribute('id', 'BracketLeft');
    } else if (this.key.UNSHIFT.EN[k][i] === ']') {
      this.button.setAttribute('id', 'BracketRight');
    } else if (this.key.UNSHIFT.EN[k][i] === 'ENTER') {
      this.button.setAttribute('id', 'Enter');
    } else {
      this.button.setAttribute('id', `Key${this.key.SHIFT.EN[k][i]}`);
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
