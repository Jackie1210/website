import { Container } from './components/container/container'
import Intro from './components/intro/intro'
import { Main } from './components/main/main'

import './index.less'

const Resume = () => {
  return (
    <div className='resume'>
      <Container>
        <>
          <Intro />
          <Main />
        </>
      </Container>
    </div>
  )
}

export default Resume
