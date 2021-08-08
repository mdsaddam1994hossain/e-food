import React from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoute from './container/MyRoute';

const App = () => {
  return (
    <div>

        <Router>
            <MyRoute  />
        </Router>
        
    </div>
  );
};

export default App;
