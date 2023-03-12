import type { ComponentProps } from 'react'

export const A = (props: ComponentProps<'a'>) => {
  const { children } = props

  return (
    <a {...props} className="resume-a">{children}</a>
  )
}