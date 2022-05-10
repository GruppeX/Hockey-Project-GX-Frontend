let deletePlayerUrl = baseUrl + deleteUrl + 'player/';

async function deletePlayer(id) {
    deletePlayerUrl = deletePlayerUrl + id;
    out(deletePlayerUrl);

    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }
    //calls API (Backend) and wait for return
    const response = await fetch(deletePlayerUrl, fetchOptions);
    if (!response) {
        alert('Something went wrong with delete json');
    } else {
        alert('Player is deleted');
    }
    return response;
}


