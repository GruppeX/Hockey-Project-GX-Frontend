let selectedPlayerField;
let selectedCardName;
let color;
let styleColor;

/**
 * Adds firstname and lastname on specific playerCard from given player object
 * @param {Object} player
 * @author Jackie & Christoffer & Vitaliy
 */

function selectedPlayerCard(player) {

    document.getElementById(selectedCardName).innerText =
        player.firstName + " " + player.lastName;
    const selectedCard = document.getElementById('card' + selectedCardName.replace(/[^0-9]/g, ""));
    const cardBorderThickness = '5px solid';
    styleColor = returnColor(player);
    selectedCard.style.border = cardBorderThickness + styleColor;
}

/**
 * Adds firstname, lastname and role on specific playerCardField from given player object
 * @param {Object} player
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
    styleColor = returnColor(player);
    playerField.style.backgroundColor = color;
}

/**
 * Takes player and returns color by players role
 * @param {Object} player
 * @return {string} color
 * @author Jackie & Christoffer & Vitaliy
 */

function returnColor(player) {
    switch (player.role.toLowerCase()) {
        case "goalkeeper":
            color = GoalKeeperColor;
            break;
        case "sweeper":
            color = SweeperColor;
            break;
        case "defender":
            color = DefenderColor;
            break;
        case "midfielder":
            color = MidfieldersColor;
            break;
        case "attacker":
            color = AttackerColor;
            break;
    }
    return color;
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