// Invoked on the commit-msg git hook by yorkie.

import { readFileSync } from 'fs'
import path from 'path'
import color from 'picocolors'
const msgPath = path.resolve(__dirname, '../.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(
    `  ${color.bgRed(' ERROR ')} ${color.red(
      `invalid commit message format.`
    )}\n\n${ 
      color.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) 
      }    ${color.green(`feat: add 'comments' option`)}\n` +
      `    ${color.green(`fix: handle events on blur (close #28)`)}\n\n${ 
      color.red(`  See .github/commit-convention.md for more details.\n`)}`
  )
  process.exit(1)
}
