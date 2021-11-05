import React from 'react';
import '@innovaccer/design-system/css';
import { Provider } from 'react-redux'
import store from './reducers/store';
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
