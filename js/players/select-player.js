out("We are in select player now")

document.addEventListener('DOMContentLoaded', createListFromMap);


const playerMap = new Map();

 async function createPlayerMap() {
     out('shoe all players');
    const playerList = await getAllPlayers();
    // sorting our array with players by firstname
     playerList.sort((a, b) => a.firstName.localeCompare(b.firstName));
    
   out(playerList);
      playerList.forEach((player) => {
        playerMap.set(player.playerId, player);
    })
      out(playerMap);
}


async function createListFromMap() {
     await createPlayerMap();
    out("create list of elements");
    let playerList = document.getElementById('selectPlayer');
      playerMap.forEach(player => {
          let li = document.createElement('li');
        
        let button = document.createElement('button');
        button.type = 'button';
        button.innerText += player.firstName + '  ' + player.lastName + '  |  ' + player.role;
        button.classList.add('list-group-item', 'list-group-item-action');
        li.appendChild(button);
        playerList.appendChild(li);
        out(player);
      });
      
}


function searchPlayers() {
    let input, filter, ul, li, button, i, txtValue;
    input = document.getElementById("searchPlayer");
    filter = input.value.toUpperCase();
    ul = document.getElementById("selectPlayer");
    li = ul.getElementsByTagName("li");
    out(li.length);
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
