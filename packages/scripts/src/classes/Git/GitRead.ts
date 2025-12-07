import { execSync } from 'node:child_process'

export class GitRead {
  static getList() {

  }

  static getFiles() {
    const log = execSync(
      'git log --name-only --format="%H|%ci"',
      { encoding: 'utf8' }
    )

    console.log(log)

    /* const result = {} // file → date

    const lines = log.split('\n')

    let currentDate = null

    for (const line of lines) {
      if (!line.trim()) continue

      if (line.includes('|')) {
        // Это строка коммита
        const [, date] = line.split('|')
        currentDate = date.trim()
      } else {
        // Это файл
        const file = line.trim()
        if (!result[file]) {
          result[file] = currentDate // берём только самый первый (последний коммит)
        }
      }
    }

    return Object.entries(result).map(([file, lastUpdate]) => ({
      file,
      lastUpdate
    })) */
  }
}
