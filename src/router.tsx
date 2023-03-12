import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import App from '@/App'

const Home = React.lazy(() => import('@/pages/home'))
const Resume = React.lazy(() => import('@/pages/resume'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
])