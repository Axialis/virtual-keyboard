import './style.css';
import Keyboard from './keyboard';
import Button from './buttons';

const KEY = {
  UNSHIFT:
    {
      EN:
            [
              '§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
              'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'ENTER',
              'CAPSLOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\',
              'SHIFT', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT',
              'FN', 'control', 'option', 'command', 'space', 'command', 'option', 'up', 'left', 'down', 'right',
            ],
      RU:
            [
              '>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
              'TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ENTER',
              'CAPSLOCK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё',
              'SHIFT', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'SHIFT',
              'FN', 'control', 'option', 'command', 'space', 'command', 'option', 'up', 'left', 'down', 'right',
            ],
    },
  SHIFT:
    {
      EN:
            [
              '±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
              'TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'ENTER',
              'CAPSLOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|',
              'SHIFT', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'SHIFT',
              'FN', 'control', 'option', 'command', 'space', 'command', 'option', 'up', 'left', 'down', 'right',
            ],
      RU:
            [
              '<', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+',
              'TAB', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'ENTER',
              'CAPSLOCK', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Ё',
              'SHIFT', ']', 'Я', 'С', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'SHIFT',
              'FN', 'control', 'option', 'command', 'space', 'command', 'option', 'up', 'left', 'down', 'right',
            ],
    },
};
