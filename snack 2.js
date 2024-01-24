// * esercizio 2

// creare un array di stringhe contenente il loro nome tutto in maiuscolo.

const students = [
  {
    nome: "Marco della Rovere",
    id: 213,
    voto: 78,
  },
  {
    nome: "Paola Cortellessa",
    id: 110,
    voto: 96,
  },
  {
    nome: "Andrea Mantegna",
    id: 250,
    voto: 48,
  },
  {
    nome: "Gaia Borromini",
    id: 145,
    voto: 74,
  },
  {
    nome: "Luigi Grimaldello",
    id: 196,
    voto: 68,
  },
  {
    nome: "Piero della Francesca",
    id: 102,
    voto: 50,
  },
  {
    nome: "Piero della Francesca",
    id: 120,
    voto: 84,
  },
];
const maiuscNomi = students.map((item) => item.nome.toUpperCase());

console.log(maiuscNomi);

// Creare un array di oggetti "studente" che hanno un totale di voti superiore a 70

const studente = students.filter((item) => item.voto > 70);

console.log(studente);

// Creare un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

const studenteId = students.filter((item) => item.voto > 70 && item.id > 120);

console.log(studenteId);
