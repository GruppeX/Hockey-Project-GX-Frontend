let selectedCard;

/**
 * Adds firstname and lastname on specific playerCard from given player object
 * @param {Object} player
 * @author Jackie & Christoffer
 */

function selectedPlayer(player) {
  document.getElementById(selectedCard).innerText =
    player.firstName + " " + player.lastName;
}

/**
 * Takes cardNumber and saves cardId
 * @param {int} cardNumber
 * @author Jackie & Christoffer
 */

function findButtonSelected(cardNumber) {
  selectedCard = "playerNameCard" + cardNumber;
}
