out("We are in select player now")



const playerMap = new Map();

 async function createPlayerMap() {
     out('shoe all players');
    const playerList = await getAllPlayers();
   out(playerList);
      playerList.forEach((player) => {
        playerMap.set(player.playerId, player);
    })
      out(playerMap);
}




function fillPlayers() {


    for (const playerKey of playerMap.keys()) {
        const el = document.createElement("option");
        el.textContent = playerKey;
        el.value = playerMap.get(playerKey); //important value follows the key.
        ddPlayer.appendChild(el);
    }
}

const ddPlayer = document.getElementById('ddPlayers');
const pbFillDropDown = document.getElementById('pbFillDropDown');



pbFillDropDown.addEventListener('click', fillPlayers);
