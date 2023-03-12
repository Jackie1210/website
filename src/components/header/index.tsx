import './index.less'

export const Header = () => {
  const handleClick = () => {
    window.location.href = 'https://clynn.xyz'
  }

  return (
    <header className="header">
      <img
        src={'https://cdn.jsdelivr.net/gh/Jackie1210/static/logo.png'}
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