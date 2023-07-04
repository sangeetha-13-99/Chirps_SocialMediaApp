import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { makeServer } from './server.js';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
// import './index.css';



// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
