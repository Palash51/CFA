import React from 'react';
import '@innovaccer/design-system/css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes';
import FarmerDetails from './routes/Farmers/FarmerDetails';

function App() {
  return (
    <BrowserRouter>

      {/* <Home /> */}
      <Route path="/farmer:/id" exact={true} component={FarmerDetails} />
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;
