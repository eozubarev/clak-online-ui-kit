import './src/main.scss'
import './src/js/chart.js';

import ValveControllerTabs from './src/js/valve-controller-tabs.js';
import ValvesTabs from './src/js/valves-tabs.js';
import FilterTabs from './src/js/filter-tabs.js';
import SelectForm from './src/js/select.js';
import Tooltip from './src/js/tooltip.js';
import Form from './src/js/form.js';
import Tabs from './src/js/tabs.js';

document.addEventListener( 'DOMContentLoaded', event => {
    new Chart(document.getElementById('chart-warer-flow'),config);

    new ValveControllerTabs;
    new ValvesTabs;
    new SelectForm;
    new FilterTabs;
    new Tooltip;
    new Form;
    new Tabs;

});

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};
