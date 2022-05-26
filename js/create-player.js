//generate api from config file
const url = baseUrl + createUrl + "player";

// execute function createFormEventListener when html is loaded
document.addEventListener("DOMContentLoaded", createFormEventListener);

let playerForm;

/**
 * add eventListener to html form
 *  @author Vitaliy
 */

function createFormEventListener() {
  playerForm = document.getElementById("createPlayerForm");
  playerForm.addEventListener("submit", handleFormSubmit);
}

/**
 * handle form submit and return response with the result
 * @param {Object} event
 *  @author Vitaliy
 */

async function handleFormSubmit(event) {
  //prevent Default prevents from performing default form submit (send itself to the backend)
  event.preventDefault();
  const form = event.currentTarget;
  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson(url, formData);
    out(responseData);
    alert(
      formData.get("firstName") + " " + formData.get("lastName") + " is created"
    );
    playerForm.reset();
  } catch (err) {
    alert("Something went wrong here " + err.message);
    out(err);
  }
}

/**
 * post formData as JSON
 * @param {string} url
 * @param {Object} formData
 * @return {Object} response
 *  @author Vitaliy
 */

async function postFormDataAsJson(url, formData) {
  const plainFormData = Object.fromEntries(formData.entries());
  out(plainFormData);
  const formDataJsonString = JSON.stringify(plainFormData);
  out(formDataJsonString);

  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);
  if (!response) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response;
}
