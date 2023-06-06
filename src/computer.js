const elements = ['камень', 'ножницы', 'бумага'];

function getCompChoice() {
  const i = Math.floor(Math.random() * elements.length);
  return elements[i];
}

export default getCompChoice;
