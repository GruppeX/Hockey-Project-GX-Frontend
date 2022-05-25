const findPlayerNavDelete = document.getElementById("deletePlayerNav");
findPlayerNavDelete.addEventListener("click", createSearchListDelete);



async function createSearchListDelete() {
    await createPlayerMap();
    out(playerMap + " TJEK HER")
    let playerList = document.getElementById("deleteSelectPlayer");
    playerMap.forEach((player) => {
        let li = document.createElement("li");
        li.classList.add("player-list-tile");
        let button = document.createElement("button");
        button.type = "button";
        button.innerText +=
            player.firstName + "  " + player.lastName + "  |  " + player.role;
        button.onclick = function () {
            /*selectedPlayer(player);  */       // deletePlayer
        };
        button.classList.add("list-group-item", "list-group-item-action");
        button.setAttribute("data-bs-dismiss", "modal");
        li.appendChild(button);
        playerList.appendChild(li);
    });
}

function searchPlayersDelete() {
    let input, filter, ul, li, button, i, txtValue;
    input = document.getElementById("deleteSearchPlayer");
    filter = input.value.toUpperCase();
    ul = document.getElementById("deleteSelectPlayer");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        button = li[i].getElementsByTagName("button")[0];
        txtValue = button.textContent || button.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
