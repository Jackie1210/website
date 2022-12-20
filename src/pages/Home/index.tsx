import { Footer } from '@/components/Footer'
import logo from '@/assets/logo.jpeg'

import './index.less'

export const Home = () => {
  return (
    <main>
      <h1 class='home__name'>
        <img src={logo} class="home__logo"></img>
        @Lynn
      </h1>
      <Footer />
    </main>
  )
}