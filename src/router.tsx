import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import App from '@/App'

const Home = React.lazy(() => import('@/pages/home'))
const Resume = React.lazy(() => import('@/pages/resume'))
const Marry = React.lazy(() => import('@/pages/marry'))
const Wedding = React.lazy(() => import('@/pages/wedding'))
const Sponsor = React.lazy(() => import('@/pages/sponsor'))

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
        path: 'sponsor',
        element: <Sponsor />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'juicelu',
        element: <Marry />
      },
      {
        path: 'wedding',
        element: <Wedding />
      }
    ]
  }
])