import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contactus.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'
import github from './components/githubloader.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, 
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactus",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Home' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='User/:userid' element={<User/>}/>
    <Route path='Github' element={<Github/>}/>    
    <Route path='Githubloader' element={<Githubloader/>}/> </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)