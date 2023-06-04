function getWinner(user, computer) {
  if (user === computer) {
    console.log("Это ничья!");
  }
  if (user === "камень") {
    if (computer === "ножницы") {
      console.log("Вы победили!");
    }
  }
  if (user === "ножницы") {
    if (computer === "бумага") {
      console.log("Вы победили!");
    }
  }
  if (user === "бумага") {
    if (computer === "камень") {
      console.log("Вы победили!");
    }
  }
  if (computer === "камень") {
    if (user === "ножницы") {
      console.log("Вы проиграли!");
    }
  }
  if (computer === "ножницы") {
    if (user === "бумага") {
      console.log("Вы проиграли!");
    }
  }
  if (computer === "бумага") {
    if (user === "камень") {
      console.log("Вы проиграли!");
    }
  }
}

export default getWinner;
