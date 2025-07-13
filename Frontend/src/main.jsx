import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './context/AuthContextProvider.jsx'

 
createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
         <BrowserRouter>
      <ChakraProvider>
        <App />
     </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
   
    
)
 