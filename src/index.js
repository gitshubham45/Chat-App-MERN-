import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ChatProvider from './Context/ChatProvider';

const domNode = document.getElementById('root');
const root = createRoot(domNode);


root.render
(<ChatProvider>
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
</ChatProvider>);



