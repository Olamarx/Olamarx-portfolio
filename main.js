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



const openBtn = document.querySelectorAll('[data-modal-target]')
const closeBtn = document.querySelector('.popup-close-barr')




openBtn.forEach(button => {
  button.addEventListener('click', () => {
    popUpSection.appendChild(div1Popup);
    blurProjects.forEach((div1Popup) => div1Popup.classList.toggle('blur'));
    document.body.classList.toggle('no-scroll');
   
    const modal = document.querySelector(button.dataset.dataTarget)

    openModal(modal)
  })
})

// closeBtn.forEach(img => {
//   img.addEventListener('click', () => {
//   popUpSection.removeChild(div1Popup);
//   console.log(div1Popup)
//   const modalCloseUp = document.querySelector(button.dataset.dataTarget)
//     const modal = img.remove(div1Popup)
//     closeModal(modal)
//     // document.body.style.background = '#fff';
//   })
// })

function openModal(modal){
  if (modal == null) return
  modal.popUpSection.appendChild(div1Popup);
}

function closeModal(modal){
  if (modal == null) return
  modal.popUpSection.removeChild(div1Popup);
  console.log(modal)

}

const popUpSection = document.querySelector('.pop-up-section')


const blurProjects = document.querySelectorAll('#portfolio > div');







// const overlay = document.getElementById('overlay')



// Pop up onjects
// const seeProjectBtn = document.querySelector('.see-pro')
// const allBtnClick = document.querySelectorAll('.a-general-class-to-pop')




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

// div1Popup.innerHTML =`<div>
//    <div class="pop-up-header-times">
//    <h3 class="pop-header-h3"> ${popupContent['headerMobile']} </h3>
//    <h3 class="pop-header-h3-desktop"> ${popupContent['headerDesktop']} </h3>
//    <img data-close-button class="popup-close-barr" src="${popupContent['timeFont']}" alt="close-bar">
//  </div>

//  <ul class="html-bootstrap-ruby-on-rails">
//  <li class="list-btn"><a href=""><button class="the-listed-btns"> ${popupContent.buttons.html} </button> </a></li>
//  <li class="list-btn">    <a href=""><button class="the-listed-btns"> ${popupContent.buttons.bootstrap} </button> </a> </li>
//  <li class="list-btn">     <a href=""><button class="the-listed-btns"> ${popupContent.buttons.ruby} </button> </a>   </li>
//  </ul>


//  <div class="popup-container">
//  <div class="popup-image-and-content-container">
//  <div class="popup-image-container">
//  <img src="${popupContent.featuredImage}" alt="Image">
//  </div>

//  <div class="popup-content-description-and-buttons">

//  <h5 class="popup-content-description">
//    ${popupContent.description}
//  </h5>

//  <ul class="see-live-and-source-btns">

//  <li><a href=" ${popupContent.liveVersion}"> <button class="link-list-btn"> See Live ${popupContent.fontLive} </button> </a></li>

//  <li><a href=" ${popupContent.sourceLink}">  <button class="link-list-btn"> See Source ${popupContent.githubfont}  </button>  </a></li>
//  </ul>
//  </div>
//  </div>
//  </div>
//  </div>
//  </div>
//  `


//   div1Popup.classList.add('pop-up-header-times-button');




// popUpSection.appendChild(div1Popup);



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

// console.log(div1Popup)







// openBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const div1Popup = document.createElement('div');
//     div1Popup.innerHTML =`<div>
//     <div class="pop-up-header-times">
//     <h3 class="pop-header-h3"> ${popupContent['headerMobile']} </h3>
//     <h3 class="pop-header-h3-desktop"> ${popupContent['headerDesktop']} </h3>
//     <img data-close-button class="popup-close-barr" src="${popupContent['timeFont']}" alt="close-bar">
//   </div>
 
//   <ul class="html-bootstrap-ruby-on-rails">
//   <li class="list-btn"><a href=""><button class="the-listed-btns"> ${popupContent.buttons.html} </button> </a></li>
//   <li class="list-btn">    <a href=""><button class="the-listed-btns"> ${popupContent.buttons.bootstrap} </button> </a> </li>
//   <li class="list-btn">     <a href=""><button class="the-listed-btns"> ${popupContent.buttons.ruby} </button> </a>   </li>
//   </ul>
 
 
//   <div class="popup-container">
//   <div class="popup-image-and-content-container">
//   <div class="popup-image-container">
//   <img src="${popupContent.featuredImage}" alt="Image">
//   </div>
 
//   <div class="popup-content-description-and-buttons">
 
//   <h5 class="popup-content-description">
//     ${popupContent.description}
//   </h5>
 
//   <ul class="see-live-and-source-btns">
 
//   <li><a href=" ${popupContent.liveVersion}"> <button class="link-list-btn"> See Live ${popupContent.fontLive} </button> </a></li>
 
//   <li><a href=" ${popupContent.sourceLink}">  <button class="link-list-btn"> See Source ${popupContent.githubfont}  </button>  </a></li>
//   </ul>
//   </div>
//   </div>
//   </div>
//   </div>
//   </div>
//   `
//   div1Popup.classList.add('pop-up-header-times-button');
//   popUpSection.appendChild(div1Popup);
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })