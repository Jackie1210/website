import './index.less'

export function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer>
      <span class="footer">
        <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> {year} © Lynn
      </span>
    </footer>
  )
}
