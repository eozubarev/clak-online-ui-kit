import './src/main.scss'

import ValveControllerTabs from './src/js/valve-controller-tabs.js';
import ValvesTabs from './src/js/valves-tabs.js';
import FilterTabs from './src/js/filter-tabs.js';
import SelectForm from './src/js/select.js';
import Tooltip from './src/js/tooltip.js';
import Form from './src/js/form.js';
import Tabs from './src/js/tabs.js';

document.addEventListener( 'DOMContentLoaded', event => {
    new ValveControllerTabs;
    new ValvesTabs;
    new SelectForm;
    new FilterTabs;
    new Tooltip;
    new Form;
    new Tabs;
});


