import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageFile } from '../Package/PackageFile'
import { run } from '../../functions/run'
import { UI_DIR_PACKAGES } from '../../config'

const UI_PUBLISH_LOG_FILE = ['.', 'logs', 'ui-publish.log.json']

/**
 * Class for publishing all packages in the project.
 *
 * Класс для публикации всех пакетов в проекте.
 */
export class BuildPublishPackages {
  protected readonly log: Record<string, string>

  /**
   * Constructor
   * @param path packages directory path / путь к директории пакетов
   */
  constructor(
    protected readonly path: string = UI_DIR_PACKAGES
  ) {
    this.log = PropertiesFile.readFile(UI_PUBLISH_LOG_FILE) ?? {}
  }

  /**
   * Scans the packages directory and publishes each package that has a new version.
   *
   * Сканирует директорию пакетов и публикует каждый пакет с новой версией.
   */
  async make(): Promise<void> {
    const list = PropertiesFile.readDir(this.path)
    let changed = 0

    console.info(`Publish packages(${list.length})...`)

    for (const folder of list) {
      const packageFile = new PackageFile([this.path, folder])

      if (
        packageFile.is()
        && !packageFile.isNoPublish()
      ) {
        if (
          this.log[packageFile.getName()] === undefined
          || (
            this.isUpdate(packageFile)
            && await run(packageFile, packageFile.getCodePublish(), true, true)
          )
        ) {
          this.updateLog(packageFile)
          changed++
        }
      }
    }

    if (changed > 0) {
      this.saveLog()
      console.info(`Publish packages changed: ${changed}`)
    } else {
      console.info('Publish packages - no changes')
    }
  }

  /**
   * Checks if the package needs to be published.
   *
   * Проверяет, нужно ли публиковать пакет.
   * @param packageFile package file object / объект файла пакета
   */
  protected isUpdate(packageFile: PackageFile): boolean {
    return !packageFile.isVersionConsistency(
      this.getVersionLog(packageFile.getName())
    )
  }

  /**
   * Returns the cached version of the package from the publish log.
   *
   * Возвращает кэшированную версию пакета из лога публикации.
   * @param name package name / имя пакета
   */
  protected getVersionLog(name: string): string {
    return this.log?.[name] ?? '0.0.0'
  }

  /**
   * Updates the publish log with the current package version in memory.
   *
   * Обновляет лог публикации текущей версией пакета в памяти.
   * @param packageFile package file object / объект файла пакета
   */
  protected updateLog(packageFile: PackageFile): void {
    this.log[packageFile.getName()] = packageFile.getVersion()
  }

  /**
   * Saves the publish log to a file.
   *
   * Сохраняет лог публикации в файл.
   */
  protected saveLog(): void {
    PropertiesFile.writeByPath(UI_PUBLISH_LOG_FILE, this.log)
  }
}
