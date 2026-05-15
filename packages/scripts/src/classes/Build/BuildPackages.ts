import { run } from '../../functions/run'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageFile } from '../Package/PackageFile'

import { UI_DIR_PACKAGES } from '../../config'

const UI_BUILD_LOG_FILE = ['.', 'logs', 'ui-build.log.json']

/**
 * Class for building all packages in the project.
 *
 * Класс для сборки всех пакетов в проекте.
 */
export class BuildPackages {
  protected readonly log: Record<string, string>

  /**
   * Constructor
   * @param path packages directory path / путь к директории пакетов
   */
  constructor(
    protected readonly path: string = UI_DIR_PACKAGES
  ) {
    this.log = PropertiesFile.readFile(UI_BUILD_LOG_FILE) ?? {}
  }

  /**
   * Scans the packages directory and builds each package that contains a package.json.
   *
   * Сканирует директорию пакетов и собирает каждый пакет, содержащий package.json.
   */
  async make(): Promise<void> {
    const list = PropertiesFile.readDir(this.path)
    let isChanged = false

    for (const folder of list) {
      const packageFile = new PackageFile([this.path, folder])

      if (
        packageFile.is()
        && !packageFile.isTest()
        && this.isUpdate(packageFile)
        && await this.build(packageFile)
      ) {
        this.updateLog(packageFile)
        isChanged = true
      }
    }

    if (isChanged) {
      this.saveLog()
    }
  }

  protected async build(packageFile: PackageFile): Promise<boolean> {
    const code = packageFile.getCodeBuildOrRecovery()

    if (code) {
      return await run(packageFile, `npm run ${code}`)
    }

    return false
  }

  /**
   * Checks if the package needs to be updated.
   *
   * Проверяет, нужно ли обновлять пакет.
   * @param packageFile package file object / объект файла пакета
   */
  protected isUpdate(packageFile: PackageFile): boolean {
    return !packageFile.isVersionConsistency(
      this.getVersionLog(packageFile.getName())
    )
  }

  /**
   * Returns the cached version of the package from the build log.
   *
   * Возвращает кэшированную версию пакета из лога сборки.
   * @param name package name / имя пакета
   */
  protected getVersionLog(name: string): string {
    return this.log?.[name] ?? '0.0.0'
  }

  /**
   * Updates the build log with the current package version in memory.
   *
   * Обновляет лог сборки текущей версией пакета в памяти.
   * @param packageFile package file object / объект файла пакета
   */
  protected updateLog(packageFile: PackageFile): void {
    this.log[packageFile.getName()] = packageFile.getVersion()
  }

  /**
   * Saves the build log to a file.
   *
   * Сохраняет лог сборки в файл.
   */
  protected saveLog(): void {
    PropertiesFile.writeByPath(UI_BUILD_LOG_FILE, this.log)
  }
}
