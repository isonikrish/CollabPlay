import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainContextProvider } from './contexts/MainContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <MainContextProvider>
        <App />
      </MainContextProvider>

    </BrowserRouter>
  </QueryClientProvider>,
)
