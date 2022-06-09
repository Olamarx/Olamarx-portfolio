const menuBar = document.querySelector('.new-menu');
const mainContainer = document.querySelector('.main-container');
const mainNavbarLogo = document.querySelector('.main-navbar-logo');
const listingOfUl = document.querySelector('.listing-of-ul');
const closeMenu = document.querySelector('.close-menu');
const headerAside = document.querySelector('.header-aside');
const envelop = document.querySelector('.envelo');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  mainContainer.classList.toggle('active');
  mainNavbarLogo.classList.toggle('active');
  listingOfUl.classList.toggle('active');
  closeMenu.classList.toggle('active');
  headerAside.classList.toggle('active');
  envelop.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  mainContainer.classList.toggle('active');
  mainNavbarLogo.classList.toggle('active');
  listingOfUl.classList.toggle('active');
  closeMenu.classList.toggle('active');
  headerAside.classList.toggle('active');
});

const projects = [{
  name: 'Multi Post Stories',
  desktopname: 'Keeping track of hundreds  of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: './images/times.svg',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby on Rails'],
  link: 'https://github.com/Olamarx/Olamarx-portfolio',
  button: 'See Project',
  popupImage: './images/popupImg.svg',
},

{
  name: '',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: './images/times.svg',
  technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
  link: 'https://olamarx.github.io/Olamarx-portfolio/',
},
];

const objOfProjects = {
  name: 'Multi Post Stories',
  description: " A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/bg.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
  link: 'https://github.com/Olamarx/Olamarx-portfolio',
};

// template Projects array

const myProjects = [
  {
    id: 'card1',
    title: 'Profesional Art Printing Data',
    tech: ['html', 'bootstrap', 'Ruby'],
    image: '',
    descriptionOpen: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'card2',
    title: 'Profesional Art Printing Data',
    titledesktop: 'Data Dashboard Healthcare',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'card3',
    title: 'Profesional Art Printing Data',
    titledesktop: 'Website Protfolio',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'card4',
    title: 'Profesional Art Printing Data',
    titledesktop: 'Profesional Art Printing Data More',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'card5',
    title: 'Profesional Art Printing Data',
    titledesktop: 'Data Dashboard Healthcare',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
  {
    id: 'card6',
    title: 'Profesional Art Printing Data',
    titledesktop: 'Data Dashboard Healthcare',
    tech: ['html', 'bootstrap', 'ruby on rails'],
    image: '',
    descriptionClose: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    seeLive: '#',
    seeSource: '#',
  },
];

// console.log(myProjects[4].tech[2])

const headerWorks = document.querySelector('.w-container');

headerWorks.insertAdjacentHTML('afterend', `
  <div class="image-paragraph">
    <img class="img-pd" src="${objOfProjects.image}" alt="place holder">
    <div class="multiple-column">
      <h2 class="multi-column-h1">${objOfProjects.name}</h2>
      <p class="multi-column-det">
        ${objOfProjects.description}
      </p>
      
      <ul class="what-i-know">
        <li class="exp">${projects[0].technologies[0]}</li>
        <li class="exp">${projects[0].technologies[1]}</li>
        <li class="exp">${projects[0].technologies[2]}</li>
        <li class="exp">${projects[0].technologies[3]}</li>
      </ul>
      <button data-modal-target="#pop-up-section" class="see-pro" type="button">${projects[0].button}</button>
    </div>
  </div>
  
   <div class="section-under-my-recent-works">
          <div class="pro-art-major pro-art-major-1">
            <div class="art hide-in-desktop-view">
             <h2 class="art-data">${myProjects[0].title}</h2> 
              <p class="daily-s-con">${myProjects[0].description}</p>
          </div>
          <ul class="pro-t hide-in-desktop-view">
              <li class="pro-">${projects[0].technologies[1]}</li>
              <li class="pro-">${projects[0].technologies[2]}</li>
              <li class="pro-">${myProjects[0].tech[2]} </li>
            </ul>
               <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version-1" type="button">${projects[0].button}</button></div>


         <div class="pro-art-major pro-art-major-2">
          <div class="art">
           <h2 class="art-data art-data-2">${myProjects[1].title}</h2> 
           <h2 class="art-data-desktop-view">${myProjects[1].titledesktop}</h2> 
            <p class="daily-s-con">${myProjects[1].description}</p></div>

          
          <ul class="pro-t">
            <li class="pro-">${projects[0].technologies[1]}</li>
            <li class="pro-">${projects[0].technologies[2]}</li>
            <li class="pro-">${myProjects[0].tech[2]}</li>
          </ul>
             <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button">${projects[0].button}</button></div>
        <div class="pro-art-major pro-art-major-3">
          <div class="art">
           <h2 class="art-data art-data-2">${myProjects[2].title}</h2> 
           <h2 class="art-data-desktop-view">${myProjects[2].titledesktop}</h2> 


            <p class="daily-s-con">${myProjects[2].description}</p>
          </div>
          <ul class="pro-t">
            <li class="pro-">${projects[0].technologies[1]}</li>
            <li class="pro-">${projects[0].technologies[2]}</li>
            <li class="pro-">${myProjects[0].tech[2]}</li>
          </ul>
             <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button">${projects[0].button}</button></div>


        <div class="pro-art-major pro-art-major-4">
          <div class="art">
           <h2 class="art-data art-data-2">${myProjects[3].title}</h2>
           <h2 class="art-data-desktop-view">${myProjects[3].titledesktop}</h2> 
           
           

            <p class="daily-s-con">${myProjects[3].description}</p>
          </div>
          <ul class="pro-t">
            <li class="pro-">${projects[0].technologies[1]}</li>
            <li class="pro-">${projects[0].technologies[2]}</li>
            <li class="pro-">${myProjects[0].tech[2]}</li>
            </ul>

             <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button">${projects[0].button}</button></div>


         <div class="pro-art-major pro-art-major-5">
          <div class="art">
           <h2 class="art-data art-data-2">${myProjects[4].title}</h2>
           <h2 class="art-data-desktop-view">${myProjects[4].titledesktop}</h2> 
           
           

            <p class="daily-s-con">${myProjects[4].description}</p></div>
          <ul class="pro-t">
            <li class="pro-">${projects[0].technologies[1]}</li> 
            <li class="pro-">${projects[0].technologies[2]}</li>
            <li class="pro-">${myProjects[0].tech[2]}</li>
           </ul>
             <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button">${projects[0].button}</button></div>

        <div class="pro-art-major pro-art-major-6">
          <div class="art">
           <h2 class="art-data art-data-2">${myProjects[5].title}</h2>
           <h2 class="art-data-desktop-view">${myProjects[5].titledesktop}</h2> 
           
           

            <p class="daily-s-con"> ${myProjects[5].description} </p>
          </div>
          <ul class="pro-t">
            <li class="pro-">${projects[0].technologies[1]}</li>
            <li class="pro-">${projects[0].technologies[2]}</li>
            <li class="pro-">${myProjects[0].tech[2]}</li>
           </ul>
             <button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button">${projects[0].button}</button>
        </div>
      </div>
  `);

// Pop Up Section

// for (let i = 0; i < projects.length; i++) {
const div1Popup = document.createElement('div');
div1Popup.innerHTML = `<div> <div>
      <div class="pop-up-header-times">
      <h3 class="pop-header-h3"> ${projects[0].name} </h3>
      <h3 class="pop-header-h3-desktop"> ${projects[0].desktopname}</h3>
      <img data-close-button class="popup-close-barr" src="${projects[0].image}" alt="close-bar">
    </div>
   
    <ul class="html-bootstrap-ruby-on-rails">
    <li class="list-btn">    <a href="#"><button class="the-listed-btns"> ${projects[0].technologies[1]}</button> </a></li>
    <li class="list-btn">    <a href="#"><button class="the-listed-btns"> ${projects[0].technologies[2]}</button></a></li>
    <li class="list-btn">    <a href="#"><button class="the-listed-btns"> ${projects[0].technologies[3]} </button></a></li>
    </ul>
      <div class="popup-container">
      <div class="popup-image-and-content-container">
      <div class="popup-image-container"> <img src="${projects[0].popupImage}" alt="Image"> </div>
    <div class="popup-content-description-and-buttons">
    <h5 class="popup-content-description desktopviewp">
    ${projects[1].description}
    </h5>
  
    <h5 class="popup-content-description mobileviewp">
    ${projects[0].description}
    </h5>
    <ul class="see-live-and-source-btns">
    <li><a href="${projects[1].link}"> <button class="link-list-btn"> See Live <img src="./images/livepreview.svg" alt="Live-preview"> </button> </a></li>
    <li><a href="${projects[0].link}">  <button class="link-list-btn"> See Source <img src="./images/githubfont.svg" alt="Github">  </button>  </a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>`;

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
// }

const array = [
  {
    title: 'Awesome Books',
    image: './images/AwesomeBookBookSectionSPA.jpg',
    description: 'This is a Single Page App(SMA) helps to save the books that are awesome to you. You can equally delete it at your time.',
    seeLive: 'https://olamarx.github.io/Microverse-Awesome-Books/dist/',
    seeSource: 'https://github.com/Olamarx/Microverse-Awesome-Books',
  },
  {
    title: 'To-do List App',
    image: './images/TodoList.jpg',
    description: "This app helps in organizing one's day. It adds activities of the day and allow us to delete in group and individually.",
    seeLive: 'https://olamarx.github.io/Todo-List/dist/',
    seeSource: 'https://github.com/Olamarx/Todo-List',
  },
  {
    title: 'Mockup tech learning site',
    image: './images/TodoList.jpg',
    description: "This app helps in organizing one's day. It adds activities of the day and allow us to delete in group and individually.",
    seeLive: 'https://olamarx.github.io/Capstone-project/',
    seeSource: 'https://github.com/Olamarx/Capstone-project',
  },
];
const showUp = document.querySelector('.section-under-my-recent-works');

array.forEach((one) => {
  const placeIt = `
<div class="pro-art-major pro-art-major-first-up">
          <div class="art">
          <h2 class="art-data art-data-2">${one.title}</h2>
          <h2 class="art-data-desktop-view">${one.title}</h2> 
            <p class="daily-s-con">${one.description}</p>
          </div>
          <ul class="pro-t">
            <li class="pro-"><a href="${one.seeLive}">Live Preview</a> </li>
            <li class="pro-"> <a href="${one.seeSource}">Source Code</a> </li>
            </ul>
<button data-modal-target="#pop-up-section" class="see-project see-project-desktop-version" type="button"></button></div>
`;
  showUp.insertAdjacentHTML('afterbegin', placeIt);
});
// Form Validation

const form = document.querySelector('.contact');
const error = document.querySelector('.throw-error');
const mail = document.querySelector('.inputEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (mail.value !== mail.value.toLowerCase()) {
    error.style.display = 'block';
    error.textContent = 'Kindly input lower case characters in all fields';
    error.style.color = 'red';
    error.style.fontFamily = 'Roboto, sans-serif';
    error.style.margin = '24px auto';
    error.style.border = '1px solid gray';
  } else {
    error.style.display = 'none';
    form.submit();
  }
});