export default class ChartWaterFlowMetr {
    constructor() {
        this.chart = document.getElementById("chart-warerflow-metr");
        this.init();
    }
    init() {
        new Chart(this.chart, {
            type: 'line',
            data: {
                labels: [  
                    '28:04:20',
                    '30:04:20',
                    '05:05:20',
                    '10:05:20',
                    '15:15:20',],
                datasets: [{
                    tension: 0.3,
                    label: 'Расход воды, м3',
                    data: [0, 21, 2, 28, 10, 28],
                    backgroundColor: [
                        '#1C8EC3'
                    ],
                    borderColor: [
                        '#1C8EC3'
                    ],
                    borderWidth: 1
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