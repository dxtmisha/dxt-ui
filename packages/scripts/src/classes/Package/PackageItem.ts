// export:none

import requirePath from 'path'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_FILE_PACKAGE } from '../../config'

const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'packages']

type PackageInitItemFile = {
  file: string
  path: string
  content: string
}

/**
 * Represents a single package item with its metadata and operations.
 *
 * Представляет отдельный элемент пакета с его метаданными и операциями.
 */
export class PackageInitItem {
  constructor(
    protected readonly name: string,
    protected readonly dir: string[],
    protected readonly type: string,
    protected readonly templates?: string
  ) {
  }

  /**
   * Initializes the package item by creating files from samples and templates.
   *
   * Инициализирует элемент пакета, создавая файлы из образцов и шаблонов.
   */
  make() {
    console.log('Package init in:', this.dir)

    ;[
      ...this.getSample(),
      ...this.getTemplates()
    ]
      .forEach((item) => {
        this.writeFile(item.file, item.content)
      })
  }

  /**
   * Gets sample files for the specified package type.
   *
   * Получает файлы-образцы для указанного типа пакета.
   */
  protected getSample(): PackageInitItemFile[] {
    return this.getFileByList([...DIR_SAMPLE, this.type])
  }

  /**
   * Gets template files if templates path is specified.
   *
   * Получает файлы шаблонов, если указан путь к шаблонам.
   */
  protected getTemplates(): PackageInitItemFile[] {
    if (this.templates) {
      return this.getFileByList([this.templates])
    }

    return []
  }

  /**
   * Creates a package file object with content from the specified path.
   *
   * Создает объект файла пакета с содержимым из указанного пути.
   * @param file file name / имя файла
   * @param path file path array / массив пути к файлу
   */
  protected getFile(
    file: string,
    path: string[]
  ): PackageInitItemFile {
    return {
      file: PropertiesFile.joinPath([...this.dir, file]),
      path: PropertiesFile.joinPath(path),
      content: String(PropertiesFile.readFileOnly(path))
    }
  }

  /**
   * Gets all files from directory and converts them to PackageInitItemFile objects.
   *
   * Получает все файлы из директории и преобразует их в объекты PackageInitItemFile.
   * @param dir directory path array / массив пути к директории
   */
  protected getFileByList(dir: string[]): PackageInitItemFile[] {
    const list = PropertiesFile.readDirRecursive(dir)
    const data: PackageInitItemFile[] = []

    list.forEach((item) => {
      data.push(this.getFile(item, [...dir, item]))
    })

    return data
  }

  /**
   * Reads project name from package.json.
   *
   * Читает имя проекта из package.json.
   */
  protected getProjectName(): string {
    const mainName = String(this.readPackage()?.name)
    const code = mainName.split('/')?.[0] ?? mainName
    const name = this.name.replace(requirePath.sep, '/')

    return `${code}/${name}`
  }

  /**
   * Reads package.json data or returns empty object.
   *
   * Читает данные package.json или возвращает пустой объект.
   */
  protected readPackage(): Record<string, any> {
    return PropertiesFile.readFile(UI_FILE_PACKAGE) ?? {}
  }

  /**
   * Writes file with content replacement and sets permissions.
   *
   * Записывает файл с заменой содержимого и устанавливает права доступа.
   * @param path file path / путь к файлу
   * @param content file content / содержимое файла
   */
  protected writeFile(path: string, content: string): void {
    const contentEdit = content
      .replace(/@packages\/library/g, this.getProjectName())

    PropertiesFile.writeByPath(path, contentEdit)
    PropertiesFile.chmod(path)
  }
}
