import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router} from 'react-router-dom'
import App from './Router/App';
import { Provider } from "react-redux"
import { store } from './App/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
       <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
