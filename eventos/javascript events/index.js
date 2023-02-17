function register(ev) {
  console.log(ev);

  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("User " + username + " is now resgiter!");
  } else {
    alert("Passwords do not match");
  }
}

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Event Removed");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

button.addEventListener("mouseover", function (ev) {
  console.log(ev);
});
