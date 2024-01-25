//- Creare un array di oggetti:
//- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycles = [
  {
    nome: "Bianchi",
    peso: 2,
  },
  {
    nome: "Colnago",
    peso: 3,
  },
  {
    nome: "Bottecchia",
    peso: 2.5,
  },
  {
    nome: "Lombardo",
    peso: 1.8,
  },
  {
    nome: "Olympia",
    peso: 3,
  },
  {
    nome: "Pinarello",
    peso: 2.6,
  },
];

//- Stampare in console la bici con peso minore utilizzando destructuring e template literal

for (let weight of bicycles) {
  console.log(weight);
}
//let [{ peso }] = bicycles;

//console.log(peso);
