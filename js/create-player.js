out('er i create player');

//generate api from config file
const url = baseUrl + createUrl + 'player';

//execute function createFormEventListener when html is loaded
document.addEventListener('DOMContentLoaded', createFormEventListener);

let playerForm;

//add eventlistener to html form
function createFormEventListener() {
    playerForm = document.getElementById('newPlayerForm');
    playerForm.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(event) {
    //preventDefault forhindrer form i at udføre default submit. altås sende sig selv til backend.
    event.preventDefault();
    const form = event.currentTarget;
    out(url);
    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson(url, formData);
        out(responseData);
        alert(formData.get('firstName') + ' ' +  formData.get('lastName') + ' er oprettet');
        playerForm.reset();

    } catch (err) {
        alert("Something wrong here" +  err.message);
        out(err);
    }
}

async function postFormDataAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries());
    out(plainFormData);


    const fetchOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: plainFormData
    };

    const response = await fetch(url, fetchOptions);
    if (!response) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}
