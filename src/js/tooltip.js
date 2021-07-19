export default class Tooltip {
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
