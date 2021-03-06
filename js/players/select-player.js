let allPlayers = [];
const findPlayerNav = document.getElementById("findPlayerNav");

findPlayerNav.addEventListener("click", createSearchList);

/**
 * create Player Map from list of players
 *  @author Vitaliy
 */

async function createPlayerMap() {
  allPlayers = await getAllPlayers();

  // sorting our array with players by firstname
  allPlayers.sort((a, b) => a.firstName.localeCompare(b.firstName));
}

/**
 * create search list of players in view
 *  @author Vitaliy & Jakob & Jackie & Christoffer
 */

async function createSearchList() {
  await createPlayerMap();
  let searchList = document.getElementById("selectPlayer");

  //Remove all children
  while (searchList.hasChildNodes()) {
    searchList.removeChild(searchList.lastChild);
  }

  //Generate new buttons (Children)
  allPlayers.forEach((player) => {
    let li = document.createElement("li");
    li.classList.add("player-list-tile");
    let button = document.createElement("button");
    button.type = "button";
    button.innerText +=
      player.firstName + "  " + player.lastName + "  |  " + player.role;
    button.onclick = function () {
      selectedPlayerCard(player);
      selectedPlayerCardField(player);
    };
    button.classList.add("list-group-item", "list-group-item-action");
    button.setAttribute("data-bs-dismiss", "modal");
    li.appendChild(button);
    searchList.appendChild(li);
  });
}

/**
 * search Player by firstname, lastname and role
 *  @author Vitaliy, Jakob, Jackie
 */

function searchPlayers() {
  let input, filter, ul, li, button, i, txtValue;
  input = document.getElementById("searchPlayer");
  filter = input.value.toUpperCase();
  ul = document.getElementById("selectPlayer");
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
