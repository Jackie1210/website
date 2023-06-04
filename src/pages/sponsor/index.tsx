import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Layout } from '@/components/layout'
import Ali from '@/assets/images/alipay.png'
import Wechat from '@/assets/images/wechatpay.png'

import './index.less'

const Sponsor = () => {
  const [id, setId] = useState('ali')
  const [payment, setPayment] = useState({ title: 'Alipay', logo: Ali, id: 'ali' })
  const list = [
    { title: 'AliPay', logo: Ali, id: 'ali' },
    { title: 'WechatPay', logo: Wechat, id: 'wechat' }
  ]

  useEffect(() => {
    setPayment(() => list.find(v => v.id === id)!)
  }, [id])

  return (
    <Layout showResume={false}>
      <section className='sponsor'>
        <div className='sponsor__introduction'>Hi there! I am lynn who is a passionate open-source contributor.I am contributing to <a href="//github.com/vercel/satori" target='__blank'>satori</a> during my free time. If my work did help you, please think about sponsor me by below payment badges so that I can keep making meaningful contributions to make community better and benefit us all ❤️</div>
        <ul>
          {list.map(l => (
            <li key={l.title} onClick={() => setId(l.id)} className={clsx('sponsor__item', { 'sponsor__item--active': id === l.id })}>
              {l.title}
            </li>
          ))}
        </ul>
        <img src={payment.logo} alt={payment.title} />
      </section>
    </Layout>
  )
}

export default Sponsor