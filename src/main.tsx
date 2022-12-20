import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import '@/assets/styles/global.less'
import { App } from './App'

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('app')!)
