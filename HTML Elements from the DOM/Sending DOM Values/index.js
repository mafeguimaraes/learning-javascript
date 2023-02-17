function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("User " + username + " is now resgiter!");
  } else {
    alert("Passwords do not match");
  }
}
