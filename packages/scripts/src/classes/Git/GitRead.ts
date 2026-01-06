import { execSync } from 'node:child_process'
import { Datetime, forEach, removeCommonPrefix } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'

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
    const dir = this.getDirPrefix()

    return forEach(
      this.getFilesPath(),
      (file) => {
        if (
          filter
          && !filter(file)
        ) {
          return
        }

        const date = this.getDate(this.getFileDate(file))

        return {
          path: file,
          pathByOS: this.splitPath(file),
          pathFull: `${dir}${file}`,
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
    const date = this.getDate()
    const prefix = this.getDirPrefix()

    return forEach(
      this.getFilesPorcelain(),
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

        const pathCommonPrefix = removeCommonPrefix(path, prefix)
        const pathByOS = this.splitPath(pathCommonPrefix)
        const fileDate = PropertiesFile.getTime(pathByOS)

        return {
          path: pathCommonPrefix,
          pathByOS,
          pathFull: path,
          date: fileDate ?? date,
          status
        }
      }
    ) as GitFileList
  }

  /**
   * Gets unique list of files from both standard and porcelain lists.
   *
   * Получает уникальный список файлов из обоих стандартных и porcelain списков.
   * @param filter - file filter function / функция фильтрации файлов
   */
  static getListUnique(
    filter: (file: string) => boolean
  ): GitFileList {
    return this.mergeUnique(
      this.getListPorcelain(filter),
      this.getList(filter)
    )
  }

  /**
   * Gets list of files by directory with .ts extension, excluding test files.
   *
   * Получает список файлов по директории с расширением .ts, исключая тестовые файлы.
   * @param directory - directory path or regex / путь к директории или регулярное выражение
   */
  static getListByDirectory(
    directory: string | RegExp
  ) {
    return this.getListUnique(
      (file: string) => Boolean(
        file.match(directory)
        && file.endsWith('.ts')
        && !file.endsWith('.test.ts')
      )
    )
  }

  /**
   * Gets list of class files (*.ts in /classes/ directory).
   *
   * Получает список файлов классов (*.ts в директории /classes/).
   */
  static getClassesList(): GitFileList {
    return this.getListByDirectory('/classes/')
  }

  /**
   * Gets list of class files (*.ts in /classes/ directory).
   *
   * Получает список файлов классов (*.ts в директории /classes/).
   */
  static getFunctionsList(): GitFileList {
    return this.getListByDirectory('/functions/')
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
   * Gets the directory prefix of the current Git repository.
   *
   * Получает префикс директории текущего Git репозитория.
   */
  static getDirPrefix(): string {
    return this.exec('git rev-parse --show-prefix')
  }

  /**
   * Formats a date string to standard full format.
   *
   * Форматирует строку даты в стандартный полный формат.
   * @param date - date string / строка даты
   */
  static getDate(date?: string): string {
    return new Datetime(date)
      .setType('full')
      .standard()
  }

  /**
   * Filters a list of Git files by the current directory prefix.
   *
   * Фильтрует список файлов Git по префиксу текущей директории.
   * @param list - list of Git files / список файлов Git
   */
  static filterByDirectory(
    list: GitFileList
  ): GitFileList {
    const dir = this.getDirPrefix()

    return list.filter(item => item.pathFull.startsWith(dir))
  }

  /**
   * Merges two lists of Git files, ensuring uniqueness by file path.
   *
   * Объединяет два списка файлов Git, обеспечивая уникальность по пути файла.
   * @param listA - first list to merge / первый список для объединения
   * @param listB - lists to merge / списки для объединения
   */
  static mergeUnique(
    listA: GitFileList,
    listB: GitFileList
  ): GitFileList {
    const list: GitFileList = [...listA]

    forEach(
      listB,
      (itemB) => {
        const exists = list.find(
          itemA => itemA.pathFull === itemB.pathFull
        )

        if (!exists) {
          list.push(itemB)
        }
      }
    )

    return list
  }

  /**
   * Splits a file path into its components.
   *
   * Разбивает путь файла на его компоненты.
   * @param path - file path / путь к файлу
   */
  static splitPath(path: string): string[] {
    return path.split('/').filter(part => part.length > 0)
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
