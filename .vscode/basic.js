// console.log("Hello World!!!") ;

// Пример однострочного коментария

/*
пример
многострочного
коментария
*/

console.log( "- Did Joffrey agree?\n- He did. He also said \"I love using \\n\".") ;

let name1 = "Bill";
let name2 = "James";
name1 = "Fill";
console.log(name1) ;

let who = "dragon's" + ' mother' ;
console.log(who);

const first = 'brave';
const middle = 'new';
const last = 'world';
const space = ' ';
 
console.log(first + space + middle + last)

const applesPerBox = 60;
const boxesPerContainer = 50;
const container = 4;
const applesCount = applesPerBox * boxesPerContainer * container;
 
console.log(applesCount);
// Лучше всего использовать либо CamelCase либо lowerCamelCase
let bro_and_sis_of_kingCount = "Количество братьев и систер короля" ;
console.log(bro_and_sis_of_kingCount) ; 
//
const familySurname = "Vivo" ;
const familyCount = 20
const familyNature = "cool" ;

console.log(`All of ${familyCount} ${familySurname}'s, are ${familyNature}!`) ;

const word = 'Na\nharis' ;
const index = 7 ;
console.log(word[index]) ;

const giga = 'Chad' ;
const num = 4 ;
console.log(`${num} * ${giga}`) ;

console.log("gigachad" * 5) ;

const zero = 1 ;
console.log(zero) ;


let soilderCount = -2309;

soilderCount = Math.abs(-2309) ;
console.log(soilderCount) ; 


x = 923.2238 ;
console.log(Math.ceil(x)) ;

const text = 'Never forget what you are, for surely the world will not';

const fal = `First: ${text[0]}\nLast: ${text[text.length - 1]}`;
console.log(fal) ;

const name = 'Tirion';
console.log(name.length.toString());

const text1 = 'Never forget what you are, for surely the world will not.';

console.log(text1.slice(5, 15).trim().length) ;

const printWord = () => {
    const printWord = "\"B\" is word!\n  by the way..."
    console.log(printWord)
}
printWord() ;

const run = () => {
    return 5;
    return 10; // after return Цаца! Не выполниться даже новый return
  };
  console.log(run());

  sayHurrayThreeTimes = () => {
    return "hurray! hurray! hurray!" ;
  }
  const hurray = sayHurrayThreeTimes() ;
  console.log(hurray) ;

  //  не до конца понял тему (РАЗОБРАТЬСЯ!)
const text2 = "enter your namber after your voice call" ; 
  const turncate = (text2, length) => {
    const result = `${text2.slice(0, length)}...` ;
    return result ;
  }
console.log(turncate(text2)) ;
// рерализация функции getHiddenCard() которая за место 12 цифр пишет  ****
const getHiddenCard = (cardNum, numStars = 4) => {
  return `${"*".repeat(numStars)}${cardNum.slice(12,16)}` ;
}

/*
Список операций сравнения в JavaScript:

< меньше
<= меньше или равно
> больше
>= больше или равно
=== равно
!== не равно
*/

// Функция getLetter()
const name3 = 'Hexlet';
const getLetter = (name3, x) => name3[x - 1] || '' ;
console.log(getLetter(name3, 4)) ; 

/*работает так же как в теме я просто не обявил переменную, а сразу возвращаю результат:
const normalizeUrl = (address) =>{
  if (address.startsWith('https://')) {
    return address ;
  } else {
    address 
  }
    return `https://${address}` ;
}*/

// вариант с обьявленной переменной:
const normalizeUrl = (address) => {
let normalizedUrl ;

if (address.startsWith('https://')) {
  normalizedUrl =  address ;
  } else { 
  normalizedUrl =  `https://${address}` ;
  }

return normalizedUrl ;
}

console.log (normalizeUrl('google.com')) ;

// тернарный оператор: 
const abs = (number) => (number >= 0 ? number : -number);
//  ОБРАТИ ВНИМАНИЕ: 
const convertText = (text) => {
  if (text === '') {
  return '';

  } else {
  const converted = text[0] !== text[0].toUpperCase() ;
  return converted ? reverse(text) : text ; 
  }
}

// конструкция SWITCH:
const getNumberExplanation = (number) => {
  let mainNum ;

  switch ( number ){
    case 666 : 
      mainNum = 'devil number' ;
      break;

      case 42 :
      mainNum = 'answer for everything' ; 
      break;

      case 7 :
      mainNum = 'prime number' ;
      break;

      default :
      mainNum = null ;
  }
  return mainNum ;
}

// второй способ написания фунции getNumberExplanation конструкцией SWITCH:
const getNumberExplanation2 = (num) => {
  switch (num) {
case 8 :
  return 'Infinity!' ;

  case 12 :
    return 'Unique' ;

    case 777 :
      return 'Fortune' ; 

      default :
      return null ;
  }
}

// Пример цикла с использованием конструкции WHILE: 
const printNumbers = (lastNumber) => {
  // i – сокращение от index (порядковый номер)
  // используется по общему соглашению во множестве языков
  // как счетчик цикла
  let i = 1;

  while (i <= lastNumber) {
    console.log(i);
    i += 1;
  }
  console.log('finished!');
}

printNumbers(3);

// Синтаксический сахар:
let a = 4;
console.log(a -= 8 - a);

// обратная версия:
const printNumbersConversly = (initialNumber) => {
  
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
  
};

printNumbersConversly(4);


// Это конечно круто но не злоупотребляй этим)))
const print = (any) => {
  console.log(any);
};

// проверка простоты числа:
const isPrime = (number) => {
  if (number < 2) { 
    return false;
  }

  let divider = 2; 

  while (divider <= number / 2) { 
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
}

// Проанализируй этот код!
const makeItFunny = (text, num) => {
  let i = 0;
  let make = '';
  while (i < text.length) {
    const char = text[i];
    if ((i + 1) % num === 0) {
      make += char.toUpperCase();
    } else {
      make += char;
    }
    i += 1;
  }
  return make;
};

// цикл  for:
const reverseString = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }

  return result;
};

const encrypt = (font) => {
  let encrypted = '';
  for (let i = 0; i < font.length; i += 2) {
    const swap = font[i + 1] || '';
    encrypted += `${swap}${font[i]}`;
  }
  return encrypted;
};

// import * as mathematics from './math.js'; - импортировать весь модуль и назвать его mathematics в этом модуле
// поэтому к импортировпным сущностям обращение будет происхходить через mathematics (mathematics.chtotoIzModulya())
// mathematics + точка + имя функции.

// import { ..., ..., ..., ... } from './math.js'; - иной метод импорта

// export default что-нибудь; - в конце кода
// import что-нибудь from './math.js'; - импорт по умолчанию

/* При экспорте функции без имени, ее имя в модуле будет определяться в момент импорта, 
т.е. один и тот же экспорт может иметь разные имена в разных модулях:*/

/*export { ..., ... };

export { somesthing1 };

export default somesthing2; - экспорт по умолчанию может совмещаться с обычным экспортом.*/

// import surfaceArea, { square, e, pi } from './math.js'; - импорт может выглядеть так.

/* Ключевое слово as позволяет задать псевдоним для импортируемой сущности. 
Благодаря этому появляется возможность импортировать элементы с одинаковыми именами:
import { square, e, pi } from './math.js';
import { square as square1, e as e1, pi as pi1 } from './math1.js';*/

// array;
const swap = (char) => {
  const firstAbs = char[0];
  if (char.length - 1 >= 1) {
    char[0] = char[char.length - 1];
    char[char.length - 1] = firstAbs;
  }
  return char;
};



