import logo from '@/assets/logo.jpeg'
import './index.less'

export interface Props {
  showResume?: boolean
}
export const Header = ({ showResume = true }: Props) => {
  const handleClick = () => {
    window.location.href = 'https://clynn.xyz'
  }

  return (
    <header className="header">
      <img
        src={logo}
        className="home__logo"
        alt="logo"
        onClick={handleClick}
      />
      {showResume && <div className="header__right">
        <a href="/resume" target="_blank" >简历</a>
      </div>}
    </header>
  )
}