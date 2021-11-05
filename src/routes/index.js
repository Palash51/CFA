import React from "react";
import { useHistory, BrowserRouter ,Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from '../components/common/PrivateRoute';
import Home from './Home';
import Farmers from "./Farmers";
import Company from './Company';
import FarmerDetails from './Farmers/FarmerDetails';
import WorkInProgress from './wip'

const history = createHistory();   


export default () => {
  return (
  <BrowserRouter basename="/CFA">
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
        <PrivateRoute
          layout={Home}
          exact={true}
          path="/timeline"
          pageTitle="WIP"
          render={(props) => <WorkInProgress {...props} />}
        />
         <PrivateRoute
          layout={Home}
          exact={true}
          path="/stats"
          pageTitle="WIP"
          render={(props) => <WorkInProgress {...props} />}
        />
         <PrivateRoute
          layout={Home}
          exact={true}
          path="/plans"
          pageTitle="WIP"
          render={(props) => <WorkInProgress {...props} />}
        />
        <PrivateRoute
            layout={Home}
            exact={true}
            path="/inventory"
            pageTitle="WIP"
            render={(props) => <WorkInProgress {...props} />}
          />
          <PrivateRoute
            layout={Home}
            exact={true}
            path="/form"
            pageTitle="WIP"
            render={(props) => <WorkInProgress {...props} />}
          />
          <PrivateRoute
            layout={Home}
            exact={true}
            path="/claims"
            pageTitle="WIP"
            render={(props) => <WorkInProgress {...props} />}
          />
          <PrivateRoute
            layout={Home}
            exact={true}
            path="/profile"
            pageTitle="WIP"
            render={(props) => <WorkInProgress {...props} />}
          />
          <PrivateRoute
            layout={Home}
            exact={true}
            path="/documents"
            pageTitle="WIP"
            render={(props) => <WorkInProgress {...props} />}
          />
          
      </Switch>
  </BrowserRouter>
)
};
