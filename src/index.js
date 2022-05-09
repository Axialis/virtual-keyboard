import './style.css';
import KEY from './key';
import Keyboard from './keyboard';
import Button from './buttons';
import Handler from './handler';

const keyboard = new Keyboard();
keyboard.drawInputField();
keyboard.drawKeyboard();

const buttons = new Button(KEY);
buttons.drawButton();

const handler = new Handler();
handler.addButtonClickListener();
