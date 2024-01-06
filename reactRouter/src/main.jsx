import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './components/home/Home'
import About from './components/about/About'
import ContactUs from './components/Contact/ContactUs'
import { User } from './components/User/User'
import { GitHub, githubInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
        
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "Contact",
//         element:<ContactUs/>
// }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>} />
<Route path='about' element={<About/>} />
<Route path='contact' element={<ContactUs/>} />
<Route path='User/:userId' element={<User/>} />
{/* <Route path='github' element={<GitHub/>} /> */}
      <Route loader={githubInfoLoader} path='github' element={<GitHub/>} />
    </Route>
  )
)
// console.log(router);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
