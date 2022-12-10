const principalDiv = document.getElementById('principal-div');
let names = [
  'Luffy',
  'Nami',
  'Robin',
  'Jinbe',
  'Zoro',
  'Sanji',
  'Chopper',
  'Usopp',
  'Luffy',
  'Nami',
  'Robin',
  'Jinbe',
  'Zoro',
  'Sanji',
  'Chopper',
  'Usopp',
];

function shuffle() {
  let currentIndex = names.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [names[currentIndex], names[randomIndex]] = [names[randomIndex], names[currentIndex]];
  }

  return names;
}

const functionClicar = (event) => {
  event.target.classList.add('classColorClick');
};

const startGame = () => {
  principalDiv.innerHTML = '';
  shuffle();
  for (let index = 0; index < 16; index += 1) {
    let creatAsDivs = document.createElement('div');
    creatAsDivs.className = 'secundarias-div click-div';
    principalDiv.appendChild(creatAsDivs);
    const createP = document.createElement('p');
    createP.className = 'class-p';
    createP.textContent = names[index];
    creatAsDivs.appendChild(createP);
    creatAsDivs.addEventListener('click', functionClicar);
  }
};

const bntRestart = document.getElementById('bnt-click');
bntRestart.addEventListener('click', startGame);
