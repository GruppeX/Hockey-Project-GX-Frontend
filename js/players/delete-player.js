const playerMapDelete = new Map();
const findPlayerNavDelete = document.getElementById("deletePlayerNav");

findPlayerNavDelete.addEventListener("click", createSearchListDelete);

async function createPlayerMapDelete() {
    const playerList = await getAllPlayers();
    out(playerList)
    // sorting our array with players by firstname
    playerList.sort((a, b) => a.firstName.localeCompare(b.firstName));

    playerList.forEach((player) => {
        playerMapDelete.set(player.playerId, player);
    });
}


async function createSearchListDelete() {
    await createPlayerMapDelete();
    out(playerMapDelete + " TJEK HER")
    let playerList = document.getElementById("deleteSelectPlayer");
    playerMapDelete.forEach((player) => {
        let li = document.createElement("li");
        li.classList.add("player-list-tile");
        let button = document.createElement("button");
        button.type = "button";
        button.innerText +=
            player.firstName + "  " + player.lastName + "  |  " + player.role;
        button.onclick = function () {
            selectedPlayer(player);         // deletePlayer
        };
        button.classList.add("list-group-item", "list-group-item-action");
        button.setAttribute("data-bs-dismiss", "modal");
        li.appendChild(button);
        playerList.appendChild(li);
    });
}

