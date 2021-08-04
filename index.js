import './src/main.scss'

import Chart from './src/js/chart.js';
import ValveControllerTabs from './src/js/valve-controller-tabs.js';
import CustomizationTabs from './src/js/customization-tabs.js';
import StatisticsTabs from './src/js/statistics-tabs.js';
import ChartWaterFlowMetr from './src/js/chart-waterflow-metr.js';
import ChartWaterFlow from './src/js/chart-water-flow.js';
import ChartReagent from './src/js/chart-reagent.js';
import IntervalTabs from './src/js/interval-tabs.js';
import ValvesTabs from './src/js/valves-tabs.js';
import FilterTabs from './src/js/filter-tabs.js';
import SelectForm from './src/js/select-form.js';
import Tooltip from './src/js/tooltip.js';
import Popup from './src/js/popup.js';
import Input from './src/js/input.js';
import Form from './src/js/form.js';
import Tabs from './src/js/tabs.js';

document.addEventListener( 'DOMContentLoaded', event => {
    new Chart;
    new ValveControllerTabs;
    new CustomizationTabs;
    new StatisticsTabs;
    new IntervalTabs;
    new ValvesTabs;
    new SelectForm;
    new FilterTabs;
    new Tooltip;
    new Popup;
    new Input;
    new Form;
    new Tabs;

    if (document.getElementById('chart-warer-flow')) {
        new ChartWaterFlow;
    }

    if (document.getElementById('chart-reagent')) {
        new ChartReagent;
    }

    if (document.getElementById('chart-warerflow-metr')) {
        new ChartWaterFlowMetr;
    }

});

