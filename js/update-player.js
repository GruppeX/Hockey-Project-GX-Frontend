// Update player
out("Update player");

let playerUrl = baseUrl + updateUrl + 'update/';

async function udatePlayer(player) {
    out(player);
    playerUrl = playerUrl + player;
    out(playerUrl);

    const jsonString = JSON.stringify(player);

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonString
    }
    //calls API (Backend) and wait for return
    const response = await fetch(playerUrl, fetchOptions);

    out(response)
    if (!response) {
        alert('Something went wrong')
        out("Det gik ikke godt med update");
    } else {
        if (response.ok) {
            alert(player.playerTitle + ' is updated');
        } else {
            alert('Something went wrong\nERROR status: ' + response.status);
        }

    }
    return response;
}// Update player end




























//
// private int playerId;
//
// private String firstName;
//
// private String lastName;
//
// private String role;
//
// private Position position;
//
// private boolean isSelected;

// find play and show play
const playerMap = new Map();
const playerTable = document.getElementById("playerTable");
const modalBox = document.getElementById("myModal");
const spanClose = document.getElementsByClassName("close")[0];

const inpPlayerId = document.getElementById('playerId');
const inpFirstName = document.getElementById('firstName');
const inpLastName = document.getElementById('lastName');
const inpRole = document.getElementById('role');
const inpPosition = document.getElementById('position');
const inpIsSelected = document.getElementById('isSelected');
const pbSubmitUpdate = document.getElementById('submitUpdate');

document.addEventListener('DOMContentLoaded', playerTableFromMap);

function fetchAllPlayeres() {
    out("get all playeres kaldt");
    return fetch(player).then(response => response.json());
}

window.onclick = function (event) {
    if (event.target == modalBox) {
        modalBox.style.display = "none";
    }
}

async function playerPlayerMap() {
    out("show all playeres");
    const playerList = await fetchAllPlayeres();
    out(playerList);
    playerList.forEach((player) => {
        playerMap.set(player.playerId, player);
    })
}

function addRow(player){

    const rowPlayer = playerTable.rows.length;
    let row = playerTable.inserRow(rowPlayer);
    let colPlayer = 0;

    let cell = row.insertCell(colPlayer++);
    cell.innerText = WWWWWWWWaAAAAAAZZZZZZZZZZZZZZZZZZZZZZZZZZZ

}
















