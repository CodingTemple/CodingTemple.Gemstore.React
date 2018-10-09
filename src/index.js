import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { gemReducer } from './redux/reducers';

const store = createStore(gemReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// if(module.hot) {
//   module.hot.accept();
// }