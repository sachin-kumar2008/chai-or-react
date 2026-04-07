import React, { Children } from'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Routerprovider,createBrowserRouter } from
'react-router-dom'
import header from './components/header/page.jsx'
import Layout from './Layout.jsx'



const router  = createBrowserRouter([
{
  path:'/' ,
  element: <Layout/>,
  Children: [
    {
      path: "",
      element:<Home/>
    },
    {
      path: "about",
      element: <About/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routerprovider router={router} />
  </StrictMode>,
)
