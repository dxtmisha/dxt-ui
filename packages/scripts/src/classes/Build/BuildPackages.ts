import { run } from '../../functions/run'

import { GitIgnore } from '../Git/GitIgnore'
import { GitRead } from '../Git/GitRead'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageFile } from '../Package/PackageFile'

import { UI_DIR_PACKAGES } from '../../config'

/** Path to build log cache file / Путь к файлу кэша лога сборки */
const UI_BUILD_LOG_FILE = ['.', 'logs', 'ui-build.log.json']

/**
 * Configuration options for BuildPackages.
 *
 * Параметры конфигурации для BuildPackages.
 */
export interface BuildPackagesOptions {
  /** Directory path to packages / Путь к директории пакетов */
  path?: string

  /** Custom build command or script name / Пользовательская команда сборки или имя скрипта */
  code?: string

  /** Custom log file name or path / Пользовательское имя или путь к файлу лога */
  logFile?: string

  /** Whether to compare package modification date in addition to version / Сравнивать ли дату изменения пакета дополнительно к версии */
  date?: boolean
}

/**
 * Cached package build log entry.
 *
 * Запись лога сборки пакета в кэше.
 */
export interface BuildPackageLogItem {
  /** Package version / Версия пакета */
  version: string

  /** Last modification date or commit timestamp / Дата последнего изменения или временная метка коммита */
  date?: string
}

/**
 * Orchestrator for scanning, sorting, and building monorepo packages.
 * Manages build order based on package priorities and tracks build versions via log cache.
 *
 * Оркестратор для сканирования, сортировки и сборки пакетов монорепозитория.
 * Управляет порядком сборки на основе приоритетов пакетов и отслеживает версии сборки через лог-кэш.
 */
export class BuildPackages {
  /** Map of cached package build logs / Карта кэшированных логов сборки пакетов */
  protected log: Record<string, BuildPackageLogItem | string>

  protected readonly path: string
  protected readonly code?: string
  protected readonly logFile?: string
  protected readonly date?: boolean

  /**
   * Constructor initializes packages path, custom build code, custom log file, date comparison flag, and loads build log.
   *
   * Конструктор инициализирует путь к пакетам, пользовательский код сборки, пользовательский файл лога, флаг сравнения дат и загружает лог сборки.
   * @param options configuration options / параметры конфигурации
   */
  constructor(
    protected readonly options: BuildPackagesOptions = {}
  ) {
    this.path = options.path ?? UI_DIR_PACKAGES
    this.code = options.code
    this.logFile = options.logFile
    this.date = options.date
    this.log = PropertiesFile.readFile(this.getLogPath()) ?? {}
  }

  /**
   * Scans the packages directory and builds each package that contains a package.json.
   *
   * Сканирует директорию пакетов и собирает каждый пакет, содержащий package.json.
   */
  async make(): Promise<void> {
    const list = this.getList()
    let changed = 0

    console.info(`Build packages(${list.length})...`)

    for (const packageFile of list) {
      if (
        this.isUpdate(packageFile)
        && await this.build(packageFile)
      ) {
        this.updateLog(packageFile)
        changed++
      }
    }

    this.saveLog()
    this.initGitIgnore()

    if (changed > 0) {
      console.info(`Build packages changed: ${changed}`)
    } else {
      console.info('Build packages - no changes')
    }
  }

  /**
   * Checks if the package needs to be updated.
   *
   * Проверяет, нужно ли обновлять пакет.
   * @param packageFile package file object / объект файла пакета
   * @returns true if version or modification date differs from log cache / true, если версия или дата изменения отличается от кэша лога
   */
  protected isUpdate(packageFile: PackageFile): boolean {
    if (!packageFile.isVersionConsistency(this.getVersionLog(packageFile.getName()))) {
      return true
    }

    if (this.date) {
      const date = this.getDate(packageFile)

      return Boolean(date) && date !== this.getDateLog(packageFile.getName())
    }

    return false
  }

  /**
   * Returns the command name for build execution.
   *
   * Возвращает имя команды для выполнения сборки.
   * @param packageFile package file instance / экземпляр файла пакета
   * @returns command string or undefined / строка команды или undefined
   */
  protected getCode(packageFile: PackageFile): string | undefined {
    if (this.code) {
      if (!this.code.includes(' ') && this.code in packageFile.getScripts()) {
        return `npm run ${this.code}`
      }

      return undefined
    }

    return packageFile.getCodeBuildOrRecovery()
  }

  /**
   * Returns the last modification date of the package.
   *
   * Возвращает дату последнего изменения пакета.
   * @param packageFile package file instance / экземпляр файла пакета
   * @returns commit date string / строка даты коммита
   */
  protected getDate(packageFile: PackageFile): string {
    const path = PropertiesFile.joinPath(packageFile.getDir())
    const date = GitRead.getFileDate(path)

    if (date) {
      return date
    }

    return PropertiesFile.getTime(packageFile.getDir()) ?? ''
  }

  /**
   * Returns the cached modification date of the package from the build log.
   *
   * Возвращает кэшированную дату изменения пакета из лога сборки.
   * @param name package name / имя пакета
   * @returns cached date string or undefined / строка кэшированной даты или undefined
   */
  protected getDateLog(name: string): string | undefined {
    const item = this.log?.[name]

    if (
      typeof item === 'object'
      && item !== null
    ) {
      return item.date
    }

    return undefined
  }

  /**
   * Returns the path segments to the build log file.
   *
   * Возвращает сегменты пути к файлу лога сборки.
   * @returns array of path segments / массив сегментов пути
   */
  protected getLogPath(): string[] {
    if (this.logFile) {
      const fileName = this.logFile.endsWith('.json')
        ? this.logFile
        : `${this.logFile}.log.json`

      if (fileName.includes('/') || fileName.includes('\\')) {
        return [fileName]
      }

      return ['.', 'logs', fileName]
    }

    return UI_BUILD_LOG_FILE
  }

  /**
   * Returns the cached version of the package from the build log.
   *
   * Возвращает кэшированную версию пакета из лога сборки.
   * @param name package name / имя пакета
   * @returns cached version string / строка кэшированной версии
   */
  protected getVersionLog(name: string): string {
    const item = this.log?.[name]

    if (
      typeof item === 'object'
      && item !== null
    ) {
      return item.version ?? '0.0.0'
    }

    return item ?? '0.0.0'
  }

  /**
   * Updates the build log with the current package version and date in memory.
   *
   * Обновляет лог сборки текущей версией и датой пакета в памяти.
   * @param packageFile package file object / объект файла пакета
   */
  protected updateLog(packageFile: PackageFile): void {
    const item: BuildPackageLogItem = {
      version: packageFile.getVersion()
    }

    const date = this.getDate(packageFile)

    if (date) {
      item.date = date
    }

    this.log[packageFile.getName()] = item
  }

  /**
   * Executes the build script command for the package.
   *
   * Выполняет команду скрипта сборки для пакета.
   * @param packageFile package file instance / экземпляр файла пакета
   * @returns boolean indicating build success / флаг успешности сборки
   */
  protected async build(packageFile: PackageFile): Promise<boolean> {
    const code = this.getCode(packageFile)

    if (code) {
      return await run(packageFile, code)
    }

    return false
  }

  /**
   * Adds the build log file to .gitignore.
   *
   * Добавляет файл лога сборки в .gitignore.
   */
  protected initGitIgnore(): void {
    const logPath = PropertiesFile.joinPath(this.getLogPath())
    new GitIgnore(logPath, 'Logs').make()
  }

  /**
   * Saves the build log to a file.
   *
   * Сохраняет лог сборки в файл.
   */
  protected saveLog(): void {
    PropertiesFile.writeByPath(this.getLogPath(), this.log)
  }

  /**
   * Scans the packages directory and returns a list of packages sorted by the ui-priority property in package.json.
   * If a package does not have a priority, it defaults to 500.
   *
   * Сканирует директорию пакетов и возвращает список пакетов, отсортированный по свойству ui-priority в package.json.
   * Если у пакета нет приоритета, по умолчанию устанавливается значение 500.
   * @returns sorted list of package files / отсортированный список файлов пакетов
   */
  private getList(): PackageFile[] {
    const list = PropertiesFile.readDir(this.path)
    const packages: PackageFile[] = []

    for (const folder of list) {
      const packageFile = new PackageFile([this.path, folder])

      if (
        packageFile.is()
        && !packageFile.isTest()
      ) {
        packages.push(packageFile)
      }
    }

    return packages.sort((a, b) => {
      const priorityA = a.get()?.['ui-priority'] ?? 500
      const priorityB = b.get()?.['ui-priority'] ?? 500
      return priorityA - priorityB
    })
  }
}
