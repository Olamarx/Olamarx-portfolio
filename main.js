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







// Pop up onjects
const popUpSection = document.querySelector('.pop-up-section')
const seeProjectBtn = document.querySelector('.see-pro')


// create html tags

const popupContent = {
  'headerMobile': 'Multi Post Stories',
  'headerDesktop': 'Keeping track of hundreds  of components website',
  'closeIcon': './images/times.svg',
  'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    'timeFont': "./images/times.svg",
  'featuredImage': './images/popupImg.svg',
  'liveVersion': '#',
  'sourceLink': '#',
  'buttons': {
    'html': 'HTML',
    'bootstrap': 'Bootstrap',
    'ruby': 'Ruby on rails'
  }
}

 // 




const div2Popup = document.createElement('div')
div2Popup.classList.add('pop-up-header-times')

const popHeaderH3 = document.createElement('h3')
popHeaderH3.classList.add('pop-header-h3')

const popCloseIcon = document.createElement('img')
popCloseIcon.classList.add('pop-close-icon')

const popButtonForThree = document.createElement('ul')
popButtonForThree.classList.add('html-bootstrap-ruby-on-rails')

const listBtn = document.createElement('li')
popButtonForThree.classList.add('list-btn')

const listBtnAlink = document.createElement('a')
listBtnAlink.classList.add('list-btn-a-link')

const thelistedBtns = document.createElement('button')
thelistedBtns.classList.add('the-listed-btns')

const popupImageAndContentContainer = document.createElement('div') //div container of image and content which i nwill flex
popupImageAndContentContainer.classList.add('popup-image-and-content-container')

const popupImageContainer = document.createElement('div')
popupImageContainer.classList.add('popup-image-container')

const popupImage = document.createElement('img')
popupImage.classList.add('popup-image')

const popupContentDescriptionAndButtons = document.createElement('div')
popupContentDescriptionAndButtons.classList.add('popup-content-description-and-buttons')

const popupContentDescription = document.createElement('h5')
popupContentDescription.classList.add('popup-content-description')

const seeLiveAndSourceBtns = document.createElement('div')
seeLiveAndSourceBtns.classList.add('see-live-and-source-btns')

const seeLiveAndSourceBtnsAlink = document.createElement('a')
listBtnAlink.classList.add('list-btn-a-link-a-link')

const buttonForLive = document.createElement('button')
buttonForLive.classList.add('button-for-live')

const faFontLive = document.createElement('i')
faFontLive.classList.add('fas', 'fa-solid', 'fa-chart-line')

const buttonForGithub = document.createElement('button')
buttonForLive.classList.add('button-for-github')

const faFontGithub = document.createElement('i')
faFontGithub.classList.add('fas', 'fa-brands', 'fa-github')





// function popUp() {


// function headerAndCloseIcon() {
// let firstAppend = popUpSection.appendChild(div1Popup)
// }
// }

seeProjectBtn.addEventListener('click', function() {
  const div1Popup = document.createElement('div');


  // ${popupContent['headerMobile']}


  div1Popup.innerHTML =`<div>
  <div class="pop-up-header-times">
  <h3 class="pop-header-h3"> ${popupContent['headerMobile']} </h3>
  <h3 class="pop-header-h3-desktop"> ${popupContent['headerDesktop']} </h3>
  <img class="popup-close-barr" src="${popupContent['timeFont']}" alt="close-bar">
</div>

<ul class="html-bootstrap-ruby-on-rails">
<li class="list-btn"><a href=""><button class="the-listed-btns"> ${popupContent.buttons.html} </button> </a></li>
<li class="list-btn">    <a href=""><button class="the-listed-btns"> ${popupContent.buttons.bootstrap} </button> </a> </li>
<li class="list-btn">     <a href=""><button class="the-listed-btns"> ${popupContent.buttons.ruby} </button> </a>   </li>
</ul>
<div class="popup-container">
<div class="popup-image-and-content-container">
<div class="popup-image-container">
<img src="${popupContent.featuredImage}" alt="Image">
</div>

<div class="popup-content-description-and-buttons">

<h5 class="popup-content-description">

</h5>

<div class="see-live-and-source-btns">
<a href="">  <button>   </button>  </a>
<a href="">  <button>   </button>  </a>
</div>


<i class="fas fa-brands fa-github"></i>
<i class="fas fa-solid fa-chart-line"></i>
</div>
</div>

</div>
</div>
  
  
  
  
  
  
  </div>`

  div1Popup.classList.add('pop-up-header-times-button');

popUpSection.appendChild(div1Popup);

});