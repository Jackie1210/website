import { ProjInfo } from './item'
import type { Props as ProjProps } from './item'
import { CardContent } from '@/pages/resume/components/card/card-content'

type Item = {
  title: string
  data: ProjProps
}

const PROJS: Item[] = [
  {
    title: 'Bilibili国际版Web站',
    data: {
      background: '旧的Web站采用webpack+vue2的架构，开发体验差，构建耗时10min以上，SSR整体架构易触发线上问题',
      actions: [
        '采用vite+vue3的架构，并作为核心开发者参与SSR新架构的落地（多环境资源位置隔离，配置中心中转，达到回滚快，发布稳定的目的）',
        '重构播放页核心模块设计，落地播放页新设计',
        '抽离顶导，视频卡片，登录框等业务组件，按钮，弹框，input，popover等基础组件库。',
        '持续优化node中间件。'
      ],
      result: '经过项目重构及后期业务迭代，目前Web站DAU达170w+,其中播放占比70~80%。'
    }
  },
  {
    title: 'Bilibili国际版播放器',
    data: {
      background: '旧的播放器架构语法陈旧，基于DOM操作性能不高，包体积大，业务与主站耦合严重，整体架构视图层和逻辑层耦合严重',
      actions: [
        '引入solid作为视图层的底层UI框架，通过渐进重构，逐步剥离视图层和逻辑层的逻辑。',
        '使用vite对播放器进行构建打包优化，规范化国际版播放器本地开发流程。',
        '播放器核心数据质量指标与主站对齐，并借助埋点落地播放质量看板用于观测。',
        '完善播放器基础功能，弹幕，字幕，广告等能力，在重构Web站中落地新版播放器，并独立维护后期版本迭代。',
        '推进与主站播放器团队的沟通与后续规划建设'
      ],
      result: '播放器包体积由350k+下降至250k,播放器百分钟卡顿率降低至1%，大幅降低播放相关客诉，显著提升播放体验。'
    }
  },
  {
    title: '基础设施组件及SDK',
    data: {
      background: '国际版前端基础设施建设羸弱，复用率低，版本迭代混乱',
      actions: [
        '采用pnpm+monorepo的模式搭建组件库+基础SDK库',
        '优化版本迭代，多库版本隔离',
        '规范库构建模式及开发模式',
        '抽离国际版登录库+登录SDK，补全并完善扫码登录，三方登录模式；并落地登录质量看板用于观测',
        '抽离国际版支付SDK，并在Web站及直播业务先落地。'
      ],
      result: '组件库及SDK库中心化，使得业务同学可以专注业务，赋能直播，创作中心，Web站等业务线；登录库的抽离及完善使得登录成功率稳定至70%以上；支付成功率提升30%，订单量激增，效果显著。'
    }
  }
]

export const Projs = () => {
  return (
    <>
      {PROJS.map((v, i) => (
        <CardContent title={v.title} key={i}>
          <ProjInfo {...v.data} />
        </CardContent>
      ))}
    </>
  )
}