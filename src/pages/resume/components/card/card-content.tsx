import type { FC } from 'react'
import type { ExpContent } from '@/schema/resume'
import './card-content.less'

export const CardContent: FC<ExpContent> = (props) => {
  const { title, data } = props

  return (
    <div className='resume-card-content'>
      {title && <p>{title}</p>}
      <ul>
        {data.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  )
}