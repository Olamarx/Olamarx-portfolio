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
  headerMobile: 'Multi Post Stories',
  headerDesktop: 'Keeping track of hundreds  of components website',
  closeIcon: './images/times.svg',
  descriptionDesktop: "",
  descriptionMobile: "",
  timeFont: '',
  featuredImage: './images/popupImg.svg',
  liveVersion: '',
  sourceLink: '',
  githubfont: '',
  fontLive: '">',

  buttons: {
    html: '',
    bootstrap: '',
    ruby: '',
  },
};


const projects = [{
  name: "Multi Post Stories",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: "./images/times.svg",
  technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  link: "https://github.com/Olamarx/Olamarx-portfolio",
},


{
  name: "Keeping track of hundreds  of components website",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: "./images/times.svg",
  technologies: ["HTML", "Bootstrap", "Ruby on rails"],
  link: "https://olamarx.github.io/Olamarx-portfolio/",
}
]



for (let i = 0; i<projects.length; i++) {
  const div1Popup = document.createElement('div');
  div1Popup.innerHTML = `<div>
      <div class="pop-up-header-times">
      <h3 class="pop-header-h3"> ${projects[i].name} </h3>
      <h3 class="pop-header-h3-desktop"> ${projects[i].description} </h3>
      <img data-close-button class="popup-close-barr" src="" alt="close-bar">
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
    <li><a href=" ${popupContent.liveVersion}"> <button class="link-list-btn"> See Live <img src="./images/livepreview.svg" alt="Live-preview"> </button> </a></li>
    <li><a href=" ${popupContent.sourceLink}">  <button class="link-list-btn"> See Source <img src="./images/githubfont.svg" alt="Github">  </button>  </a></li>
    </ul> </div>  </div>  </div>  </div>  </div>`;



    const openBtn = document.querySelectorAll('[data-modal-target]');
const popUpSection = document.querySelector('.pop-up-section');
let closeBtn;

openBtn.forEach((button) => {
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
}


