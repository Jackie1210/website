import { Footer } from '@/components/Footer'

import './index.less'

export const Home = () => {
  return (
    <main>
      <h1 className='home__name'>
        <img src="assets/logo.jpeg" class="home__logo"></img>
        @Lynn
      </h1>
      <Footer />
    </main>
  )
}