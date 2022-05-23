let selectedCard;
let selectedPlayerField;
let selectedNumber;
/**
 * Adds firstname and lastname on specific playerCard from given player object
 * @param {Object} player
 * @author Jackie & Christoffer
 */

function selectedPlayer(player) {
  document.getElementById(selectedCard).innerText =
    player.firstName + " " + player.lastName;
  let editPlayer = document.getElementById("editPlayer"+selectedNumber);
  editPlayer.value = player.playerId;

  const playerField = document.getElementById(selectedPlayerField);
  let tags = playerField.getElementsByTagName("p");
  // Remove old p tag if any
  for (let i = tags.length - 1; i >= 0; i--) {
    tags[i].remove();
  }
  let pTagRole = document.createElement("p");
  pTagRole.classList.add("roleCard");
  pTagRole.innerText = player.role;
  playerField.appendChild(pTagRole);
  let pTag = document.createElement("p");
  pTag.classList.add("initials");
  pTag.innerText = player.firstName;
  playerField.appendChild(pTag);
  let pTag2 = document.createElement("p");
  pTag2.classList.add("initials");
  pTag2.innerText = player.lastName;
  playerField.appendChild(pTag2);

  switch (player.role.toLowerCase()) {
    case "goalkeeper":
      playerField.style.backgroundColor = GoalKeeperColor;
      break;
    case "sweeper":
      playerField.style.backgroundColor = SweeperColor;
      break;
    case "defender":
      playerField.style.backgroundColor = DefenderColor;
      break;
    case "midfielder":
      playerField.style.backgroundColor = MidfieldersColor;
      break;
    case "attacker":
      playerField.style.backgroundColor = AttackerColor;
      break;
  }
}

/**
 * Takes cardNumber and saves cardId
 * @param {int} cardNumber
 * @author Jackie & Christoffer
 */

async function findButtonSelected(cardNumber) {
  await createSearchList();
  selectedCard = "playerNameCard" + cardNumber;
  selectedPlayerField = "p" + cardNumber;
  selectedNumber = cardNumber;
}
