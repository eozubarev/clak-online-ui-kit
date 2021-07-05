import Validation from './validation.js';

export default class Form {
  constructor() {
    this.forms = [...document.querySelectorAll('.form')];
    this.inputs = [...document.querySelectorAll('.input')];
    this.inputFile = [...document.querySelectorAll('.js-inputFile')];

    this.forms.forEach(form => {
      this.initValidation(form);
    });

    this.listeners();
  }

  listeners() {
    this.inputFile.forEach(el => {
      el.addEventListener('change', event => {
        this.showFilesCount(el);
      });
    });

    this.inputs.forEach(item => {
      let elements = [...item.querySelectorAll('.input__element')];

      elements.forEach(el => {
        el.addEventListener('change', event => {
          this.checkValue(item);
        });

        el.addEventListener('input', event => {
          this.checkValue(item);
        });

        el.addEventListener('focus', event => {
          this.setFocus(item);
        });

        el.addEventListener('blur', event => {
          this.removeFocus(item);
        });
      });
    });
  }

  initValidation(form) {
    new Validation(form);
  }

  setFocus(item) {
    item.classList.add('--focused');
  }

  removeFocus(item) {
    item.classList.remove('--focused');
  }

  showFilesCount(el) {
    let input = el.querySelector('input[type="file"]');
    let counter = el.querySelector('.js-inputFileCount');
    let files = input.files;
    let length = files.length;
    let text = 'Загруженные файлы:<br> ';
    let size = 0;

    if (length > 0) {
      for (let i = 0; i < length; i++) {
        let name = files[i].name;
        text += i + 1 + '. ' + name + ',<br> ';
        counter.innerHTML = text;
      }

      for (let i = 0; i < length; i++) {
        size += files[i].size;
      }
  
      size = size / 1024 / 1024; // Mb
      size = size.toFixed(2);

      if (size > 5) {
        counter.classList.add('--error');
        text = 'Размер файлов не должен превышать 5Мб'
        counter.innerHTML = text;
        input.value = '';
      } else {
        counter.classList.remove('--error');
      }

    } else {
      counter.textContent = '';
    }
  }

  checkValue(item) {
    let input = item.getElementsByClassName('input__element')[0];

    if (input.value !== '' && input.value !== undefined && input.value !== '+7 (___) ___-__-__') {
      item.classList.add('--hasValue');
    } else {
      item.classList.remove('--hasValue');
    }
  }
}