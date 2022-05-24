let playerUrl = baseUrl + updateUrl + "player/";
let updateForm;

function createFormEventListener() {
    updateForm = document.getElementById("editPlayerForm");
    updateForm.addEventListener("submit", updateButton);
}

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
    let editId = document.getElementById("editId");
    let firstNameEdit = document.getElementById("firstNameEdit");
    let lastNameEdit = document.getElementById("lastNameEdit");
    let roleEdit = document.getElementById("roleEdit");
    editId.value = player.playerId;
    firstNameEdit.value = player.firstName;
    lastNameEdit.value = player.lastName;
    roleEdit.value = player.role;
    out(player.playerId);
    createFormEventListener();
}

async function updateButton(event) {
    event.preventDefault();
    const form = event.currentTarget;
    out(form);
    try {
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        out(plainFormData);
        await updatePlayer(plainFormData);
        out(plainFormData.playerId);

        selectedPlayer(plainFormData);

    } catch (err) {

    }
    //findButtonSelected(plainFormData[0]);
}
