// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/Roboto/Roboto-Light.ttf":[["Roboto-Light.1d4b9cc7.ttf","fonts/Roboto/Roboto-Light.ttf"],"fonts/Roboto/Roboto-Light.ttf"],"./../fonts/Roboto/Roboto-Regular.ttf":[["Roboto-Regular.8dab8bad.ttf","fonts/Roboto/Roboto-Regular.ttf"],"fonts/Roboto/Roboto-Regular.ttf"],"./../fonts/Roboto/Roboto-Medium.ttf":[["Roboto-Medium.7e19ad06.ttf","fonts/Roboto/Roboto-Medium.ttf"],"fonts/Roboto/Roboto-Medium.ttf"],"./../fonts/Roboto/Roboto-Bold.ttf":[["Roboto-Bold.335e2e5e.ttf","fonts/Roboto/Roboto-Bold.ttf"],"fonts/Roboto/Roboto-Bold.ttf"],"./../fonts/SebastianBold/SebastianBold.ttf":[["SebastianBold.b58fd8e6.ttf","fonts/SebastianBold/SebastianBold.ttf"],"fonts/SebastianBold/SebastianBold.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./css/fonts.css":"css/fonts.css","/Users/ijenya/Desktop/GIT Clack Online/clak-online-ui-kit/src/images/icons/arrow.svg":[["arrow.51d50719.svg","images/icons/arrow.svg"],"images/icons/arrow.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/mask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Mask {
  constructor(element, options = {}) {
    if (!element) return;

    var _this = this;

    this.symbol = options.symbol || '_'; // Символ заменитель незаполненных ячеек

    this.mask = options.mask || '+7 (___) ___-__-__'; // Маска с учётом символа заменителя

    this.allowedChars = options.allowedChars || '[0-9]'; // Разрешённые символы (будут частью регекспа)

    this.empty = options.empty || 'false'; // Разрешить пустое поле

    this.legalLength = options.legalLength; // Допустимые длины заполнения

    this.element = element;
    element.value = this.value = this.mask;
    this.regex = `${this.allowedChars}|${this.symbol}`;
    this.maskSymbols = this.mask.match(new RegExp(this.regex, 'gi'));
    this.allowedCharsLength = 0;
    this.maskSymbols.forEach(elem => {
      if (elem == this.symbol) this.allowedCharsLength++;
    }); // Это индикатор того, вводилась ли первой 8 или еще нет
    // Далее на 93 строку

    this.phonePrefix = false;
    this.checkKeyCodeSupport();
    element.addEventListener('focus', function () {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var indexedSymbol = _this.element.value.indexOf(_this.symbol);

          if (indexedSymbol != -1) _this.caretPosition = indexedSymbol;else _this.caretPosition = _this.element.value.length;

          _this.setCaretPosition(_this.element, _this.caretPosition, _this.caretPosition);
        });
      });
    });
    element.addEventListener('blur', function () {
      if (!_this.element.value) _this.element.value = _this.mask;
    });
    element.addEventListener('paste', e => {
      if (this.method == 'mask') this.pasteWithMask(e);
      if (this.method == 'simpleMask') this.pasteWithSimpleMask(e);
    });
    this.__bindedRoute = this.route.bind(this);
    element.addEventListener('load', this.__bindedRoute); // element.addEventListener('input', this.__bindedRoute);

    element.addEventListener('keydown', this.__bindedRoute);
  }

  route(e) {
    if (e.keyCode === 0 || e.keyCode === 229) this.__simpleMask(e);else this.__mask(e);
  }

  __simpleMask(e) {
    var stack = new Promise((resolve, reject) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (this.value && this.value.length >= this.element.value.length) {
            reject();
            this.value = this.element.value;
          }

          resolve(this.element.value);
        });
      });
    });
    stack.then(result => {
      var numbers = result.match(new RegExp(this.allowedChars, 'ig'));
      return numbers;
    }).then(result => {
      var maskArray = this.mask.split('');
      var maskArrayChars = this.mask.match(new RegExp(this.allowedChars, 'ig'));
      var count = 0; // Если первой ввели 8, то мы ее удаляем и переключаем флаг того,
      // Что 8 первой уже вводили и теперь уже можно вводить ее еще раз

      if (result[1] == 8 && result.length < 3 && !this.phonePrefix) {
        result.pop();
        this.phonePrefix = true;
      } else {
        this.phonePrefix = false;
      }

      for (var i = 0; i < maskArray.length; i++) {
        if (maskArrayChars && maskArrayChars[count]) {
          if (result && maskArrayChars[count] == result[count]) {
            count++;
            continue;
          }
        }

        if (maskArray[i] == this.symbol && result && result[count]) {
          maskArray[i] = result[count];
          this.carerPosition = i + 1;
          count++;
        } else if (maskArray[i] == this.symbol && result && !result[count]) {
          maskArray = maskArray.slice(0, i);
          this.carerPosition = i + 1;
        }
      }

      return maskArray;
    }).then(result => {
      this.value = result.join('');
    }).then(() => {
      this.displayResult();
    }).catch(e => {});
  }

  __mask(e) {
    if (e.key == "Meta" || e.keyIdentifier == "Meta" || e.keyCode == 91 || e.metaKey == true || e.ctrlKey == true) {} else {
      e.preventDefault();
    }

    var key = this.whatIsKey(e);
    var keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete'];
    !this.keysArray && (this.keysArray = []);

    if (keys.indexOf(key) === -1) {
      return;
    }

    if (key == 'Backspace' || key == 'Delete') {
      if (!this.keysArray.length) return;
      this.keysArray.pop();
    } else {
      var symbolsInMask = this.mask.match(new RegExp(this.symbol, 'ig'));
      if (symbolsInMask.length > this.keysArray.length) this.keysArray.push(key); // Если первая 8, то увеличиваем длину массива
      else if (this.keysArray[0] == 8 && symbolsInMask.length == this.keysArray.length) {
          this.keysArray.push(key);
        } else return;
    }

    if (this.keysArray.length == 0) {
      this.value = this.mask;
      this.carerPosition = this.mask.indexOf(this.symbol);
    } else {
      var maskArray = this.mask.split('');
      var count = 0; // Если первая 8, то не пишем ее и оставляем каретку на месте

      if (this.keysArray[0] == 8) {
        count++;
        this.carerPosition = 4;
      }

      for (var i = 0; i < maskArray.length; i++) {
        if (maskArray[i] == this.symbol && this.keysArray[count]) {
          maskArray[i] = this.keysArray[count];
          this.carerPosition = i + 1;
          count++;
        }
      }

      this.value = maskArray.join('');
    }

    this.displayResult();
  }

  setCaretPosition(ctrl, start, end) {
    // IE >= 9 and other browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(start, end);
    } // IE < 9
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
      }
  }

  whatIsKey(e) {
    var key = null;

    if (e.key) {
      key = e.key;
    } else if (event.keyCode) {
      switch ('' + event.keyCode) {
        case '48':
          key = '0';
          break;

        case '49':
          key = '1';
          break;

        case '50':
          key = '2';
          break;

        case '51':
          key = '3';
          break;

        case '52':
          key = '4';
          break;

        case '53':
          key = '5';
          break;

        case '54':
          key = '6';
          break;

        case '55':
          key = '7';
          break;

        case '56':
          key = '8';
          break;

        case '57':
          key = '9';
          break;

        case '8':
          key = 'Backspace';
          break;

        case '46':
          key = 'Delete';
          break;
      }
    } else if (event.keyIdentifier) {
      switch ('' + event.keyIdentifier) {
        case 'U+0030':
          key = '0';
          break;

        case 'U+0031':
          key = '1';
          break;

        case 'U+0032':
          key = '2';
          break;

        case 'U+0033':
          key = '3';
          break;

        case 'U+0034':
          key = '4';
          break;

        case 'U+0035':
          key = '5';
          break;

        case 'U+0036':
          key = '6';
          break;

        case 'U+0037':
          key = '7';
          break;

        case 'U+0038':
          key = '8';
          break;

        case 'U+0039':
          key = '9';
          break;

        case 'U+0008':
          key = 'Backspace';
          break;
      }
    }

    return key;
  }

  pasteWithMask(e) {
    var pasteData = e.clipboardData && e.clipboardData.getData('Text');
    Promise.resolve().then(() => {
      if (pasteData) {
        e.preventDefault();
        return pasteData.match(new RegExp(this.allowedChars, 'gi'));
      } else {
        return new Promise(resolve => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              resolve(this.element.value.match(new RegExp(this.allowedChars, 'gi')));
            });
          });
        });
      }
    }).then(data => {
      if (!data) throw new Error('Пусто во вставке');

      if (data.length >= this.maskSymbols.length) {
        this.checkDoubleMaskSymbols(data);
      } else {
        for (var i = 0; i < data.length; i++) {
          if (this.keysArray.length < this.allowedCharsLength) this.keysArray.push(data[i]);
        }
      }
    }).then(() => {
      var maskArray = this.mask.split('');
      var count = 0;

      for (var i = 0; i < maskArray.length; i++) {
        if (maskArray[i] == this.symbol && this.keysArray[count]) {
          maskArray[i] = this.keysArray[count];
          this.carerPosition = i + 1;
          count++;
        }
      }

      this.value = maskArray.join('');
      this.displayResult();
    }).catch(e => {
      console.log('Пустота', e);
    });
  }

  pasteWithSimpleMask() {
    this.__simpleMask();
  }

  displayResult() {
    var lengthAllowedChars = this.value && this.value.match(new RegExp(this.allowedChars, 'gi'));

    if (this.maskSymbols.length === lengthAllowedChars) {
      if (this.value != this.lastValue) {
        this.lastValue = this.value;
      }
    }

    this.element.value = this.value;
    this.setCaretPosition(this.element, this.carerPosition, this.carerPosition);
    this.element.dispatchEvent(new Event('input'));
  }

  checkKeyCodeSupport() {
    this.method = 'mask';

    var checkKeyCode = e => {
      if (this.allowedChars == '[0-9]' && e.keyCode !== 0 || e.keyCode !== 229) {
        this.method = 'mask';
      } else {
        this.method = 'simpleMask';
      }

      removeEventListener('keydown', checkKeyCode);
    };

    addEventListener('keydown', checkKeyCode);
  }

  checkDoubleMaskSymbols(data) {
    this.keysArray = [];

    for (var i = 0; i < this.maskSymbols.length; i++) {
      if (data[i] != this.maskSymbols[i] && this.keysArray.length < this.allowedCharsLength) {
        this.keysArray.push(data[i]);
      }
    }

    for (; i < data.length; i++) {
      if (this.keysArray.length < this.allowedCharsLength) this.keysArray.push(data[i]);else break;
    }
  }

  test() {
    let regexp = new RegExp(this.symbol);
    return !regexp.test(this.value);
  }

  clear() {
    this.keysArray = [];
    this.element.value = '';
  }

}

exports.default = Mask;
},{}],"js/validation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mask = _interopRequireDefault(require("./mask.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Validation {
  constructor(form) {
    this.form = form;
    this.setMask(form);
    this.formListeners(form);
  }

  formListeners(form) {
    let inputName = this.setMask(form).name;
    let inputPhone = this.setMask(form).phone;
    let inputEmail = this.setMask(form).email;
    let inputComment = this.setMask(form).comment || null; // let buttonReturn = form.querySelector('.checkNumber__button.--return');
    // let buttonSubmit = form.querySelector('.checkNumber__button.--submit');

    form.addEventListener('change', event => {
      this.checkAgree(form);
    });
    form.addEventListener('submit', event => {
      event.preventDefault(); //let phone = inputPhone.el;
      //let phoneValue = phone.value;

      console.log(this.checkFormInputs(form, inputName, inputPhone, inputEmail, inputComment));

      try {
        if (this.checkFormInputs(form, inputName, inputPhone, inputEmail, inputComment)) {
          this.submitForm(form);
          this.sendYandexMetricaReachGoal(form); // Это все дополнительная проверка номера
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
  } // Отправка данных


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
    }).then(res => {
      // this.closeCheckEl(form);
      if (res.status == 200) {
        console.log('Форма отправилась');
        this.sayThanks(form);
      } else {
        console.log('Форма не отправилась');
      }
    }).catch(err => {
      console.error(err);
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
    let checkName, checkPhone, checkEmail, checkComment, checkCheckbox; // Проверка инпута name (больше 1 символа)

    if (!name.test()) {
      checkName = false;
      event.preventDefault();
      name.label.classList.add('--hasError');
    } else {
      checkName = true;
      name.label.classList.remove('--hasError');
    } // Проверка инпута phone


    if (phone.test() && this.checkPhoneNumbers(phone.el)) {
      checkPhone = true;
      phone.label.classList.remove('--hasError');
    } else {
      checkPhone = false;
      event.preventDefault();
      phone.label.classList.add('--hasError');
    } // Проверка инпута email


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
    } // Проверка инпута comment


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
    } // Проверка checkbox


    if (!this.checkAgree(form)) {
      checkCheckbox = false;
      event.preventDefault();
    } else checkCheckbox = true; // Итоговая проверка, чтобы все инпуты были корректны


    checkName && checkPhone && checkEmail && checkComment && checkCheckbox ? check = true : check = false;
    return check;
  } // Проверка для Android


  checkPhoneNumbers(input) {
    var check = false;
    var value = input.value;
    var valueArray = value.split('');
    var number = [];

    for (let i = 0; i < valueArray.length; i++) {
      let char = +valueArray[i];

      switch (char) {
        case 0:
          number.push(char);
          break;

        case 1:
          number.push(char);
          break;

        case 2:
          number.push(char);
          break;

        case 3:
          number.push(char);
          break;

        case 4:
          number.push(char);
          break;

        case 5:
          number.push(char);
          break;

        case 6:
          number.push(char);
          break;

        case 7:
          number.push(char);
          break;

        case 8:
          number.push(char);
          break;

        case 9:
          number.push(char);
          break;

        default:
          break;
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
    var phoneMask = new _mask.default(phoneEl);
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
        phoneMask.clear();
      }

    };
    var nameLabel = form.querySelector('.input--name');
    var nameEl = form.querySelector('input.--name');
    var name = {
      el: nameEl,
      label: nameLabel,
      test: function test() {
        if (this.el.value.length > 1) {
          let regexp = new RegExp('^([a-zа-яё ]+|\d+)$', 'gi');
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
            let regexp = new RegExp('[<=>:/\+\|]', 'gi');
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
      email: email // comment: comment

    };
  }

}

exports.default = Validation;
},{"./mask.js":"js/mask.js"}],"js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validation = _interopRequireDefault(require("./validation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Form {
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
    new _validation.default(form);
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
        text = 'Размер файлов не должен превышать 5Мб';
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

exports.default = Form;
},{"./validation.js":"js/validation.js"}],"js/select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SelectForm {
  constructor() {
    this.selectMenus = [...document.querySelectorAll('.form__select')];
    this.activeClass = '--active';
    this.selectClass = '--selected';
    this.hasValue = '--hasValue';
    this.listeners();
  }

  listeners() {
    for (let selectMenu of this.selectMenus) {
      selectMenu.addEventListener('mousedown', () => {
        if (!selectMenu.classList.contains(this.activeClass)) {
          this.removeSelectMenus();
          this.openSelectMenu(selectMenu);
        } else {
          this.hideSelectMenu(selectMenu);
        }
      });
      document.addEventListener('mousedown', event => {
        let target = event.target;
        target == selectMenu || selectMenu.contains(target) ? false : this.hideSelectMenu(selectMenu);
      });
      let items = selectMenu.querySelectorAll('.form__select-item');

      for (let item of items) {
        item.addEventListener('mousedown', () => {
          let value = item.textContent;
          this.choiceReasonCall(selectMenu, value);
        });
      }
    }
  }

  removeSelectMenus() {
    for (let selectMenu of this.selectMenus) {
      selectMenu.classList.remove(this.activeClass);
    }
  }

  openSelectMenu(selectMenu) {
    selectMenu.classList.add(this.activeClass);
  }

  hideSelectMenu(selectMenu) {
    selectMenu.classList.remove(this.activeClass);
  }

  choiceReasonCall(selectMenu, el) {
    selectMenu.classList.add(this.selectClass);
    let input = selectMenu.querySelector('.input__element');
    input.value = el;
    let head = selectMenu.querySelector('.form__select-head');
    head.classList.add(this.hasValue);
  }

}

exports.default = SelectForm;
},{}],"js/tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Tabs {
  constructor() {
    this.init();
  }

  init() {
    let tabNavs = document.querySelectorAll(".nav-tab");
    let tabPanes = document.querySelectorAll(".tab-pane");

    for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (let j = 0; j < tabNavs.length; j++) {
          let contentAttr = tabPanes[j].getAttribute("data-tab-content");

          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active");
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        }
      });
    }
  }

}

exports.default = Tabs;
},{}],"js/valves-tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ValvesTabs {
  constructor() {
    this.init();
  }

  init() {
    let tabNavs = document.querySelectorAll(".valves__nav-tab");
    let tabPanes = document.querySelectorAll(".valves__tab-pane");

    for (let i = 0; i < tabNavs.length; i++) {
      tabNavs[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (let j = 0; j < tabNavs.length; j++) {
          let contentAttr = tabPanes[j].getAttribute("data-tab-content");

          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active");
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        }
      });
    }
  }

}

exports.default = ValvesTabs;
},{}],"js/tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Tooltip {
  constructor() {
    this.btns = document.querySelectorAll('.transparent__btn-action');
    this.activeClass = '--active';
    this.listeners();
  }

  listeners() {
    this.btns.forEach(element => {
      let btn = element;
      let tooltip = btn.nextSibling;
      btn.addEventListener('mousedown', () => {
        this.showTooltip(tooltip);
      });
      document.addEventListener('mousedown', event => {
        let target = event.target;
        target == btn || tooltip.contains(target) ? false : this.hideTooltip(tooltip);
      });
    });
  }

  showTooltip(tooltip) {
    tooltip.classList.add(this.activeClass);
  }

  hideTooltip(tooltip) {
    tooltip.classList.remove(this.activeClass);
  }

}

exports.default = Tooltip;
},{}],"../index.js":[function(require,module,exports) {
"use strict";

require("./src/main.scss");

var _form = _interopRequireDefault(require("./src/js/form.js"));

var _select = _interopRequireDefault(require("./src/js/select.js"));

var _tabs = _interopRequireDefault(require("./src/js/tabs.js"));

var _valvesTabs = _interopRequireDefault(require("./src/js/valves-tabs.js"));

var _tooltip = _interopRequireDefault(require("./src/js/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', event => {
  // new Form;
  // new SelectForm;
  new _tabs.default();
  new _valvesTabs.default();
  new _tooltip.default();
});
},{"./src/main.scss":"main.scss","./src/js/form.js":"js/form.js","./src/js/select.js":"js/select.js","./src/js/tabs.js":"js/tabs.js","./src/js/valves-tabs.js":"js/valves-tabs.js","./src/js/tooltip":"js/tooltip.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56747" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../index.js"], null)
//# sourceMappingURL=/clak-online-ui-kit.80dfb952.js.map