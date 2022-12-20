import type { ParentComponent } from 'solid-js'
import { Footer } from '@/components/Footer'
import logo from '@/assets/logo.jpeg'

import './index.less'

const Home: ParentComponent = () => {
  return (
    <main>
      <h1 class='home__name'>
        <img src={logo} class="home__logo" alt="logo" />
        <a href="//github.com/Jackie1210" target="_blank">@Lynn</a>
      </h1>
      <Footer />
    </main>
  )
}

export default Home
