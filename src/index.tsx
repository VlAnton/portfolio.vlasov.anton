import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import reportWebVitals from '@/reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Home, Experience, Skills, Contacts } from '@/pages'
import { Layout } from '@/components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

reportWebVitals()
