import './index.less'

interface Props {
  list: string[]
}

export const Info = (props: Props) => {
  return (
    <ul className="resume-info">
      {props.list.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  )
}