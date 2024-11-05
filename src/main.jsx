import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Route';
import AuthProvider from './provider/AuthProvider';

// tanstak query 
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='bg-[#F5F5F5]'>

      <RouterProvider router={router} />
        </div>
    </AuthProvider>
    </QueryClientProvider>
  
  </StrictMode>,
)
