import { routes } from '@/router'
import { useRoutes } from '@solidjs/router'

export function App() {
  const Routes = useRoutes(routes)

  return (
    <div class="App">
      <Routes />
    </div>
  )
}
