import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Context from './components/Store/Context';
import axios from 'axios'

//axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('token')}`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context>
    <Router>
      <App />
    </Router>
    </Context>
  </React.StrictMode>
);


