import type { FC } from 'react'
import './index.less'

export const Container: FC<{
  children: JSX.Element
}> = (props) => {
  const { children } = props
  return (
    <div className="resume-container">
      {children}
    </div>
  )
}