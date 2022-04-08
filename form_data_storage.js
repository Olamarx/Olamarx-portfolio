const formPickDetail = document.querySelector('#Form-contact');

let formData = {
  name: '',
  email: '',
  text: '',
};

function formInputData(inputType) {
  formPickDetail.elements[inputType].addEventListener('input', () => {
    formData[inputType] = formPickDetail.elements[inputType].value;
    localStorage.setItem('form-data', JSON.stringify(formData));
  });
}

function setFormDataInLocaleStorage(inputType) {
  formPickDetail.elements[inputType].value = JSON.parse(localStorage['form-data'])[inputType];
}

window.addEventListener('load', () => {
  if (localStorage.getItem('form-data') === null) {
    localStorage.setItem('form-data', JSON.stringify(formData));
  } else {
    formData = JSON.parse(localStorage.getItem('form-data'));
  }

  formInputData('name');
  formInputData('email');
  formInputData('text');
  setFormDataInLocaleStorage('name');
  setFormDataInLocaleStorage('email');
  setFormDataInLocaleStorage('text');
});