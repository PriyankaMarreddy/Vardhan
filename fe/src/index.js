import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Template from './pages/Home1';
import ScrollToTop from './components/scrollToTop';
ReactDOM.render(
    <>
       {/* <Template/> */}
       <BrowserRouter>
       <ScrollToTop />
       <App/>
       </BrowserRouter>
    </>,
  document.getElementById('root')
);

