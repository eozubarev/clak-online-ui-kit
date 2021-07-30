export default class Input {
    constructor() {
        this.inputs = document.querySelectorAll('.customization__info-input__item');
        this.activeClass = '--active';

        this.listeners();
    }

    listeners() {   
        for (let i = 0; i < this.inputs.length; i++) {
            const input = this.inputs[i];
            input.addEventListener('click', () => {
                this.changeInputValue(input);  
                console.log(input);
                
            })
        }
    }

    changeInputValue(input) {
        input.classList.add(this.activeClass);
        input.childNodes[0].style.display = 'none';
        input.childNodes[1].type = "visible";
    }

}





