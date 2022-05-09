class Handler {
  constructor(type = 'UNSHIFT_EN') {
    this.buttons = document.querySelectorAll('.key');
    this.span = document.querySelectorAll('span');
    this.unshiftEn = document.querySelectorAll('[id=UNSHIFT_EN]');
    this.unshiftRu = document.querySelectorAll('[id=UNSHIFT_RU]');
    this.shiftEn = document.querySelectorAll('[id=SHIFT_EN]');
    this.shiftRu = document.querySelectorAll('[id=SHIFT_RU]');
    this.capsUnshiftEn = document.querySelectorAll('[id=CAPSLOCK_UNSHIFT_EN]');
    this.capsUnshiftRu = document.querySelectorAll('[id=CAPSLOCK_UNSHIFT_RU]');
    this.capsShiftEn = document.querySelectorAll('[id=CAPSLOCK_SHIFT_EN]');
    this.capsShiftRu = document.querySelectorAll('[id=CAPSLOCK_SHIFT_RU]');
    this.textarea = document.querySelector('.input-field');
    this.value = null;
    this.start = null;
    this.end = null;
    this.type = type;
    this.target = null;
    this.buttonFlag = false;
    this.insertValue = null;
  }

  focusedField() {
    window.addEventListener('keydown', () => {
      this.textarea.focus();
    });
    window.addEventListener('keyup', () => {
      this.textarea.focus();
    });
    window.addEventListener('keypress', () => {
      this.textarea.focus();
    });
    window.addEventListener('click', () => {
      this.textarea.focus();
    });
  }

  addText(btn) {
    this.start = this.textarea.selectionStart;
    this.end = this.textarea.selectionEnd;
    if (btn !== 'Shift'
    && btn !== 'CapsLock'
    && btn !== 'Alt'
    && btn !== 'Ctrl'
    && btn !== 'backspace'
    && btn !== 'Shift'
    && btn !== 'Win'
    && btn !== 'Del') {
      this.value = this.textarea.value;
      if (btn === 'TAB') {
        this.insertValue = '\t';
      } else if (btn === 'Space') {
        this.insertValue = ' ';
      } else if (btn === 'ENTER') {
        this.insertValue = '\n';
      } else {
        this.insertValue = btn;
      }
      this.textarea.value = this.value.slice(0, this.start)
      + this.insertValue
      + this.value.slice(this.end);
      this.textarea.selectionStart = this.start + 1;
      this.textarea.selectionEnd = this.start + 1;
    } else if (btn === 'backspace' && this.start !== 0 && this.end !== 0) {
      this.textarea.value = this.textarea.value.substring(0, this.start - 1)
      + this.textarea.value.substring(this.end, this.textarea.value.lenght);
      this.textarea.selectionStart = this.start - 1;
      this.textarea.selectionEnd = this.start - 1;
    } else if (btn === 'Del') {
      this.textarea.value = this.textarea.value.substring(0, this.start)
      + this.textarea.value.substring(this.end + 1, this.textarea.value.lenght);
      this.textarea.selectionStart = this.start;
      this.textarea.selectionEnd = this.start;
    }
  }

  // insertTextFromKeyboard() {
  //   this.span.forEach((el) => {
  //     console.log(el);
  //   });
  // }

  listenerDown = (event) => {
    event.preventDefault();
    this.insertTextFromKeyboard();
    this.buttons.forEach((btn) => {
      if (btn.id === event.code) {
        if (event.code === 'Tab' || event.altKey) {
          event.preventDefault();
        }
        if (event.code === 'CapsLock') {
          this.capslockButtons();
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.shiftLetterDown();
        }
        this.languageButtons(event);
        this.addStyleButton(event);
      }
    });
    if (event.shiftKey || event.code === 'CapsLock' || event.code === 'Backspace') {
      window.removeEventListener('keydown', this.listenerDown);
    }
  };

  listenerUp = (event) => {
    event.preventDefault();
    this.buttons.forEach((btn) => {
      if (btn.id === event.code) {
        if (event.code !== 'CapsLock') {
          this.removeStyleButton(event);
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.shiftLetterUp();
        }
      }
    });
    window.addEventListener('keydown', this.listenerDown);
  };

  listenerDownMouse = (event) => {
    this.addText(event.target.innerText);
    if (event.target.closest('#CapsLock') !== null) {
      this.target = document.getElementById('CapsLock');
      this.target.classList.toggle('active');
      this.capslockButtons();
    }
    if (event.target.closest('#ShiftRight') !== null || event.target.closest('#ShiftLeft') !== null) {
      this.shiftLetterDown();
    }
  };

  listenerUpMouse = (event) => {
    if (event.target.closest('#ShiftRight') !== null || event.target.closest('#ShiftLeft') !== null) {
      this.shiftLetterUp();
    }
  };

  keyDownListener() {
    window.addEventListener('keydown', this.listenerDown);
  }

  keyUpListener() {
    window.addEventListener('keyup', this.listenerUp);
  }

  addStyleButton(event) {
    this.target = document.getElementById(`${event.code}`);
    this.target.classList.toggle('active');
  }

  removeStyleButton(event) {
    this.target = document.getElementById(`${event.code}`);
    this.target.classList.remove('active');
  }

  languageButtons(event) {
    if (event.altKey && event.ctrlKey) {
      if (this.type === 'UNSHIFT_EN') {
        this.type = 'UNSHIFT_RU';
      } else if (this.type === 'UNSHIFT_RU') {
        this.type = 'UNSHIFT_EN';
      } else if (this.type === 'SHIFT_EN') {
        this.type = 'SHIFT_RU';
      } else if (this.type === 'SHIFT_RU') {
        this.type = 'SHIFT_EN';
      } else if (this.type === 'CAPSLOCK_UNSHIFT_EN') {
        this.type = 'CAPSLOCK_UNSHIFT_RU';
      } else if (this.type === 'CAPSLOCK_UNSHIFT_RU') {
        this.type = 'CAPSLOCK_UNSHIFT_EN';
      } else if (this.type === 'CAPSLOCK_SHIFT_EN') {
        this.type = 'CAPSLOCK_SHIFT_RU';
      } else if (this.type === 'CAPSLOCK_SHIFT_RU') {
        this.type = 'CAPSLOCK_SHIFT_EN';
      }
      this.chandeKeyboardLetters();
    }
  }

  capslockButtons() {
    if (this.type === 'UNSHIFT_EN') {
      this.type = 'CAPSLOCK_UNSHIFT_EN';
    } else if (this.type === 'UNSHIFT_RU') {
      this.type = 'CAPSLOCK_UNSHIFT_RU';
    } else if (this.type === 'SHIFT_EN') {
      this.type = 'CAPSLOCK_SHIFT_EN';
    } else if (this.type === 'SHIFT_RU') {
      this.type = 'CAPSLOCK_SHIFT_RU';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_EN') {
      this.type = 'UNSHIFT_EN';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_RU') {
      this.type = 'UNSHIFT_RU';
    } else if (this.type === 'CAPSLOCK_SHIFT_EN') {
      this.type = 'SHIFT_EN';
    } else if (this.type === 'CAPSLOCK_SHIFT_RU') {
      this.type = 'SHIFT_RU';
    }
    this.chandeKeyboardLetters();
  }

  shiftLetterDown() {
    if (this.type === 'UNSHIFT_EN') {
      this.type = 'SHIFT_EN';
    } else if (this.type === 'UNSHIFT_RU') {
      this.type = 'SHIFT_RU';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_EN') {
      this.type = 'CAPSLOCK_SHIFT_EN';
    } else if (this.type === 'CAPSLOCK_SHIFT_EN') {
      this.type = 'CAPSLOCK_UNSHIFT_EN';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_RU') {
      this.type = 'CAPSLOCK_SHIFT_RU';
    } else if (this.type === 'CAPSLOCK_SHIFT_RU') {
      this.type = 'CAPSLOCK_UNSHIFT_RU';
    }
    this.chandeKeyboardLetters();
  }

  shiftLetterUp() {
    if (this.type === 'SHIFT_EN') {
      this.type = 'UNSHIFT_EN';
    } else if (this.type === 'SHIFT_RU') {
      this.type = 'UNSHIFT_RU';
    } else if (this.type === 'CAPSLOCK_SHIFT_EN') {
      this.type = 'CAPSLOCK_UNSHIFT_EN';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_EN') {
      this.type = 'CAPSLOCK_SHIFT_EN';
    } else if (this.type === 'CAPSLOCK_SHIFT_RU') {
      this.type = 'CAPSLOCK_UNSHIFT_RU';
    } else if (this.type === 'CAPSLOCK_UNSHIFT_RU') {
      this.type = 'CAPSLOCK_SHIFT_RU';
    }
    this.chandeKeyboardLetters();
  }

  chandeKeyboardLetters() {
    this.span.forEach((span) => {
      span.classList.add('hidden');
    });
    if (this.type === 'UNSHIFT_EN') {
      this.unshiftEn.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'SHIFT_EN') {
      this.shiftEn.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'UNSHIFT_RU') {
      this.unshiftRu.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'SHIFT_RU') {
      this.shiftRu.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'CAPSLOCK_UNSHIFT_EN') {
      this.capsUnshiftEn.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'CAPSLOCK_SHIFT_EN') {
      this.capsShiftEn.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'CAPSLOCK_UNSHIFT_RU') {
      this.capsUnshiftRu.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
    if (this.type === 'CAPSLOCK_SHIFT_RU') {
      this.capsShiftRu.forEach((span) => {
        span.classList.remove('hidden');
      });
    }
  }

  addButtonClickListener() {
    this.focusedField();
    this.buttons.forEach((element) => {
      element.addEventListener('mousedown', this.listenerDownMouse);
      element.addEventListener('mouseup', this.listenerUpMouse);
    });
    this.keyDownListener();
    this.keyUpListener();
  }
}

export default Handler;
