//submit form
// for menu
const sidemenu = document.getElementById("sidemenu");
// --------------------
const tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// -----------------open & close menu X,=
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
//-------------------form submition
// document.getElementById('myForm').addEventListener('submit', function (event) {
//   event.preventDefault();
//   document.getElementById('successMessage').style.display = 'block';
//   document.getElementById('myForm').reset();
// });





