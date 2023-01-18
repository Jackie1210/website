import React from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import '@/assets/styles/global.less'


ReactDom.createRoot(document.getElementById('app')!)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
