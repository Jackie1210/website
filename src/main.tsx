import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { inject } from '@vercel/analytics'
import '@/assets/styles/global.less'
import { App } from './App'

inject({
  mode: import.meta.env.PROD ? 'production' : 'development'
})

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('app')!)
