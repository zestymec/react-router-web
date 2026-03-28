import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'

const router = BrowserRouter([
  {
    path : "/" ,
    element : <layout />,
    children : [
      {
        path : "" ,
element: <Home />

      },
      {
        path:"",
        element: <About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>

  </StrictMode>,
)
