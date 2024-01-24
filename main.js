const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

// convertire l'array di stringe in oggetti

const vipsInfo = vips.map((vip, posto, tavolo) => {
  return {
    Nome: vip,
    posto_occupato: posto + 1,
    nome_del_tavolo: "Tavolo Vip",
  };
});

console.log(vipsInfo);
