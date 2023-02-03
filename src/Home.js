const arrayPorOrdenar = [
  {
    id: 83,
    name: "Cronenberg Morty",
    status: "unknown",
    species: "Cronenberg",
    type: "",
  },
  {
    id: 725,
    name: "Tony Galopagus",
    status: "Alive",
    species: "Human",
    type: "",
  },
];
console.log(arrayPorOrdenar);

console.log(arrayPorOrdenar.sort((a, b) => b.id - a.id));
console.log(arrayPorOrdenar);
