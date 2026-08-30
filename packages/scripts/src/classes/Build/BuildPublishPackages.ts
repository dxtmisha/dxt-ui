import { promisify } from 'node:util'
import { execFile } from 'node:child_process'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageFile } from '../Package/PackageFile'
import { run } from '../../functions/run'
import { UI_DIR_PACKAGES } from '../../config'

const execFileAsync = promisify(execFile)

/**
 * Orchestrator for scanning and publishing changed packages to the npm registry.
 * Compares current package versions against published versions in npm and publishes updated packages.
 *
 * Оркестратор для сканирования и публикации измененных пакетов в реестр npm.
 * Сравнивает текущие версии пакетов с опубликованными версиями в npm и публикует обновленные пакеты.
 */
export class BuildPublishPackages {
  /**
   * Constructor initializes packages directory path.
   *
   * Конструктор инициализирует путь к директории пакетов.
   * @param path packages directory path / путь к директории пакетов
   */
  constructor(
    protected readonly path: string = UI_DIR_PACKAGES
  ) { }

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
          await this.isUpdate(packageFile)
          && await run(packageFile, packageFile.getCodePublish(), true, true)
        ) {
          changed++
        }
      }
    }

    if (changed > 0) {
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
   * @returns promise resolving to true if package is new or has a newer version / промис, возвращающий true, если пакет новый или имеет более новую версию
   */
  protected async isUpdate(packageFile: PackageFile): Promise<boolean> {
    const publishedVersion = await this.getNpmVersion(packageFile.getName())

    if (publishedVersion === undefined) {
      return true
    }

    return !packageFile.isVersionConsistency(publishedVersion)
  }

  /**
   * Returns the latest published version of the package from the npm registry.
   *
   * Возвращает последнюю опубликованную версию пакета из реестра npm.
   * @param name package name / имя пакета
   * @returns promise resolving to published version string or undefined if not published / промис, возвращающий строку опубликованной версии или undefined, если не опубликован
   */
  protected async getNpmVersion(name: string): Promise<string | undefined> {
    try {
      const { stdout } = await execFileAsync('npm', ['view', name, 'version'])
      const version = stdout.trim()

      return version || undefined
    } catch {
      return undefined
    }
  }
}
