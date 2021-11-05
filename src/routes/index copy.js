import React from "react";
import { useHistory, BrowserRouter ,Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from '../components/common/PrivateRoute';
import Home from './Home';
import Farmers from "./Farmers";
import Company from './Company';
import FarmerDetails from './Farmers/FarmerDetails';

const history = createHistory();   


export default () => (
  <BrowserRouter>
      <Switch>
        <PrivateRoute
            layout={Home}
            exact={true}
            path="/farmers"
            pageTitle="Farmers"
            render={(props) => <Farmers {...props} />}
          />
        <PrivateRoute
            layout={Home}
            exact={true}
            path="/farmers/:id"
            pageTitle="Farmer"
            render={(props) => <FarmerDetails {...props} />}
          />
        <PrivateRoute
            layout={Home}
            exact={true}
            path="/"
            pageTitle="Dashboard"
            render={(props) => <Company {...props} />}
          />
      </Switch>
  </BrowserRouter>
)
