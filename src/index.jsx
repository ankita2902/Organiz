import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(

  
 
  
<Auth0Provider
    domain="dev-kj2y1lapqc1ttdgq.us.auth0.com"
    clientId="Lse8XNTEgrgqoLsGpE2ZqsBIp0Oo5nss"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> <BrowserRouter> <App/> </BrowserRouter></Auth0Provider>
  

  
    
 

);

