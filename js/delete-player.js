let deletePlayerUrl = baseUrl + deleteUrl + "player/";

/**
 * fetch starts a request and returns a promise
 * async/await syntax fits great with fetch() because it simplifies the work with promises.
 * @param id
 * @returns {Promise<Response>}
 */

async function deletePlayer(id) {
  deletePlayerUrl = deletePlayerUrl + id;
  out(deletePlayerUrl);

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };
  //calls API (Backend) and wait for return
  const response = await fetch(deletePlayerUrl, fetchOptions);
  if (!response) {
    alert("Something went wrong with delete json");
  } else {
    alert("Player is deleted");
  }
  return response;
}
