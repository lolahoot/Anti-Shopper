import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

import store from "./redux";
import App from './app/components/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
      document.getElementById('root'));
registerServiceWorker();
