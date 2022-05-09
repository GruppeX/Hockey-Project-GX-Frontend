out("Update player");

let url = baseUrl + updateUrl + 'update/';

async function udatePlayer(player){
    out(player);
    url = url + player;
    out(url);

    const jsonString = JSON.stringify(player);

    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonString
    }
}
