const playerNameCardMap = new Map([["findPlayerOnCard1", 'playerNameCard1'], ["findPlayerOnCard2", 'playerNameCard2'],
    ["findPlayerOnCard3", 'playerNameCard3'], ["findPlayerOnCard4", 'playerNameCard4'], ["findPlayerOnCard5", 'playerNameCard5'],
    ["findPlayerOnCard6", 'playerNameCard6'], ["findPlayerOnCard7", 'playerNameCard7'], ["findPlayerOnCard8", 'playerNameCard8'],
    ["findPlayerOnCard9", 'playerNameCard9'], ["findPlayerOnCard10", 'playerNameCard10'], ["findPlayerOnCard11", 'playerNameCard11']]);
let selectedCard;

function selectedPlayer(player) {
    document.getElementById(selectedCard).innerText = player.firstName + " " + player.lastName;

}

function findButtonSelected(cardNumber) {
    selectedCard = playerNameCardMap.get("findPlayerOnCard" + cardNumber);
    out(selectedCard);
}
