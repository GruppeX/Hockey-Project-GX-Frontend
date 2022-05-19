const rolePos1 = [
  "Goalkeeper",
  "Sweeper",
  "Defender",
  "Defender",
  "Defender",
  "Midfielder",
  "Midfielder",
  "Attacker",
  "Attacker",
  "Attacker",
  "Attacker",
];

const rolePos2 = [
  "Goalkeeper",
  "Sweeper",
  "Defender",
  "Defender",
  "Defender",
  "Defender",
  "Midfielder",
  "Midfielder",
  "Attacker",
  "Attacker",
  "Attacker",
];

const rolePos3 = [
  "Goalkeeper",
  "Sweeper",
  "Defender",
  "Defender",
  "Defender",
  "Midfielder",
  "Midfielder",
  "Midfielder",
  "Midfielder",
  "Attacker",
  "Attacker",
];

const pos1 = ['48%,2%', '48%,10%', '10%,20%', '48%,20%', '85%,20%', '30%,30%', '70%,30%', '40%,38%', '60%, 38%', '15%,44%', '85%,44%'];
const pos2 = ['48%,2%', '48%,10%', '15%,20%', '36%,20%', '63%,20%', '85%,20%', '32%,30%', '64%,30%', '10%, 40%', '50%,44%', '90%,40%'];
const pos3 = ['48%,2%', '48%,10%', '10%,20%', '48%,20%', '85%,20%', '30%,30%', '70%,30%', '15%,38%', '85%,38%', '40%,44%', '60%, 44%'];

const ddPositions = document.getElementById("selectedPosition");
document.addEventListener("DOMContentLoaded", changeRoleOnCards);
ddPositions.addEventListener("change", changeRoleOnCards);
document.addEventListener('DOMContentLoaded', createPlayerFields);
ddPositions.addEventListener('change', changePositionOnField);

//Print position
ddPositions.addEventListener("change", function () {
  out(ddPositions.value);
});

/**
 * Loops throughout the possible positions, so the correct player roles show up on the cards
 * @author Jackie & Christoffer
 */
function changeRoleOnCards() {
  if (ddPositions.value === "1-3-2-4") {
    for (let i = 0; i < rolePos1.length; i++) {
      let playerCard = document.getElementById("playerFieldCard" + (i + 1));
      playerCard.innerText = rolePos1[i];
    }
  }
  if (ddPositions.value === "1-4-2-3") {
    for (let i = 0; i < rolePos2.length; i++) {
      let playerCard = document.getElementById("playerFieldCard" + (i + 1));
      playerCard.innerText = rolePos2[i];
    }
  }
  if (ddPositions.value === "1-3-4-2") {
    for (let i = 0; i < rolePos3.length; i++) {
      let playerCard = document.getElementById("playerFieldCard" + (i + 1));
      playerCard.innerText = rolePos3[i];
    }
  }
}

/**
 * Create 11 divs with player fields
 * @author Jackie & Christoffer
 */
function createPlayerFields() {
  for (let i = 0; i < 11; i++) {
    let playerDiv = document.createElement('div');
    playerDiv.classList.add('p' + (i+1), 'playerCard');
    playerDiv.setAttribute('id', 'p' + (i+1));
    //TODO: add player context from another method

    document.getElementById('hockeyField').appendChild(playerDiv);
  }
}

/**
 * Change position on filed when position is change
 * @author Jackie & Christoffer
 */
function changePositionOnField() {
  if (ddPositions.value === '1-3-2-4') {
    for (let i = 0; i < 11; i++) {
      const pCard = document.getElementById('p' + (i+1));
      pCard.style.top = pos1[i].split(',')[0];
      pCard.style.left = pos1[i].split(',')[1];
    }
  } else if (ddPositions.value === '1-4-2-3') {
    for (let i = 0; i < 11; i++) {
      const pCard = document.getElementById('p' + (i+1));
      pCard.style.top = pos2[i].split(',')[0];
      pCard.style.left = pos2[i].split(',')[1];
    }
  } else if (ddPositions.value === '1-3-4-2') {
    for (let i = 0; i < 11; i++) {
      const pCard = document.getElementById('p' + (i+1));
      pCard.style.top = pos3[i].split(',')[0];
      pCard.style.left = pos3[i].split(',')[1];
    }
  }
}
