import getUserChoice from './user.js';

import getCompChoice from './computer.js';

import getWinner from './winner.js';

function runGame() {
  console.log('Добро пожаловать в игру камень, ножницы, бумага!');
  const userChoice = getUserChoice();
  const computerChoice = getCompChoice();
  console.log(
    `Ваш выбор: ${userChoice}\nВыбор вашего оппонента: ${computerChoice}`,
  );
  getWinner(userChoice, computerChoice);
}

export default runGame;
