<<<<<<< HEAD
const popupcontainer = document.querySelector('#popupmenu-container')

const hamburgerlink = document.querySelector('#hamburger-link')

const closemenulink = document.querySelector('#link-closemenu')

const linkall = document.querySelectorAll('.navigation-links')

function showmenu () {
  popupcontainer.classList.toggle('popupmenu-container')
}

function closeMenu () {
  popupcontainer.classList.remove('popupmenu-container')
}
function respondlink (link) {
  link.addEventListener('click', closeMenu)
}

closemenulink.addEventListener('click', closeMenu)

linkall.forEach(respondlink)

hamburgerlink.addEventListener('click', showmenu)
=======
const popupcontainer = document.querySelector("#popupmenu-container");
const hamburgerlink = document.querySelector("#hamburger-link");
const closemenulink = document.querySelector("#link-closemenu");
const linkall = document.querySelectorAll(".navigation-links");

linkall.forEach(respondlink);

hamburgerlink.addEventListener("click", showmenu);
closemenulink.addEventListener("click", closeMenu);

function showmenu() {
  popupcontainer.classList.toggle("popupmenu-container");
}
function respondlink(link) {
  link.addEventListener("click", closeMenu);
}

function closeMenu() {
  popupcontainer.classList.remove("popupmenu-container");
}
>>>>>>> 1eb8a3a (Add Javascript functionality to popup menu)
