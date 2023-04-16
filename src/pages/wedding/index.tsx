import { type EffectCallback, useEffect, useRef } from 'react'
import hc from 'html2canvas'
import WeddingLogo from '@/assets/images/wedding-logo.png'
import './index.less'

export const useMount = (effect: EffectCallback) => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      return effect()
    }

    mounted.current = true

    return () => {
      //
    }
  }, [mounted, effect])
}

const Wedding = () => {
  const dom = useRef<HTMLElement>(null)

  useMount(() => {
    if (dom.current) {
      const shouldDownLoad = new URL(location.href).searchParams.has('download')
      if (shouldDownLoad) {
        hc(dom.current).then(canvas => {
          document.body.appendChild(canvas)
          const url = canvas.toDataURL('image/webp')
          download(url)
        })
      }
    }
  })

  const download = (url: string) => {
    const a = document.createElement('a')
    a.download = 'invitation.webp'
    a.href = url
    a.click()
  }

  return (
    <main className='wedding' ref={dom}>
      <img src={WeddingLogo} loading='lazy' alt='wedding logo'/>
      <div className="wedding__main">
        <div className="wedding__card">
          <div className="wedding__card-item">
            <span className='name'>新郎<br />陈龙</span> ❤️
            <span className='name'>新娘<br />杨璐</span>
          </div>
          <div className="wedding__card-item">
            诚挚邀请您来参加我们的结婚典礼<br />来分享我们的喜悦
          </div>
          <div className="wedding__card-item time">
            2023.05.01午宴11:58
          </div>
          <div className="wedding__card-item pos">
            常州市明都枫泽山庄·福鼎楼祥瑞厅
          </div>
        </div>
      </div>
    </main>
  )
}

export default Wedding
