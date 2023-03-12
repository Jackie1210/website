import type { FC } from 'react'
import './card-content.less'

interface Props {
  title?: string
  data: string[]
}

export const CardContent: FC<Props> = (props) => {
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