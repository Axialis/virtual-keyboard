import './style.css';
import KEY from './key';
import Keyboard from './keyboard';
import Button from './buttons';

const keyboard = new Keyboard();
keyboard.drawInputField();
keyboard.drawKeyboard();

const buttons = new Button(KEY);
buttons.drawButton();

window.addEventListener('keydown', (event) => {
  console.log(event.code);
});
