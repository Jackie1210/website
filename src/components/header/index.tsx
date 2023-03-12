import logo from '@/assets/logo.jpeg'
import './index.less'

export const Header = () => {
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
      <div className="header__right">
        <a href="/resume" target="_blank" >简历</a>
      </div>
    </header>
  )
}