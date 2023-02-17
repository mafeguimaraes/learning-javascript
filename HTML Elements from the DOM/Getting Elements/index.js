function show() {
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  const contacts = document.querySelectorAll("#contact-list > li > label"); // id = contact-list --> li --> label
  console.log(contacts);

  const contact2 = document.getElementsByName("contact2");
  console.log(contact2);

  const firstContact = document.querySelector("#contact-list > li > label"); // just the first element
  console.log(firstContact);
}
