import type { ExpItem } from '@/schema/resume'

export const STACK = [
  '熟练使用vue3+typescript+less开发大型应用',
  '对于系统设计，API设计，大型项目管理有自己的认识',
  '熟练使用git',
  '熟练使用node',
  '推崇CR, 追求代码质量',
  '熟悉react、solid等技术，ES6+等语法',
]

export const REVIEW = [
  '实干者',
  'owner意识重',
  '用户体验追求者',
  '对于技术有自己的taste',
  '规范制定者'
]

export const EXPS: Array<ExpItem> = [
  {
    header: {
      company: 'Bilibili',
      job: '资深开发工程师',
      time: '2021.4~2023.8',
      url: 'https://www.bilibili.tv'
    },
    data: [
      {
        title: 'Web站',
        data: [
          '【C端】作为国际版Web站的核心开发之一，参与Web站从0-1的重构，基于vite+vue3+TS进行SSR开发。',
          '【播放器】独立负责国际版播放器的重构，保证OGV/UGC播放页的播放稳定性。',
          '【基建】独立输出国际版登录SDK，保障国际版登录成功率',
          '【基建】从0到1输出13个基础组件库，13个业务组件，赋能国际版前端所有业务线',
          '【商业化】负责支付SDK、广告商业化等的基建方案设计及实现',
          '【数据】建设播放质量，登录质量看板监控性能及稳定性'
        ]
      },
      {
        title: '审核后台',
        data: ['基于vue3+element-plus完成国际版审核后台从0到1的搭建工作，保证国际版业务的内容安全，为审核同学提效。']
      }
    ]
  },
  {
    header: {
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