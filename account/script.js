let firstname = localStorage.getItem("firstname");
let lastname = localStorage.getItem("lastname");

document.getElementById("name").textContent = firstname + " " + lastname;

function submit(params) {
  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");

  const firstnameValue = firstnameInput.value;
  const lastnameValue = lastnameInput.value;

  localStorage.setItem("firstname", firstnameValue);
  localStorage.setItem("lastname", lastnameValue);
}
