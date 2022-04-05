const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');
// const righthandOfLogo = document.querySelector('.righthand-of-logo');
const addToListing = document.querySelector('.ul-listing');
const hideUnion = document.querySelector('.logo-portfolio-right-content-2')
const toggle = document.querySelector('.sidebar-none')
const hamburger = document.querySelector('.hamburger')
// const portfolio = document.getElementById('portfolio')
const menuItem = document.querySelectorAll('.portfolio')

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  addToListing.classList.add('add-to-listing');
  hideUnion.style.display = 'none'
});


menuItem.addEventListener('click', function() {
    closeMenu.style.display = 'none'
    sidebar.style.display = 'none'
})

// function goToLink() {
//     if(menuItem.addEventListener('click')){
//         sidebar.style.display = 'none'
//     } 
// }

// portfolio.addEventListener('click', goToLink)

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

