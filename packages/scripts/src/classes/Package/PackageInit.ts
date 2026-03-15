// export:none

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PackageInitItem } from './PackageItem'

import { UI_DIR_PACKAGES } from '../../config'

/**
 * Class for initializing the package structure and development environment based on templates.
 *
 * Класс для инициализации структуры пакета и среды разработки на основе шаблонов.
 */
export class PackageInit {
  /**
   * Constructor for PackageInit.
   *
   * Конструктор для PackageInit.
   * @param type package type identifier / идентификатор типа пакета
   * @param templates optional list of templates to apply / необязательный список шаблонов для применения
   * @param dir base directory for packages / базовая директория для пакетов
   */
  constructor(
    protected readonly type: string,
    protected readonly templates?: string,
    protected readonly dir: string = UI_DIR_PACKAGES
  ) {
  }

  /**
   * Triggers the package creation process and initializes required files.
   *
   * Запускает процесс создания пакета и инициализирует необходимые файлы.
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
