import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

//2nd-way

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/*root Outlet */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      {/* route nesting is possible by making closing route and inside that route make new route and give path and element */}
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      {/* dynamic value */}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* routerprovider is wrapper needs router */}
  </StrictMode>,
)
