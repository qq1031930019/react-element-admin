import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routerMap from './routerConfig'
import RouterFilter from './routerFilter'

const routerMain = () => (
    <Router>
        <Switch>
            <RouterFilter config={routerMap} />
        </Switch>
    </Router>
);
export default routerMain;