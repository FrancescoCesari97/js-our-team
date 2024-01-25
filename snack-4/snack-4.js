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

for (let team of teams) {
  team.score = Math.floor(Math.random() * 30 + 1);
  team.foul = Math.floor(Math.random() * 20 + 1);
}

/* for (let { score, foul, name } of teams) {
  teams.score = Math.floor(Math.random() * 30 + 1);
  teams.foul = Math.floor(Math.random() * 20 + 1);
  console.log(
    `i punti fatti da ${name} sono ${score} e i falli subiti sono ${foul}`
  );
} */

// - Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

const teamButton = document.getElementById("stampa-team");
const teamList = document.getElementById("team-list");

/* for (let { score, foul, name } of teams) {
  score = Math.floor(Math.random() * 30 + 1);
  foul = Math.floor(Math.random() * 20 + 1);
  console.log(name, foul);
} */

let newTeams = teams.map((item) => {
  let { name, foul } = item;
  return {
    name: name,
    foul: foul,
  };
});

console.log(newTeams);

teamButton.addEventListener("click", function () {
  for (let squadra of newTeams) {
    const team = `
      <li>${squadra.name}, falli subiti: ${squadra.foul}</li>
      
     
      
      
    `;

    teamList.innerHTML += team;
  }
});
