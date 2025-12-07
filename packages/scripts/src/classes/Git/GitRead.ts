import { execSync } from 'node:child_process'
import { Datetime, forEach } from '@dxtmisha/functional'

import { type GitFileList, GitStatus } from '../../types/gitTypes'

/**
 * Class for reading information from Git repository.
 *
 * Класс для чтения информации из Git репозитория.
 */
export class GitRead {
  /**
   * Gets list of files with their metadata.
   *
   * Получает список файлов с их метаданными.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getList(
    filter?: (file: string) => boolean
  ): GitFileList {
    return forEach(
      this.getFilesPath(),
      (file) => {
        if (
          filter
          && !filter(file)
        ) {
          return
        }
        console.log('this.getFileDate(file)', this.getFileDate(file))
        const date = new Datetime(this.getFileDate(file))
          .setType('full')
          .standard()

        return {
          path: file,
          date,
          status: undefined
        }
      }
    ) as GitFileList
  }

  /**
   * Gets list of files in porcelain format with their metadata.
   *
   * Получает список файлов в формате porcelain с их метаданными.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getListPorcelain(
    filter?: (file: string) => boolean
  ): GitFileList {
    const date = new Datetime()
      .setType('full')
      .standard()

    return forEach(
      this.getFilesPath(),
      (file) => {
        const data = file.split(' ', 2)
        const status = data[0] as GitStatus
        const path: string = data[1] ?? ''

        if (
          filter
          && !filter(path)
        ) {
          return
        }

        return {
          path,
          date,
          status
        }
      }
    ) as GitFileList
  }

  /**
   * Gets list of class files (*.ts in /classes/ directory).
   *
   * Получает список файлов классов (*.ts в директории /classes/).
   */
  static getClassesList(): GitFileList {
    return this.getList(
      file => Boolean(
        file.match('/classes/')
        && file.endsWith('.ts')
      )
    )
  }

  /**
   * Gets list of all file paths in repository.
   *
   * Получает список всех путей файлов в репозитории.
   */
  static getFilesPath(): string[] {
    return forEach(
      this.exec('git ls-tree -r --name-only HEAD').split('\n'),
      file => file.trim()
    )
  }

  /**
   * Gets list of files in porcelain format.
   *
   * Получает список файлов в формате porcelain.
   */
  static getFilesPorcelain(): string[] {
    return forEach(
      this.exec('git status --porcelain').split('\n'),
      file => file.trim()
    )
  }

  /**
   * Gets the date of the last commit for a file.
   *
   * Получает дату последнего коммита для файла.
   * @param filePath - path to file / путь к файлу
   */
  static getFileDate(filePath: string): string {
    return this.exec(`git log -1 --format="%ci" -- "${filePath}"`)
  }

  /**
   * Executes Git command and returns result.
   *
   * Выполняет Git команду и возвращает результат.
   * @param command - command to execute / команда для выполнения
   */
  protected static exec(command: string): string {
    return execSync(command, { encoding: 'utf8' }).trim()
  }
}
