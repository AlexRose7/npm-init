const getUserChoice = (input) => {
    let userChoice
    if (input === "камень") {
        userChoice = "Вы выбрали камень";
        return input;        
    } else if (input === "ножницы") {
        userChoice = "Вы выбрали ножницы";
        return input;
    } else if (input === "бумага") {
        userChoice = "Вы выбрали бумагу";
        return input;
    } else {
        return "Введите верное значение"
    }
}
const getCompChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "камень";
    } else if (randomNumber === 1){
        return "ножницы";
    } else if (randomNumber === 2){
        return "бумага";
    }    
}

const winner = (userChoice, compChoice) => {
    if (userChoice === compChoice){
        return "Ничья!";
    } if (userChoice === "камень") {
        if (compChoice === "ножницы"){
            return "Вы победили";
        } if (compChoice === "бумага") {
            return "Победил оппонент";
        }
    } if (userChoice === "ножницы") {
        if (compChoice === "бумага") {
            return "Вы победили";
        } if (compChoice === "камень") {
            return "Победил оппонент";
        }
    } if (userChoice === "бумага") {
        if (compChoice === "камень") {
            return "Вы победили";
        } if (compChoice === "ножницы") {
            return "Победил оппонент";
        }
    }
}

const game = () => {
    let description = prompt("Сделайте выбор: камень, ножницы, бумага");
    let userChoicee = getUserChoice(description);
    let compChoice = getCompChoice();

    console.log(compChoice);
    console.log(winner(userChoicee, compChoice));
}

game();