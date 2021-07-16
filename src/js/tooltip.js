export default class Tooltip {
    constructor() {
        this.trigger = document.querySelectorAll('.tooltips-element'); 
        this.activeClass = '--active';
        this.listeners();
    }

    listeners() {
        for (let i = 0; i < this.trigger.length; i++) {
            const element = this.trigger[i];
            element.addEventListener('click', (e) => {
                e.stopPropagation();
                let tooltip = element.querySelector('.tooltip');
                this.toggleActiveClass(tooltip);
            })
        }
    }
    toggleActiveClass(tooltip) {
        tooltip.classList.toggle(this.activeClass)
        document.addEventListener('click', event => {
            let target = event.target;
            target == tooltip || tooltip.contains(target) ? false : this.hideTooltip(tooltip);
        });

    }    
    hideTooltip(el) {
        el.classList.remove(this.activeClass);
    }
}
