const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

// - Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici

for (let { score, foul, name } of teams) {
  score = Math.floor(Math.random() * 30 + 1);
  foul = Math.floor(Math.random() * 20 + 1);
  console.log(
    `i punti fatti da ${name} sono ${score} e i falli fatti sono ${foul}`
  );
}
