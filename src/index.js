import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useLocation, BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Wrapper>
      <App />
    </Wrapper>
  </BrowserRouter>);



