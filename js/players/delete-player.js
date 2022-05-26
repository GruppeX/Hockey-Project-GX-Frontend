const findPlayerNavDelete = document.getElementById("deletePlayerNav");
findPlayerNavDelete.addEventListener("click", createSearchListDelete);


async function createSearchListDelete() {
    await createPlayerMap();
    let playerList = document.getElementById("deleteSelectPlayer");
    //Remove all children
    while (playerList.hasChildNodes()) {
        playerList.removeChild(playerList.lastChild);
    }
    allPlayers.forEach((player) => {
        let li = document.createElement("li");
        li.classList.add("player-list-tile");
        let button = document.createElement("button");
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#areYouSureBox');
        button.type = "button";
        button.innerText +=
            player.firstName + "  " + player.lastName + "  |  " + player.role;
        button.onclick = () => confirmDelete(player);
        button.classList.add("list-group-item", "list-group-item-action", "btn");
        li.appendChild(button);
        playerList.appendChild(li);
    });
}

function confirmDelete(player) {
    let AYSText = document.getElementById('areYouSureText');
    AYSText.innerText = "Are you sure you want to delete " + player.firstName + " " + player.lastName + "?" ;
    let deleteConfirm = document.getElementById('deleteConfirm');
    deleteConfirm.addEventListener('click', async () => await deletePlayer(player));
    let deleteNotConfirm = document.getElementById('deleteNotConfirm');
    deleteNotConfirm.addEventListener('click', () => player = null);
}

function searchPlayersDelete() { //TO DO: make one shared searchPlayers method
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

/**
 * fetch starts a request and returns a promise
 * async/await syntax fits great with fetch() because it simplifies the work with promises.
 * @param {Object}player
 * @returns {Promise<Response>}
 */


async function deletePlayer(player) {
    out("player - " + player);
    const url = baseUrl + deleteUrl + "player/" + player.playerId;
    out(url);


    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    };
    //calls API (Backend) and wait for return
    const response = await fetch(url, fetchOptions);
    if (!response) {
        alert("Something went wrong with delete json");
    } else {
        alert(player.firstName + " " + player.lastName + " is deleted");
    }
    return response;
}