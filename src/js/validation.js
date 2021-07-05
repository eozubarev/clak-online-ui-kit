import Mask from './mask.js';

export default class Validation {
  constructor(form) {
    this.form = form;
    
    this.setMask(form);
    this.formListeners(form);
  }

  formListeners(form) {
    let inputName = this.setMask(form).name;
    let inputPhone = this.setMask(form).phone;
    let inputEmail = this.setMask(form).email;
    let inputComment = this.setMask(form).comment || null;

    // let buttonReturn = form.querySelector('.checkNumber__button.--return');
    // let buttonSubmit = form.querySelector('.checkNumber__button.--submit');

    form.addEventListener('change', event => {
      this.checkAgree(form);
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      //let phone = inputPhone.el;
      //let phoneValue = phone.value;
      console.log(this.checkFormInputs(form, inputName, inputPhone, inputEmail, inputComment));
      try {
        if (this.checkFormInputs(form, inputName, inputPhone, inputEmail, inputComment)) {
          this.submitForm(form);
          this.sendYandexMetricaReachGoal(form);
  
          // Это все дополнительная проверка номера
          // this.openCheckEl(form, phoneValue);
  
          // buttonReturn.addEventListener('click', event => {
          //   this.closeCheckEl(form, phone);
          // });
  
          // buttonSubmit.addEventListener('click', event => {
          //   // Снова проверяем, что все заполнено
          //   if (this.checkFormInputs(form, inputName, inputPhone)) {
          //     this.submitForm(form);
          //   } else this.closeCheckEl(form, phone);
          // });
        }
      } catch {
        console.error('Ошибка при отправке формы');
      }
    });

  }

  sendYandexMetricaReachGoal(form) {
    if (!form.querySelector('[name="ymName"]')) return;
    let ymName = String(form.querySelector('[name="ymName"]').value);
    yaCounter54273208.reachGoal(ymName);
  }

  // Отправка данных
  submitForm(form) {
    let formEl = form.querySelector('form');
    let source = formEl.getAttribute('action');

    if (form.querySelector('[name="location"]')) {
      let location = form.querySelector('[name="location"]');
      location.value = window.location.href;
      location.setAttribute('value', window.location.href);
    }

    fetch(source, {
      method: 'POST',
      body: new FormData(formEl)
    })
    .then(res => {
      // this.closeCheckEl(form);

      if (res.status == 200) {
        console.log('Форма отправилась');
        this.sayThanks(form);
      } else {
        console.log('Форма не отправилась');
      }
    })
    .catch(err => {
      console.error(err)
    });
  }

  sayThanks(form) {
    form.classList.add('--thanks');
  }

  openCheckEl(form, value) {
    let phoneText = form.querySelector('.checkNumber__number');

    form.classList.add('--check');
    phoneText.textContent = value;
  }

  closeCheckEl(form, input) {
    form.classList.remove('--check');

    if (!input) return;
    input.focus();
  }

  checkFormInputs(form, name, phone, email, comment) {
    let check = false;
    let checkName,
        checkPhone,
        checkEmail,
        checkComment,
        checkCheckbox;

    // Проверка инпута name (больше 1 символа)
    if (!name.test()) {
      checkName = false;
      event.preventDefault();
      name.label.classList.add('--hasError');
    } else {
      checkName = true;
      name.label.classList.remove('--hasError');
    }

    // Проверка инпута phone
    if (phone.test() && this.checkPhoneNumbers(phone.el)) {
      checkPhone = true;
      phone.label.classList.remove('--hasError');
    } else {
      checkPhone = false;
      event.preventDefault();
      phone.label.classList.add('--hasError');
    }

    // Проверка инпута email
    if (email.el != null) {
      if (email.test()) {
        checkEmail = true;
        email.label.classList.remove('--hasError');
      } else {
        checkEmail = false;
        event.preventDefault();
        email.label.classList.add('--hasError');
      }
    } else {
      checkEmail = true;
    }

    // Проверка инпута comment
    if (comment != null) {
      if (comment.test()) {
        checkComment = true;
        comment.label.classList.remove('--hasError');
      } else {
        checkComment = false;
        event.preventDefault();
        comment.label.classList.add('--hasError');
      }
    } else {
      checkComment = true;
    }

    // Проверка checkbox
    if (!this.checkAgree(form)) {
      checkCheckbox = false;
      event.preventDefault();
    } else checkCheckbox = true;

    // Итоговая проверка, чтобы все инпуты были корректны
    checkName && checkPhone && checkEmail && checkComment && checkCheckbox ? check = true : check = false;

    return check;
  }

  // Проверка для Android
  checkPhoneNumbers(input) {
    var check = false;
    var value = input.value;
    var valueArray = value.split('');

    var number = [];

    for (let i = 0; i < valueArray.length; i++) {
      let char = +valueArray[i];

      switch (char) {
        case 0: number.push(char); break;
        case 1: number.push(char); break;
        case 2: number.push(char); break;
        case 3: number.push(char); break;
        case 4: number.push(char); break;
        case 5: number.push(char); break;
        case 6: number.push(char); break;
        case 7: number.push(char); break;
        case 8: number.push(char); break;
        case 9: number.push(char); break;
        default: break;
      }
    }

    if (number.length > 12) {
      check = true;
    }

    return check;
  }

  checkAgree(form) {
    if (!form) return;

    let checkbox = form.querySelector('[type="checkbox"]');
    let submit = form.querySelector('[type="submit"]');

    if (!checkbox.checked) {
      submit.setAttribute('disabled', 'disabled');
      return false;
    } else {
      submit.removeAttribute('disabled');
      return true;
    }
  }

  setMask(form) {
    if (!form) return;

    var phoneLabel = form.querySelector('.input--phone');
    var phoneEl = form.querySelector('input.--phone');
    var phoneMask = new Mask(phoneEl);
    var phone = {
      el: phoneEl,
      label: phoneLabel,
      test: function test() {
        return phoneMask.test();
      },
      focus: function focus() {
        this.el.focus();
      },
      clear() {
        phoneMask.clear()
      }
    }

    var nameLabel = form.querySelector('.input--name');
    var nameEl = form.querySelector('input.--name');
    var name = {
      el: nameEl,
      label: nameLabel,
      test: function test() {
        if (this.el.value.length > 1) {
          let regexp = new RegExp('^([a-zа-яё ]+|\d+)$','gi');
          return regexp.test(this.el.value);
        } else {
          return false;
        }
      },
      focus: function focus() {
        this.el.focus();
      }
    };

    var emailLabel = form.querySelector('.input--email');
    var emailEl = form.querySelector('input.--email');
    var email = {
      el: emailEl,
      label: emailLabel,
      test: function test() {
        // Если ничего не вводили, то не проверяем
        // if (this.el.value == '') {
        //   return true;
        // }

        // проверка на наличие символа до собачки, собачку, текст между собачкой и точкой, точку и текст после точки
        var regexp = new RegExp('.@.+?\\.\\D{2}', 'gi');
        return regexp.test(this.el.value);
      },
      focus: function focus() {
        this.el.focus();
      }
    };

    if (form.querySelector('.input.--textarea')) {
      var commentLabel = form.querySelector('.input.--textarea');
      var commentEl = commentLabel.querySelector('.input__element');
      var comment = {
        el: commentEl,
        label: commentLabel,
        test: function test() {
          // Если ничего не вводили, то не проверяем
          if (this.el.value == '') {
            return true;
          }
  
          if (this.el.value.length > 1) {
            let regexp = new RegExp('[<=>:/\+\|]','gi');
            return !regexp.test(this.el.value);
          } else {
            return false;
          }
        },
        focus: function focus() {
          this.el.focus();
        }
      };
    }
  
    return {
      phone: phone,
      name: name,
      email: email,
      // comment: comment
    }
  }
}
