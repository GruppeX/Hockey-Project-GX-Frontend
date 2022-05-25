let selectedPlayerField;
let selectedCardName;

/**
 * Adds firstname and lastname on specific playerCard from given player object
 * @param {Object} player
 * @author Jackie & Christoffer & Vitaliy
 */

function selectedPlayerCard(player) {

    document.getElementById(selectedCardName).innerText =
        player.firstName + " " + player.lastName;
}

/**
 * Adds firstname, lastname and role on specific playerCardField from given player object
 * @param {Object} player
 * @return {Object} playerField
 * @author Jackie & Christoffer & Vitaliy
 */

function selectedPlayerCardField(player) {
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
    return playerField;
}

/**
 * Takes player and makes style on playerCard and playerCardField
 * @param {Oblect} player
 * @author Jackie & Christoffer & Vitaliy
 */

async function makeStylePlayerCards(player) {
    const cardBorderThickness = '5px solid';
    const selectedCard = document.getElementById('card' + selectedCardName.replace(/[^0-9]/g, ""));
    const playerField = await selectedPlayerCardField(player);
   
    switch (player.role.toLowerCase()) {
        case "goalkeeper":
            selectedCard.style.border = cardBorderThickness + GoalKeeperColor;
            playerField.style.backgroundColor = GoalKeeperColor;
            break;
        case "sweeper":
            selectedCard.style.border = cardBorderThickness + SweeperColor;
            playerField.style.backgroundColor = SweeperColor;
            break;
        case "defender":
            selectedCard.style.border = cardBorderThickness + DefenderColor;
            playerField.style.backgroundColor = DefenderColor;
            break;
        case "midfielder":
            selectedCard.style.border = cardBorderThickness + MidfieldersColor;
            playerField.style.backgroundColor = MidfieldersColor;
            break;
        case "attacker":
            selectedCard.style.border = cardBorderThickness + AttackerColor;
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
    selectedCardName = "playerNameCard" + cardNumber;
    selectedPlayerField = "p" + cardNumber;
}