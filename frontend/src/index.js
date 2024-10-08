import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './store/store';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import reduxStore from './redux/reduxStore.js';

const store = new Store();

export const Context = createContext({
  store
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider value={{
      store
    }}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Context.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
