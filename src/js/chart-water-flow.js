export default class ChartWaterFlow {
    constructor() {
        this.chart = document.getElementById("chart-warer-flow");
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
                    label: 'Расход воды, л/мин',
                    data: [20, 20, 18, 19, 17, 3],
                    backgroundColor: [
                        '#1c8ec342'
                    ],
                    borderColor: [
                        '#1C8EC3'
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