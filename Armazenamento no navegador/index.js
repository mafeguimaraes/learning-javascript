// Armazanando com Session Storage

document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

// Armazenando com Local Storage
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("info2", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const info2 = localStorage.getItem("info2");
  alert("A informação salva é: " + info2);
});

// Armazenando com Cookies

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // Como funciona --> cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 2, 3) + ";";
  const path = "path/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 2, 3) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
