import type { FC, PropsWithChildren } from 'react'
import './index.less'

export const Block: FC<PropsWithChildren<{
  title: string
}>> = (props) => {
  const { children, title } = props
  return (
    <div className="resume-block">
      <h4 className="resume-block__title">{title}</h4>
      <div className="resume-block__desc">
        {children}
      </div>
    </div>
  )
}