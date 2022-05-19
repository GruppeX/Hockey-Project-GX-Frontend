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

const ddPositions = document.getElementById("selectedPosition");
document.addEventListener("DOMContentLoaded", changeRoleOnCards);
ddPositions.addEventListener("change", changeRoleOnCards);

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
