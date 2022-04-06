const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const sidebar = document.querySelector('.sidebar');
const addToListing = document.querySelector('.ul-listing');
const navItems = document.querySelectorAll('.navitem-sidebar');
const removeEnve = document.querySelector('.logo-portfolio-right-content-2');

menu.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  addToListing.classList.add('add-to-listing');
  removeEnve.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  addToListing.classList.toggle('ul-listing');
  addToListing.classList.toggle('add-to-listing');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });
});

const popupContent = {
  'headerMobile': 'Multi Post Stories',
  'headerDesktop': 'Keeping track of hundreds  of components website',
  'closeIcon': './images/times.svg',
  'descriptionDesktop': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  'descriptionMobile': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    'timeFont': "./images/times.svg",
  'featuredImage': './images/popupImg.svg',
  'liveVersion': 'https://olamarx.github.io/Olamarx-portfolio/',
  'sourceLink': 'https://github.com/Olamarx/Olamarx-portfolio',
  'githubfont': '<img src="./images/githubfont.svg" alt="">',
  'fontLive': '<img src="./images/livepreview.svg" alt="Live-preview">',
  
  'buttons': {
    'html': 'HTML',
    'bootstrap': 'Bootstrap',
    'ruby': 'Ruby on rails'
  }
}

const div1Popup = document.createElement('div');
div1Popup.innerHTML =`<div>
    <div class="pop-up-header-times">
    <h3 class="pop-header-h3"> ${popupContent['headerMobile']} </h3>
    <h3 class="pop-header-h3-desktop"> ${popupContent['headerDesktop']} </h3>
    <img data-close-button class="popup-close-barr" src="${popupContent['timeFont']}" alt="close-bar">
  </div>
 
  <ul class="html-bootstrap-ruby-on-rails">
  <li class="list-btn"><a href="#"><button class="the-listed-btns"> ${popupContent.buttons.html} </button> </a></li>
  <li class="list-btn">    <a href="#"><button class="the-listed-btns"> ${popupContent.buttons.bootstrap} </button> </a> </li>
  <li class="list-btn">     <a href="#"><button class="the-listed-btns"> ${popupContent.buttons.ruby} </button> </a>   </li>
  </ul>
  <div class="popup-container">
  <div class="popup-image-and-content-container">
  <div class="popup-image-container">
  <img src="${popupContent.featuredImage}" alt="Image">
  </div>
  <div class="popup-content-description-and-buttons">
  <h5 class="popup-content-description desktopviewp">
    ${popupContent.descriptionDesktop}
  </h5>

  <h5 class="popup-content-description mobileviewp">
    ${popupContent.descriptionMobile}
  </h5>
  <ul class="see-live-and-source-btns">
  <li><a href=" ${popupContent.liveVersion}"> <button class="link-list-btn"> See Live ${popupContent.fontLive} </button> </a></li>
  <li><a href=" ${popupContent.sourceLink}">  <button class="link-list-btn"> See Source ${popupContent.githubfont}  </button>  </a></li>
  </ul> </div>  </div>  </div>  </div>  </div>`


const openBtn = document.querySelectorAll('[data-modal-target]');
const popUpSection = document.querySelector('.pop-up-section');
let closeBtn;

openBtn.forEach(button => {
  button.addEventListener('click', () => {
    popUpSection.innerHTML = '';
    popUpSection.appendChild(div1Popup);
    popUpSection.classList.add('active');
    closeBtn = document.querySelector('.pop-up-section .popup-close-barr');
    closeBtn.addEventListener('click', () => {
      popUpSection.classList.remove('active');
    });
  });
});