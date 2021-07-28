export default class SelectForm {
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
                })
            }
        }
    }

    removeSelectMenus() {
        for (let selectMenu of this.selectMenus) {
            selectMenu.classList.remove(this.activeClass);
        }
    }

    openSelectMenu(selectMenu) {
        selectMenu.classList.add(this.activeClass)
    }

    hideSelectMenu(selectMenu) {
        selectMenu.classList.remove(this.activeClass)
    }

    choiceReasonCall(selectMenu, el) {
        selectMenu.classList.add(this.selectClass);
        let input = selectMenu.querySelector('.input__element')
        input.value = el;

        let head = selectMenu.querySelector('.form__select-head');
        head.textContent = el;
        head.classList.add(this.hasValue);
    }
}





