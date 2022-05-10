// Update player
out("Update player");

let playerUrl = baseUrl + updateUrl + 'player/';

/**
 * get all players from DB
 * filter to one player by id, make to a JSON
 * @param player
 * @returns {Promise<Response>} update one player
 * @ atu
 */
async function updatePlayer(player) {
    out('player - ' + player);
    playerUrl = playerUrl + player.playerId;
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
            alert(player.firstName + ' is updated');
        } else {
            alert('Something went wrong\nERROR status: ' + response.status);
        }

    }
    return response;
}// Update player end

/**
 * Test in console testUpdate(3);
 * @param index
 * @returns {Promise<void>}
 */
async function testUpdate(index) {
    let playerlist = [];
    await getAllPlayers();
    //players[index].firstName = 'Jens';
    out('players - ' + players[index].isSelected);
    players[index].isSelected = 1;
    out('players - ' + players[index].isSelected);

    await updatePlayer(players[index]);
}
