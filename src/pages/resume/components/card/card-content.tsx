import type { FC, PropsWithChildren } from 'react'
import type { ExpContent } from '@/schema/resume'
import './card-content.less'

export const CardContent: FC<PropsWithChildren<ExpContent>> = (props) => {
  const { title, data, children } = props

  return (
    <div className='resume-card-content'>
      {title && <p>{title}</p>}
      {children || (
          <ul>
            {(data || []).map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}