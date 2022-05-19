let selectedCard;
let selectedPlayerField;

/**
 * Adds firstname and lastname on specific playerCard from given player object
 * @param {Object} player
 * @author Jackie & Christoffer
 */

function selectedPlayer(player) {
  document.getElementById(selectedCard).innerText =
    player.firstName + " " + player.lastName;
  const playerField = document.getElementById(selectedPlayerField);
  playerField.innerText = player.firstName.charAt(0).toUpperCase() + " " + player.lastName.charAt(0).toUpperCase();
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
}
