import { Footer } from '@/components/Footer'
import logo from '@/assets/logo.jpeg'

import './index.less'

const Home = () => {
  return (
    <main>
      <h1 className='home__name'>
        <img src={logo} className="home__logo" alt="logo" />
        <a href="//github.com/Jackie1210" target="_blank" rel="noreferrer">@Lynn</a>
      </h1>
      <Footer />
    </main>
  )
}

export default Home
