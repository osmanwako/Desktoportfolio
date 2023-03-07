<<<<<<< HEAD
<<<<<<< HEAD
const popupcontainer = document.querySelector('#popupmenu-container')

const hamburgerlink = document.querySelector('#hamburger-link');

const closemenulink = document.querySelector('#link-closemenu');

const linkall = document.querySelectorAll('.navigation-links');

function showmenu() {
  popupcontainer.classList.toggle('popupmenu-container');
}

function closeMenu() {
  popupcontainer.classList.remove('popupmenu-container');
}
function respondlink(link) {
  link.addEventListener('click', closeMenu);
}

closemenulink.addEventListener('click', closeMenu);

linkall.forEach(respondlink)

hamburgerlink.addEventListener('click', showmenu)
=======
const popupcontainer = document.querySelector("#popupmenu-container");
const hamburgerlink = document.querySelector("#hamburger-link");
const closemenulink = document.querySelector("#link-closemenu");
const linkall = document.querySelectorAll(".navigation-links");
=======
const popupcontainer = document.querySelector('#popupmenu-container')
>>>>>>> 774cd37 (fixed linter error)

const hamburgerlink = document.querySelector('#hamburger-link')

const closemenulink = document.querySelector('#link-closemenu')

const linkall = document.querySelectorAll('.navigation-links')

function showmenu () {
  popupcontainer.classList.toggle('popupmenu-container')
}

function closeMenu () {
  popupcontainer.classList.remove('popupmenu-container')
}
<<<<<<< HEAD
>>>>>>> 1eb8a3a (Add Javascript functionality to popup menu)
=======
function respondlink (link) {
  link.addEventListener('click', closeMenu)
}

closemenulink.addEventListener('click', closeMenu)

linkall.forEach(respondlink)

hamburgerlink.addEventListener('click', showmenu)

>>>>>>> 774cd37 (fixed linter error)
