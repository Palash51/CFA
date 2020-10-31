import React from 'react';
import '@innovaccer/design-system/css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './reducers/store';
import Home from './routes';
import FarmerDetails from './routes/Farmers/FarmerDetails';
import Farmers from './routes/Farmers';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

      <Home />
      
      {/* <Route path="/" exact={true} component={Home} /> */}
      <Route path="/farmers" exact={true} component={Farmers} />
      <Route path="/farmer/:id" exact={true} component={FarmerDetails} />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
