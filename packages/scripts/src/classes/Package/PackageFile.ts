import { toArray } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { UI_FILE_PACKAGE } from '../../config'

/**
 * Class for working with the package.json file.
 *
 * Класс для работы с файлом package.json.
 */
export class PackageFile {
  /** Parsed package.json data cache / Кэш распарсенных данных package.json */
  protected readonly data?: Record<string, any>

  /**
   * Constructor for PackageFile.
   *
   * Конструктор для PackageFile.
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
   * @returns true if package.json exists in directory / true, если package.json существует в директории
   */
  is(): boolean {
    return PropertiesFile.is(this.getPath())
  }

  /**
   * Checks if the package version matches the specified version.
   *
   * Проверяет, соответствует ли версия пакета указанной версии.
   * @param version version to compare with / версия для сравнения
   * @returns true if versions match / true, если версии совпадают
   */
  isVersionConsistency(version?: string): boolean {
    return Boolean(version) && this.getVersion() === version
  }

  /**
   * Checks if the package is a test package.
   *
   * Проверяет, является ли пакет тестовым.
   * @returns true if package has ui-test flag / true, если пакет имеет флаг ui-test
   */
  isTest(): boolean {
    return this.get()?.['ui-test'] === true
  }

  /**
   * Checks if the package should not be published.
   *
   * Проверяет, не должен ли пакет публиковаться.
   * @returns true if package is marked as private or ui-no-publish / true, если пакет приватный или не подлежит публикации
   */
  isNoPublish(): boolean {
    const data = this.get()
    return data?.['ui-no-publish'] === true || data?.private === true
  }

  /**
   * Returns the package data.
   *
   * Возвращает данные пакета.
   * @returns raw package.json object / сырой объект данных package.json
   */
  get(): Record<string, any> {
    return this.data ?? {}
  }

  /**
   * Returns the package name.
   *
   * Возвращает имя пакета.
   * @returns package name from package.json or directory path / имя пакета из package.json или путь директории
   */
  getName(): string {
    return this.get()?.name ?? PropertiesFile.joinPath(this.getDir())
  }

  /**
   * Returns the package version.
   *
   * Возвращает версию пакета.
   * @returns package version string (default '0.0.0') / строка версии пакета (по умолчанию '0.0.0')
   */
  getVersion(): string {
    return this.get()?.version ?? '0.0.0'
  }

  /**
   * Returns the package scripts.
   *
   * Возвращает скрипты пакета.
   * @returns record of package scripts / объект скриптов пакета
   */
  getScripts(): Record<string, string> {
    return this.get()?.scripts ?? {}
  }

  /**
   * Returns the package directory path segments.
   *
   * Возвращает сегменты пути к директории пакета.
   * @returns array of directory path segments / массив сегментов пути к директории
   */
  getDir(): string[] {
    return toArray(this.path)
  }

  /**
   * Returns the full path segments to package.json.
   *
   * Возвращает полные сегменты пути к файлу package.json.
   * @returns path segments to package.json / сегменты пути к package.json
   */
  getPath(): string[] {
    return [...this.getDir(), UI_FILE_PACKAGE]
  }

  /**
   * Returns the command name for build or build-recovery.
   *
   * Возвращает название команды для build или build-recovery.
   * @returns script name or undefined if none found / имя скрипта или undefined, если не найден
   */
  getCodeBuildOrRecovery(): string | undefined {
    const scripts = this.getScripts()

    if ('prepublishOnly' in scripts) {
      return 'prepublishOnly'
    }

    if ('build-recovery' in scripts) {
      return 'build-recovery'
    }

    if ('build' in scripts) {
      return 'build'
    }

    return undefined
  }

  /**
   * Returns the command name for publish or publish-to-npm.
   *
   * Возвращает название команды для publish или publish-to-npm.
   * @returns command string to publish package / строка команды для публикации пакета
   */
  getCodePublish(): string {
    const scripts = this.getScripts()

    if ('publish-to-npm' in scripts) {
      return 'npm run publish-to-npm'
    }

    return 'npm publish --access public'
  }
}
