
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

<<<<<<< HEAD
hamburgerlink.addEventListener('click', showmenu)
=======
hamburgerlink.addEventListener('click', showmenu)
>>>>>>> 28fd8824be0b5b43358481337862e7b7decd8150
