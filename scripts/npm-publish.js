const shell = require('shelljs')

const run = async () => {
  if (shell.exec('npm publish').code !== 0) {
    shell.exit(1)
  }
}

run()
