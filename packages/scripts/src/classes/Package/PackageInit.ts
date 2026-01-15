// export:none

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageInitItem } from './PackageItem'

import { UI_DIR_PACKAGES } from '../../config'

/**
 * Initializes the package configuration and environment.
 *
 * Инициализирует конфигурацию пакета и окружение.
 */
export class PackageInit {
  constructor(
    protected readonly type: string,
    protected readonly templates?: string,
    protected readonly dir: string = UI_DIR_PACKAGES
  ) {
  }

  /**
   * Creates the package structure and initializes files.
   *
   * Создает структуру пакета и инициализирует файлы.
   */
  make() {
    console.log(`Initializing package of type: ${this.type} with templates: ${this.templates}`)

    this.getDirs()
      .forEach((dir) => {
        new PackageInitItem(dir, [this.dir, dir], this.type, this.templates).make()
      })
  }

  /**
   * Returns an array of directory names for package initialization.
   *
   * Возвращает массив имен директорий для инициализации пакета.
   */
  protected getDirs(): string[] {
    return PropertiesFile.readDir(this.dir)
      .filter(
        path => PropertiesFile.readDir([this.dir, path]).length === 0
      )
  }
}
