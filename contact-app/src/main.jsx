import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import './index.css'
import Contact from './routes/contact'
import Root from './routes/Root'

// Here we had created the router
const router = createBrowserRouter([
  
  {
    // This is the
    path:"/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    Children:[
      {
        path: "contacts/:contactId",
        element: <Contact/>
       }
  ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
