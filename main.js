const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');
// const righthandOfLogo = document.querySelector('.righthand-of-logo');
const addToListing = document.querySelector('.ul-listing');
const removeEnve = document.querySelector('.logo-portfolio-right-content-2')

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  addToListing.classList.add('add-to-listing');
  removeEnve.style.display = 'none';


});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  addToListing.classList.remove('ul-listing')
  addToListing.classList.remove('add-to-listing')
});
