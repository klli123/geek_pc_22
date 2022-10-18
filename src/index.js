import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/antd.css';
// our own css should be behind the antd.css, to avoid override issues
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

