import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)