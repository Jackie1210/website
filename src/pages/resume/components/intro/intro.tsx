import { A } from '@/pages/resume/components/common/a'
import './index.less'

const Intro = () => {
  return (
    <div className="resume__intro">
      <h3 className="resume__intro-name">陈龙</h3>
      <div className="resume__intro-job">资深开发工程师</div>
      <div className="resume__intro-email">
        <A href={'mailto:jcignorance@outlook.com'}>jcignorance@outlook.com</A>
      </div>
      <div className="resume__intro-phone">
        <A href={'tel:86+18101840981'}>18101840981</A>
      </div>
      <div className="resume__intro-github">
        github: <A href={'//github.com/Jackie1210'} target='_blank'>Jackie1210</A>
      </div>
    </div>
  )
}

export default Intro
