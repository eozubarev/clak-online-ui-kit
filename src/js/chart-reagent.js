export default class ChartReagent {
    constructor() {
        this.chart = document.getElementById("chart-reagent");
        this.init();
    }
    init() {
        new Chart(this.chart, {
            type: 'line',
            data: {
                labels: [  
                    '14:04:34',
                    '14:06:28',
                    '14:08:22',
                    '14:10:16',
                    '14:12:10',],
                datasets: [{
                    fill: true,
                    tension: 0.3,
                    label: 'Расход реагента, кг',
                    data: [0, 0, 0, 0, 0, 0],
                    backgroundColor: [
                        '#1c8ec342'
                    ],
                    borderColor: [
                        '#028fc5'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}