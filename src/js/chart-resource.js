export default class ChartResource {
    constructor() {
        this.chart = document.getElementById("chart-resource");
        // this.init();
    }
    init() {
        new Chart(this.chart, {
            type: 'doughnut',
            data: {
                labels: ['Оставшийся ресурс (%)','Весь ресурс (%)'],
                datasets: [{
                    tension: 0.3,
                    label: 'Оставшийся ресурс',
                    data: [20, 80],
                    backgroundColor: [
                        '#1C8EC3',
                        '#EBECF0'
                    ],
                    hoverOffset: 4,
                }]
            },
        });
    }
}