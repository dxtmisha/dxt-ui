import { PropertiesFile } from '../Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../../config'
import { toArray } from '@dxtmisha/functional-basic'

/**
 * Class for working with the package.json file.
 *
 * Класс для работы с файлом package.json.
 */
export class PackageFile {
  protected readonly data?: Record<string, any>

  /**
   * Constructor
   * @param path path to the directory containing package.json / путь к директории, содержащей package.json
   */
  constructor(
    protected readonly path: string | string[]
  ) {
    if (this.is()) {
      this.data = PropertiesFile.readFile(this.getPath()) ?? {}
    }
  }

  /**
   * Checks if the directory is a package (contains package.json).
   *
   * Проверяет, является ли директория пакетом (содержит package.json).
   */
  is(): boolean {
    return PropertiesFile.is(this.getPath())
  }

  /**
   * Checks if the package version matches the specified version.
   *
   * Проверяет, соответствует ли версия пакета указанной версии.
   * @param version version to compare with / версия для сравнения
   */
  isVersionConsistency(version?: string): boolean {
    return Boolean(version) && this.getVersion() === version
  }

  /**
   * Checks if the package is a test package.
   *
   * Проверяет, является ли пакет тестовым.
   */
  isTest(): boolean {
    return this.get()?.['ui-test'] === true
  }

  /**
   * Returns the package data.
   *
   * Возвращает данные пакета.
   */
  get(): Record<string, any> {
    return this.data ?? {}
  }

  /**
   * Returns the package name.
   *
   * Возвращает имя пакета.
   */
  getName(): string {
    return this.get()?.name ?? PropertiesFile.joinPath(this.getDir())
  }

  /**
   * Returns the package version.
   *
   * Возвращает версию пакета.
   */
  getVersion(): string {
    return this.get()?.version ?? '0.0.0'
  }

  /**
   * Returns the package scripts.
   *
   * Возвращает скрипты пакета.
   */
  getScripts(): Record<string, string> {
    return this.get()?.scripts ?? {}
  }

  /**
   * Returns the package directory path segments.
   *
   * Возвращает сегменты пути к директории пакета.
   */
  getDir(): string[] {
    return toArray(this.path)
  }

  /**
   * Returns the package path.
   *
   * Возвращает путь к пакету.
   */
  getPath(): string[] {
    return [...this.getDir(), UI_FILE_PACKAGE]
  }

  /**
   * Returns the command name for build or build-recovery.
   *
   * Возвращает название команды для build или build-recovery.
   */
  getCodeBuildOrRecovery(): string | undefined {
    const scripts = this.getScripts()

    if ('build-recovery' in scripts) {
      return 'build-recovery'
    }

    if ('build' in scripts) {
      return 'build'
    }

    return undefined
  }
}
