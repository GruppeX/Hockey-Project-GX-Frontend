const url = baseUrl + "admin/";

let loginForm;

document.addEventListener("DOMContentLoaded", createLoginFormEventListener);

//add eventListener to html form
function createLoginFormEventListener() {
  loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", handleLoginSubmit);
}

//handle form submit and return response with the result
async function handleLoginSubmit(event) {
  //prevent Default prevents from performing default form submit (send itself to the backend)
  event.preventDefault();
  const form = event.currentTarget;
  let userFromDb;
  let userFromForm;
  try {
    const formData = new FormData(form);
    userFromForm = Object.fromEntries(formData.entries());
    out(userFromForm);
    let finalUrl = url + "?username=" + userFromForm.username;
    try {
      userFromDb = await getUser(finalUrl);
    } catch (err) {
      alert("Wrong username");
    }
  } catch (err) {
    alert("Something went wrong " + err.message);
    out(err);
  }

  if (userFromDb.length > 0) {
    if (userFromDb[0].username === userFromForm.username) {
      if (userFromDb[0].password === userFromForm.password) {
        loginForm.reset();
        //Change page
        window.open("../index.html", "_self");
      } else {
        alert("Wrong password");
      }
    }
  } else {
    alert("Wrong username or password");
  }
}

async function getUser(url) {
  return await fetch(url).then((response) => response.json());
}
