const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// * stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let profile of team) {
  console.log(profile.name);
  console.log(profile.role);
  console.log(profile.image);
}

// * stampare le stesse informazioni su DOM sottoforma di stringhe

const buttonProfile = document.getElementById("stampa-credenziali");
const profilesList = document.getElementById("profile-list");

buttonProfile.addEventListener("click", function () {
  for (let profile of team) {
    const messageHtml = `
    
    
    <div class='col-4 text-center my-4 '>
      <div >
      <img src="./img (4)/img/${profile.image}" alt="" class='rounded-top shadow-lg'>
        
      </div>

      <div class='sfondo-chiaro rounded-bottom'>
        <div>
          <h3>
            ${profile.name}
          </h3>
        </div>
        <div>
          ${profile.role}
        </div>
      </div>
                
    </div>
    
    
    `;

    profilesList.innerHTML += messageHtml;
  }
});
