import './index.less'

import { Block } from '@/pages/resume/components/block/block'
import { Card } from '@/pages/resume/components/card/index'
import { Education } from '@/pages/resume/components/education/index'
import { Stack } from '@/pages/resume/components/stack/index'
import { Review } from '@/pages/resume/components/review/index'
import { CardContent } from '@/pages/resume/components/card/card-content'

const Experiences = [
  {
    props: {
      company: 'Bilibili',
      job: '高级前端开发工程师',
      time: '2021.4~现在',
      url: 'https://www.bilibili.tv'
    },
    data: [
      {
        title: 'Web站',
        data: [
          '作为国际版Web站的核心开发之一，参与Web站从0-1的重构，基于vite+vue3+TS进行SSR开发。',
          '独立负责国际版播放器的重构及迭代工作，建立质量看板，保证百万DAU下核心播放页面的稳定性，推进与主站播放器团队的协作及后续架构。',
          '独立搭建国际版登录包，提升整体登录率；抽出登录SDK，赋能国际版其他业务线；建立看板监控登录成功率。',
          '基于pnpm+monorepo管理基础组件库+业务组件库，赋能国际版前端所有业务线。',
          '负责支付SDK、广告商业化的方案设计及实现。'
        ]
      },
      {
        title: '审核后台',
        data: ['基于vue3+element-plus完成国际版审核后台从0到1的搭建工作，保证国际版业务的内容安全，为审核同学提效。']
      }
    ]
  },
  {
    props: {
      company: '携程',
      job: '高级前端开发工程师',
      time: '2019.6~2021.4',
      url: 'https://trip.com'
    },
    data: [
      {
        data: [
          '独立负责智行铁友小程序火车票业务线的前端开发工作，保证需求的稳定迭代与维护。',
          '基于公司基建搭建内部接口，对小程序内部错误进行打点，方便错误追踪。',
          '基于vue2开发营销h5，助力业务增长。'
        ]
      }
    ]
  },
]

export const Main = () => {
  return (
    <main className="resume-main">
      <Block title={'工作经历'}>
        {Experiences.map((exp, i) => (
          <Card key={i} {...exp.props}>
            {exp.data.map((d, x) => (
              <CardContent {...d} key={x} />
            ))}
          </Card>
        ))}
      </Block>
      <Block title={'教育经历'}>
        <Education />
      </Block>
      <Block title={'技能'}>
        <Stack />
      </Block>
      <Block title={'自我评价'}>
        <Review />
      </Block>
    </main>
  )
}