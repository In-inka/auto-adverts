import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GlobalStyle } from 'GlodalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);
