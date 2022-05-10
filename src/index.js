import './style.css';
import KEY from './key';
import Keyboard from './keyboard';
import Button from './buttons';
import Handler from './handler';

let Language = localStorage.getItem('Language');
if (Language === null) {
  Language = 'UNSHIFT_EN';
}

const addDiscription = () => {
  const line1 = document.createElement('h3');
  const line2 = document.createElement('h4');
  const line3 = document.createElement('h4');
  line1.innerHTML = '<H1>Virtual Keyboard</H1>';
  line2.innerHTML = '<H3>Клавиатура создана в операционной системе Windows</H3>';
  line3.innerHTML = '<H3>Для переключения языка комбинация: ctrl + alt</H3>';
  document.body.append(line1);
  document.body.append(line2);
  document.body.append(line3);
};
addDiscription();

const keyboard = new Keyboard();
keyboard.drawInputField();
keyboard.drawKeyboard();

const buttons = new Button(KEY);
buttons.drawButton();

const handler = new Handler(Language);
handler.addButtonClickListener();
handler.uploadModule();
