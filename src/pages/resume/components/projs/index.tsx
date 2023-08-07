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
      background: '旧的Web站采用webpack+vue2的架构，开发体验差，人效低，发布稳定性差，性能差',
      actions: [
        '【技术选型】接入vue3，优化服务端渲染性能，服务端采用多核多进程渲染。',
        '【技术选型】接入vite，优化DX，提升团队开发人效。',
        '【灰度发布】基于配置中心，赋予SSR灰度发布能力，提高发布稳定性。',
        '【性能优化】深入优化CLS、LCP、TTFB、TBT等核心性能指标，使得google收录优质网址数0% -> 93%。',
        '【稳定性】优化中间件，提升SSR防御能力。'
      ],
      result: '经过项目重构及后期业务迭代，目前Web站DAU达170w+,其中播放占比70~80%。'
    }
  },
  {
    title: 'Bilibili国际版播放器',
    data: {
      background: '旧的播放器架构技术栈落后，基于DOM操作性能不高，包体积大，业务与主站耦合严重，整体架构视图层和逻辑层耦合严重',
      actions: [
        '【技术选型】引入solid作为视图层的底层UI框架，通过渐进重构，逐步剥离视图层和逻辑层的逻辑。',
        '【技术选型】使用vite对播放器进行构建打包优化，规范化国际版播放器本地开发流程。',
        '【数据指标】播放器核心数据质量指标与主站对齐，并借助埋点落地播放质量看板用于观测。',
        '【功能完善】完善播放器基础功能，弹幕，字幕，广告等能力，完成HEVC落地，降低播放带宽，实现降本增效。',
        '【团队协作】独自推进与主站播放器团队的沟通与后续规划建设。'
      ],
      result: '播放器包体积由350k+下降至250k,播放器百分钟卡顿率降低至1%，大幅降低播放相关客诉，显著提升播放体验。'
    }
  },
  {
    title: '基础设施组件及SDK',
    data: {
      background: '国际版前端基础设施建设羸弱，复用率低，版本迭代混乱',
      actions: [
        '【技术选型】采用pnpm+monorepo的模式搭建组件库+基础SDK库',
        '【规范性】规范库构建模式及开发模式',
        '【登录模块】抽离国际版登录库+登录SDK，补全并完善扫码登录，三方登录模式；并落地登录质量看板用于观测',
        '【支付模块】抽离国际版支付SDK，并在Web站及直播业务先落地。'
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