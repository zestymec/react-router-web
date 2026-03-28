import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

const router = BrowserRouter([
  {
    path : "/"
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>

  </StrictMode>,
)
