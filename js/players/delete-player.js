const playerMap1 = new Map();
const findPlayerNavDelete = document.getElementById("deletePlayerNav");

findPlayerNavDelete.addEventListener("click", createSearchList);




async function createSearchListDelete() {
    await createPlayerMap1();
    let playerList = document.getElementById("selectPlayer");
    playerMap1.forEach((player) => {
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

