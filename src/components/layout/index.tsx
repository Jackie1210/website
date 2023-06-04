import { Footer } from '../Footer'
import { Header } from '../header'
import type { Props as HeaderProps } from '../header'
import type { FC, PropsWithChildren } from 'react'

import './index.less'

export const Layout: FC<PropsWithChildren<HeaderProps>> = (props) => {
  const { children, showResume } = props

  return (
    <div className="layout">
      <Header showResume={showResume} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}