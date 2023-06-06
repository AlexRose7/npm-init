import readlineSync from 'readline-sync';

const elements = ['камень', 'ножницы', 'бумага'];

function getUserChoice() {
  const choice = readlineSync.question('Каким будет ваш выбор?').toLowerCase();
  if (choice === elements[0]) {
    return choice;
  }
  if (choice === elements[1]) {
    return choice;
  }
  if (choice === elements[2]) {
    return choice;
  }
  return 'ERROR! Убедитесь, что вы поняли во что вы играете)\nОбратите внимание на выбор вашего оппонента!';
}

export default getUserChoice;
