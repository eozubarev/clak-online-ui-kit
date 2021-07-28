import './src/main.scss'
import './src/js/chart.js';

import ValveControllerTabs from './src/js/valve-controller-tabs.js';
import ChartWaterFlowMetr from './src/js/chart-waterflow-metr.js';
import ChartWaterFlow from './src/js/chart-water-flow.js';
import ChartResource from './src/js/chart-resource.js';
import ChartReagent from './src/js/chart-reagent.js';
import CustomizationTabs from './src/js/customization-tabs.js';
import StatisticsTabs from './src/js/statistics-tabs.js';
import IntervalTabs from './src/js/interval-tabs.js';
import ValvesTabs from './src/js/valves-tabs.js';
import FilterTabs from './src/js/filter-tabs.js';
import SelectForm from './src/js/select-form.js';
import Tooltip from './src/js/tooltip.js';
import Form from './src/js/form.js';
import Tabs from './src/js/tabs.js';

document.addEventListener( 'DOMContentLoaded', event => {
    new ValveControllerTabs;
    new ChartWaterFlowMetr;
    new CustomizationTabs;
    new ChartWaterFlow;
    new ChartResource;
    new ChartReagent;
    new StatisticsTabs;
    new IntervalTabs;
    new ValvesTabs;
    new SelectForm;
    new FilterTabs;
    new Tooltip;
    new Form;
    new Tabs;
});