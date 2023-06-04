const elements = ["камень", "ножницы", "бумага"];

function getCompChoice() {
  const i = Math.floor(Math.random() * 3);
  return elements[i];
}

export default getCompChoice;
