import { toArray, toKebabCase, transformation } from '@dxtmisha/functional'

import requireFs from 'fs'
import requirePath from 'path'
import { UI_FILE_INDEX, UI_MODULES, UI_PROJECT_NAME } from '../../config'

export type PropertiesFilePath = string | string[]
export type PropertiesFileValue<T = any> = string | Record<string, T>

/**
 * A class for working with files.
 *
 * Класс для работы с файлами.
 */
export class PropertiesFile {
  protected static root: string
  protected static module: boolean

  /**
   * The fs.existsSync() method is used to synchronously check if a file already
   * exists in the given path or not. It returns a boolean value which indicates
   * the presence of a file.
   *
   * Метод fs.existsSync() используется для синхронной проверки наличия файла в
   * указанном пути. Он возвращает логическое значение, которое указывает на
   * наличие файла.
   * @param path it holds the path of the file that has to be checked /
   * это содержит путь к файлу, который необходимо проверить
   */
  static is(path: PropertiesFilePath): boolean {
    return requireFs.existsSync(this.joinPath(path))
  }

  /**
   * Checks whether it is a directory.
   *
   * Проверяет, является ли это директорией.
   * @param path name of the element being checked/ название проверяемого элемента
   */
  static isDir(path: PropertiesFilePath): boolean {
    if (this.is(path)) {
      return requireFs.statSync(this.joinPath(path))?.isDirectory() ?? false
    }

    return !this.joinPath(path).match(/\.\w+$/)
  }

  /**
   * Determines whether the package is connected as a module.
   *
   * Определяет, является ли пакет подключенным как модуль.
   */
  static isModule(): boolean {
    return this.module
  }

  /**
   * The path.joinPath() method joins all given path segments together using the
   * platform-specific separator as a delimiter, then normalizes the resulting path.
   *
   * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
   * специфического для платформы разделителя в качестве разделителя,
   * а затем нормализует полученный путь.
   * @param path a sequence of path segments/ последовательность сегментов пути
   */
  static joinPath(path: PropertiesFilePath): string {
    return requirePath.join(...toArray(path))
  }

  /**
   * Getting the path to the file by its name and the path to the directory.
   *
   * Получение пути к файлу по его названию и пути к директории.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static joinPathByName(
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): string {
    return this.joinPath([...toArray(path), this.getFileName(name, extension)])
  }

  /**
   * Returns the root path.
   *
   * Возвращает корневой путь.
   */
  static getRoot(): string {
    return this.root
  }

  /**
   * Returns the root project path
   *
   * Возвращает корневой путь проекта
   * @param rootProject root project path/ путь к корневому проекту
   * @param maxDepth maximum depth of search for the root project/ максимальная глубина поиска корневого проекта
   */
  static getRootProject(
    rootProject: string = this.root,
    maxDepth: number = 10
  ): string | undefined {
    const path = this.joinPath([rootProject, UI_MODULES, UI_PROJECT_NAME])

    if (this.readDir(path).length > 0) {
      return path
    } else if (
      rootProject.match(requirePath.sep)
      && maxDepth > 0
    ) {
      return this.getRootProject(
        rootProject.replace(/\/[^/]+$/, ''),
        maxDepth - 1
      )
    }

    return undefined
  }

  static getDirname(): string {
    return __dirname
  }

  /**
   * Returns the file name.
   *
   * Возвращает имя файла.
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getFileName(
    name: string,
    extension = 'json'
  ): string {
    if (extension && extension !== '') {
      return `${toKebabCase(name)}.${extension}`
    } else {
      return name
    }
  }

  /**
   * Returns the path to the directory, removing the file name from the path.
   *
   * Возвращает путь к директории, убрав название файла из пути.
   * @param path path to the file/ путь к файлу
   */
  static getPathDir(path: PropertiesFilePath): string {
    if (this.isDir(path)) {
      return this.joinPath(path)
    } else {
      return requirePath.dirname(this.joinPath(path))
    }
  }

  /**
   * Returns the path to the file.
   *
   * Возвращает путь к файлу.
   * @param path path to the file/ путь к файлу
   * @param name element name/ название элемента
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  static getPathFile(
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): string[] {
    return [...toArray(path), this.getFileName(name, extension)]
  }

  /**
   * The method splits the path into an array of components.
   *
   * Метод разбивает путь на массив компонентов.
   * @param path path to the directory/ путь к директории
   */
  static splitForDir(path: PropertiesFilePath): string[] {
    const dir = this.isDir(path) ? path : this.parse(path)?.dir
    return (this.joinPath(dir || '')).split(requirePath.sep)
  }

  /**
   * Method returns an object whose properties represent significant elements of the path.
   *
   * Метод возвращает объект, свойства которого представляют существенные элементы пути.
   * @param path filename/ имя файла
   */
  static parse(path: PropertiesFilePath): requirePath.ParsedPath {
    return requirePath.parse(this.joinPath(path))
  }

  /**
   * Returns the directory separator symbol.
   *
   * Возвращает символ разделителя директории.
   */
  static sep(): string {
    return requirePath.sep
  }

  /**
   * Getting information about the file.
   *
   * Получение информации о файле.
   * @param path path to the file/ путь к файлу
   */
  static stat(path: PropertiesFilePath): requireFs.Stats | undefined {
    if (this.is(path)) {
      return { ...requireFs.statSync(this.joinPath(path)) }
    }

    return undefined
  }

  /**
   * Reads the contents of the directory.
   *
   * Читает содержимое директории.
   * @param path path to the directory/ путь к директории
   */
  static readDir(path: PropertiesFilePath): string[] {
    return this.is(path) ? requireFs.readdirSync(this.joinPath(path)) : []
  }

  /**
   * Reads the contents of the directory recursively.
   *
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirRecursive(
    path: PropertiesFilePath
  ): string[] {
    return this
      .readDirAndFileRecursive(path)
      .filter(paths => !this.isDir(paths))
  }

  /**
   * Reads the contents of the directory recursively.
   *
   * Читает содержимое директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirRecursiveWithIndex(
    path: PropertiesFilePath
  ): string[] {
    return this
      .readDirAndFileRecursive(path, undefined, true)
      .filter(paths => !this.isDir(paths))
  }

  /**
   * Reads only directories recursively.
   *
   * Читает только директории рекурсивно.
   * @param path path to the directory/ путь к директории
   */
  static readDirOnlyRecursive(
    path: PropertiesFilePath
  ): string[] {
    return this
      .readDirAndFileRecursive(path)
      .filter(paths => this.isDir(paths))
  }

  /**
   * Reads the contents of the directory and files recursively.
   *
   * Читает содержимое директории и файлы рекурсивно.
   * @param path path to the directory/ путь к директории
   * @param fullPath full path for recursion/ полный путь для рекурсии
   * @param isIndex whether to include the root directory in the list/ включать ли корневую директорию в список
   */
  static readDirAndFileRecursive(
    path: PropertiesFilePath,
    fullPath: PropertiesFilePath = [],
    isIndex: boolean = false
  ): string[] {
    const dirs = this.readDir(path)
    const data: string[] = []

    dirs.forEach((dir) => {
      const paths = [...path, dir]
      const fullPaths = [...fullPath, dir]

      data.push(this.joinPath(fullPaths))

      if (this.isDir(paths)) {
        if (
          isIndex
          && this.is([...paths, UI_FILE_INDEX])
        ) {
          data.push(this.joinPath([...fullPaths, UI_FILE_INDEX]))
        } else {
          data.push(...this.readDirAndFileRecursive(
            paths,
            [...fullPath, dir]
          ))
        }
      }
    })

    return data
  }

  /**
   * Returns the contents of the path.
   *
   * Возвращает содержимое пути.
   * @param path filename/ имя файла
   */
  static readFile<R>(path: PropertiesFilePath): R | undefined {
    if (this.is(path)) {
      return transformation(
        requireFs.readFileSync(this.joinPath(path)).toString()
      )
    }

    return undefined
  }

  /**
   * Returns the content of the file, without converting the value.
   *
   * Возвращает содержимое файла, без преобразования значения.
   * @param path filename/ имя файла
   */
  static readFileOnly(path: PropertiesFilePath): string | undefined {
    if (this.is(path)) {
      return requireFs.readFileSync(this.joinPath(path)).toString()
    }

    return undefined
  }

  /**
   * Synchronously creates a directory.
   *
   * Синхронно создает директорию.
   * @param path path to the directory/ путь к директории
   */
  static createDir(path: PropertiesFilePath): void {
    const dir: string[] = [this.root]

    this.splitForDir(this.removeRootInPath(path)).forEach((name) => {
      dir.push(name)
      if (!this.is(dir)) {
        requireFs.mkdirSync(this.joinPath(dir))
      }
    })
  }

  /**
   * Writing data to a file.
   *
   * Запись данных в файл.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param value values for storage/ значения для хранения
   * @param extension file extension by default is ts/ расширение файла по умолчанию - ts
   */
  static write<T extends PropertiesFileValue>(
    path: PropertiesFilePath,
    name: string,
    value: T,
    extension = 'json'
  ): void {
    this.writeByPath(
      this.joinPathByName(path, name, extension),
      value
    )
  }

  /**
   * Writes to the selected path.
   *
   * Записывает по выбранному пути.
   * @param path path to the file/ путь к файлу
   * @param value values for storage/ значения для хранения
   */
  static writeByPath<T extends PropertiesFileValue>(
    path: PropertiesFilePath,
    value: T
  ): void {
    this.createDir(path)

    requireFs.writeFileSync(
      this.joinPath(path),
      typeof value === 'object' ? JSON.stringify(value) : value
    )
  }

  /**
   * Copy a file from the source path to the destination path.
   *
   * Копирования файла из исходного пути в целевой путь.
   * @param path path to the file/ путь к файлу
   * @param pathsSrc source filename to copy/ исходное имя файла для копирования
   */
  static copy(
    path: PropertiesFilePath,
    pathsSrc: PropertiesFilePath
  ): void {
    this.createDir(path)

    requireFs.copyFileSync(
      this.joinPath(pathsSrc),
      this.joinPath(path)
    )
  }

  /**
   * Directory deletion.
   *
   * Удаление директории.
   * @param path path to the directory/ путь к директории
   */
  static removeDir(
    path: PropertiesFilePath
  ): void {
    if (this.isDir(path)) {
      requireFs.rmSync(this.joinPath(path), {
        recursive: true,
        force: true
      })
    }
  }

  /**
   * File deletion.
   *
   * Удаление файла.
   * @param path path to the file/ путь к файлу
   */
  static removeFile(
    path: PropertiesFilePath
  ): void {
    if (this.is(path)) {
      requireFs.unlinkSync(this.joinPath(path))
    }
  }

  static rename(
    path: PropertiesFilePath,
    newPath: PropertiesFilePath
  ): void {
    requireFs.renameSync(
      this.joinPath(path),
      this.joinPath(newPath)
    )
  }

  /**
   * Changing file permissions.
   *
   * Изменение прав доступа к файлу.
   * @param path path to the file/ путь к файлу
   * @param mode file permissions/ права доступа к файлу
   */
  static chmod(
    path: PropertiesFilePath,
    mode: string | number = 0o755
  ): void {
    requireFs.chmodSync(
      this.joinPath(path),
      mode
    )
  }

  /**
   * Removing root from the path.
   *
   * Удаление root из пути.
   * @param path path to the directory/ путь к директории
   */
  private static removeRootInPath(path: PropertiesFilePath): string {
    return this.joinPath(path)
      .replace(`${this.root}${requirePath.sep}`, '')
      .replace(`${this.root}`, '')
  }

  static {
    this.module = Boolean(__dirname.match('node_modules'))
    this.root = process.cwd()
  }
}
