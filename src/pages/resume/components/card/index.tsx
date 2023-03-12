import type { FC, PropsWithChildren } from 'react'
import { A } from '@/pages/resume/components/common/a'
import './index.less'

interface Props {
  company: string
  job: string
  time: string
  url: string
}

export const Card: FC<PropsWithChildren<Props>> = (props) => {
  const { children, company, job, time, url } = props

  return (
    <div className="resume-card">
      <div className="resume-card__title">
        <span className="resume-card__company">
          <A href={url} target="_blank">{company}</A>
        </span>
        <span className="resume-card__job">{job}</span>
      </div>
      <div className="resume-card__time">{time}</div>
      {children}
    </div>
  )
}