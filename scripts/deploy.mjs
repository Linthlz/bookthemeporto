// Menerbitkan folder dist/ ke branch gh-pages (GitHub Pages).
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const run = (cmd, cwd = 'dist') => execSync(cmd, { cwd, stdio: 'inherit' })
const remote = execSync('git remote get-url origin').toString().trim()

writeFileSync('dist/.nojekyll', '')
run('git init -q -b gh-pages')
run('git add -A')
run('git commit -q -m "Deploy ke GitHub Pages"')
run(`git push -f ${remote} gh-pages`)
console.log('Terbit ke branch gh-pages.')
