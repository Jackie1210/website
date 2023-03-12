import { Footer } from '../Footer'
import { Header } from '../header'
import type { FC, PropsWithChildren } from 'react'

import './index.less'

export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}