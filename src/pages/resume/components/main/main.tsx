import './index.less'

import { Block } from '@/pages/resume/components/block/block'
import { Card } from '@/pages/resume/components/card/index'
import { Education } from '@/pages/resume/components/education/index'
import { Projs } from '@/pages/resume/components/projs'
import { CardContent } from '@/pages/resume/components/card/card-content'
import { OpenSource } from '@/pages/resume/components/open-source'
import { Info } from '@/pages/resume/components/info'
import { EXPS, REVIEW, STACK } from '@/pages/resume/constants/data'

export const Main = () => {
  return (
    <main className="resume-main">
      <Block title={'工作经历'}>
        {EXPS.map((exp, i) => (
          <Card key={i} {...exp.header}>
            {exp.data.map((d, x) => (
              <CardContent {...d} key={x} />
            ))}
          </Card>
        ))}
      </Block>
      <Block title={'项目经验'}>
        <Projs />
      </Block>
      <Block title={'开源'}>
        <OpenSource />
      </Block>
      <Block title={'教育经历'}>
        <Education />
      </Block>
      <Block title={'技能'}>
        <Info list={STACK}/>
      </Block>
      <Block title={'自我评价'}>
        <Info list={REVIEW}/>
      </Block>
    </main>
  )
}