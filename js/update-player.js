const playerUrl = baseUrl + updateUrl + "player/";
let updateForm;

/**
 * Creating updateForm
 * @author Jens, Jackie & Jakob
 */
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
  const url = playerUrl + player.playerId;

  const jsonString = JSON.stringify(player);

  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: jsonString,
  };
  //calls API (Backend) and wait for return
  const response = await fetch(url, fetchOptions);

  if (!response) {
    alert("Something went wrong");
  } else {
    if (response.ok) {
      alert(player.firstName + " is updated");
    } else {
      alert("Something went wrong\nERROR status: " + response.status);
    }
  }
  return response;
}
/**
 * Tage player by id and sets value
 * @param {int} value
 * @returns {Promise<void>}
 * @author Jens, Jackie & Jakob
 */
async function selectedPlayerById(value) {
  let player = await getPlayerById(parseInt(value));
  let editId = document.getElementById("editId");
  let firstNameEdit = document.getElementById("firstNameEdit");
  let lastNameEdit = document.getElementById("lastNameEdit");
  let roleEdit = document.getElementById("roleEdit");
  editId.value = player.playerId;
  firstNameEdit.value = player.firstName;
  lastNameEdit.value = player.lastName;
  roleEdit.value = player.role;
  createFormEventListener();
}

/**
 * Takes player info and sent it to updatePlayer
 * @param {Object} event
 * @returns {Promise<void>}
 * @author Jens, Jackie & Jakob
 */
async function updateButton(event) {
  event.preventDefault();
  const form = event.currentTarget;

  try {
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    await updatePlayer(plainFormData);
    selectedPlayerCard(plainFormData);
  } catch (err) {}
}
