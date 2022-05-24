let playerUrl = baseUrl + updateUrl + "player/";

/**
 * get all players from DB
 * filter to one player by id, make to a JSON
 * @param player
 * @returns {Promise<Response>} update one player
 * @author Jens, Jackie & Jakob
 */

async function updatePlayer(player) {
    out("player - " + player);
    playerUrl = playerUrl + player.playerId;
    out(playerUrl);

    const jsonString = JSON.stringify(player);

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: jsonString,
    };
    //calls API (Backend) and wait for return
    const response = await fetch(playerUrl, fetchOptions);

    out(response);
    if (!response) {
        alert("Something went wrong");
        out("Det gik ikke godt med update");
    } else {
        if (response.ok) {
            alert(player.firstName + " is updated");
        } else {
            alert("Something went wrong\nERROR status: " + response.status);
        }
    }
    return response;
} // Update player end


async function selectedPlayerById(value) {
    out(value + "value");
    let player = await getPlayerById(parseInt(value));
    out(player);
    let firstNameEdit = document.getElementById("firstNameEdit");
    let lastNameEdit = document.getElementById("lastNameEdit");
    let roleEdit = document.getElementById("roleEdit");
    firstNameEdit.value = player.firstName;
    lastNameEdit.value = player.lastName;
    roleEdit.value = player.role;

}

function updateButton() {
    let form = document.getElementById("editPlayerForm");
    let fromdata = JSON.stringify(form);
    out(fromdata);


}
