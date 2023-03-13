import type { FC } from 'react'

export interface Props {
  background: string
  actions: string | string[]
  result: string
}

export const ProjInfo: FC<Props> = props => {
  const { background, actions, result } = props



  return (
    <ul>
      <li><strong>项目背景: </strong>{background}</li>
      <li>
        <strong>具体实践: </strong>
        <ul>
          {
            (Array.isArray(actions) ? actions : [actions]).map((v, i) => (
              <li key={i}>{v}</li>
            ))
          }
        </ul>
      </li>
      <li><strong>具体结果: </strong>{result}</li>
    </ul>
  )
}