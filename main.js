const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');
// const righthandOfLogo = document.querySelector('.righthand-of-logo');
const addToListing = document.querySelector('.ul-listing');

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  addToListing.classList.add('add-to-listing');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
