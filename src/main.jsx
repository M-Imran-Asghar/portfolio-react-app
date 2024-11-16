import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Landing from './Components/Landing.jsx'
import About from './Components/About.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       {/* <Route path='' element={<Landing/>}/> */}
//       <Route path='about' element={<About/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </StrictMode>,
)
