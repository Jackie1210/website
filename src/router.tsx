import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/home'
import Resume from '@/pages/resume'

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