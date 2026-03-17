// export:none

import { toArray } from '@dxtmisha/functional-basic'

import {
  PropertiesFile,
  type PropertiesFilePath,
  type PropertiesFileValue
} from './PropertiesFile'

const DIR_CACHE = ['.cache']
const DIR_STEP = ['step']
const FILE_SYSTEM = 'system'

type PropertiesCacheList = Record<string, string[]>
type PropertiesCacheSystem = {
  time: number
  files: PropertiesCacheList
  sizes: PropertiesCacheList
}

/**
 * Static orchestrator for managing persistent file caching in the design system.
 * Provides a structured mechanism for storing transformed tokens, tracking file dependencies, and ensuring incremental build performance by avoiding redundant processing.
 *
 * Статический оркестратор для управления постоянным файловым кэшированием в дизайн-системе.
 * Предоставляет структурированный механизм для хранения трансформированных токенов, отслеживания зависимостей файлов и обеспечения производительности инкрементальной сборки за счет исключения повторной обработки.
 */
export class PropertiesCache {
  private static time = 0
  private static readonly files: PropertiesCacheList = {}
  private static readonly sizes: PropertiesCacheList = {}
  private static readonly listenerName: string[] = ['global']

  /**
   * Retrieves data from the cache or executes the callback to regenerate and store it if the cache is missing or outdated.
   *
   * Извлекает данные из кэша или выполняет функцию обратного вызова для регенерации и сохранения данных, если кэш отсутствует или устарел.
   * @param path the logical path structure for the cache file/ логическая структура пути для файла кэша
   * @param name the unique identifier for the cache entry/ уникальный идентификатор записи кэша
   * @param callback the generator function to execute on cache miss/ функция-генератор, выполняемая при отсутствии данных в кэше
   * @param extension the file extension, typically 'json'/ расширение файла, обычно 'json'
   */
  static get<T extends PropertiesFileValue>(
    path: PropertiesFilePath,
    name: string,
    callback: () => T,
    extension = 'json'
  ): T {
    if (
      this.is(path, name, extension)
      && this.isBySystem(name)
    ) {
      return this.readFile<T>(path, name, extension) as T
    }

    this.listenerName.push(name)

    const value = callback()
    this.writeFile(path, name, value, extension)

    this.listenerName.pop()
    this.writeSystem()

    return value
  }

  /**
   * Directly reads a file and registers it as a dependency for the currently active cache listener.
   *
   * Напрямую читает файл и регистрирует его как зависимость для текущего активного слушателя кэша.
   * @param path the path to the file to be read/ путь к считываемому файлу
   */
  static read<R>(path: PropertiesFilePath): R | undefined {
    if (PropertiesFile.is(path)) {
      const value = PropertiesFile.joinPath(path)

      this.listenerName.forEach((name) => {
        if (!(name in this.files)) {
          this.files[name] = [value]
        } else if (this.files?.[name]?.indexOf(value) === -1) {
          this.files[name].push(value)
        }
      })
    }

    return PropertiesFile.readFile<R>(path)
  }

  /**
   * Persists intermediate results to the temporary step-based cache directory.
   *
   * Сохраняет промежуточные результаты во временную директорию пошагового кэша.
   * @param name the name of the cached step result/ название кэшированного результата шага
   * @param value the data structure to persist/ структура данных для сохранения
   */
  static write<T extends PropertiesFileValue>(name: string, value: T): void {
    this.writeFile<T>(DIR_STEP, name, value)
  }

  /**
   * Recursively removes all cached data from the `.cache` directory.
   *
   * Рекурсивно удаляет все кэшированные данные из директории `.cache`.
   */
  static clear(): void {
    PropertiesFile.removeDir(this.getPath([]))
  }

  /**
   * Checks if there are files to read
   *
   * Проверяет наличие файлов для чтения.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  private static is(
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): boolean {
    return PropertiesFile.is(this.getPathName(path, name, extension))
  }

  /**
   * Checks if there are updated files
   *
   * Проверяет, есть ли обновленные файлы.
   * @param name the name of the cache/ название кэша
   */
  private static isBySystem(name = 'global'): boolean {
    let notUpdate = true

    if (name in this.files) {
      this.files?.[name]?.forEach((path) => {
        const stat = PropertiesFile.stat(path)

        if (stat && stat.mtimeMs > this.time) {
          notUpdate = false
          this.console(`Modified file: ${name}, ${path}`)
        }
      })
    }

    return notUpdate
  }

  /**
   * Returns the path to the file
   *
   * Возвращает путь к файлу.
   * @param path path to the file/ путь к файлу
   */
  private static getPath(path: PropertiesFilePath): string[] {
    return [PropertiesFile.getRoot(), ...DIR_CACHE, ...toArray(path)]
  }

  /**
   * Returns the full path to the file
   *
   * Возвращает полный путь к файлу.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  private static getPathName(
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): string[] {
    return PropertiesFile.getPathFile(this.getPath(path), name, extension)
  }

  /**
   * Reads the content of the file
   *
   * Читает содержимое файла.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  private static readFile<R>(
    path: PropertiesFilePath,
    name: string,
    extension = 'json'
  ): R | undefined {
    return PropertiesFile.readFile<R>(this.getPathName(path, name, extension))
  }

  /**
   * Writing data to a file
   *
   * Запись данных в файл.
   * @param path path to the file/ путь к файлу
   * @param name file name/ название файла
   * @param value values for storage/ значения для хранения
   * @param extension file extension by default is json/ расширение файла по умолчанию - json
   */
  private static writeFile<T extends PropertiesFileValue>(
    path: PropertiesFilePath,
    name: string,
    value: T,
    extension = 'json'
  ): void {
    PropertiesFile.write(this.getPath(path), name, value, extension)
  }

  /**
   * Updates the system data and writes them. Executes after saving the cache
   *
   * Обновляет системные данные и записывает их. Выполняется после сохранения кэша.
   */
  private static writeSystem(): void {
    if (this.listenerName.length < 2) {
      this.time = new Date().getTime()

      const data: PropertiesCacheSystem = {
        time: this.time,
        files: this.files,
        sizes: this.sizes
      }

      this.writeFile([], FILE_SYSTEM, data)
      this.console('Writes the system data')
    }
  }

  /**
   * Adding a new message to the console
   *
   * Добавление нового сообщения в консоли.
   * @param text text of the message/ текст сообщения
   */
  private static console(text: string): void {
    console.info('[Cache]', text)
  }

  static {
    const system = this.readFile<PropertiesCacheSystem>([], FILE_SYSTEM)

    if (system) {
      this.time = system.time
      Object.assign(this.files, system.files)
      Object.assign(this.sizes, system.sizes)
    }
  }
}
