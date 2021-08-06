export default class Header {
    constructor() {
        this.header = document.querySelector('header.header');

        this.headerScrollClass = '--scrolled';

        this.listeners();
    }

    listeners() {

        window.addEventListener('scroll', event => {
            let scroll = window.pageYOffset;
            this.checkScroll(scroll);
        });
    }

    checkScroll(scroll) {
        if (scroll > 0) {
            this.header.classList.add(this.headerScrollClass);
        } else {
            this.header.classList.remove(this.headerScrollClass);
        }
    }

}