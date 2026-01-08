// export:none

import requirePath from 'path'
import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIR_PACKAGES, UI_DIRS_LIBRARY, UI_FILE_PACKAGE } from '../../config'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'

const DIR_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'packages']
const DIR_STORYBOOK = [
  UI_DIR_PACKAGES,
  'storybook',
  '.storybook',
  'main.ts'
]

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

        if (item.path.endsWith('library.ts')) {
          this.makeLibrary()
            .makePackage()
            .makeStorybook()
        }
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
   * Gets normalized package name by replacing path separators.
   *
   * Получает нормализованное имя пакета, заменяя разделители путей.
   */
  protected getName(): string {
    return this.name.replace(requirePath.sep, '/')
  }

  /**
   * Gets package code by replacing path separators with hyphens.
   *
   * Получает код пакета, заменяя разделители путей на дефисы.
   */
  protected getCode(): string {
    return this.getName().replace('/', '-')
  }

  /**
   * Reads project name from package.json.
   *
   * Читает имя проекта из package.json.
   */
  protected getProjectName(): string {
    const name = this.getName()
    const packagePrefix = PropertiesConfig.getPackagePrefix()

    if (packagePrefix) {
      return `${packagePrefix}/${name}`
    }

    const mainName = String(this.readPackage()?.name)
    const code = mainName.split('/')?.[0] ?? mainName

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

  /**
   * Generates a library file for the package.
   *
   * Генерирует файл библиотеки для пакета.
   */
  protected makeLibrary(): this {
    const name = this.getCode() + '.ts'
    const path: string[] = [...UI_DIRS_LIBRARY, name]

    if (
      PropertiesFile.is(UI_DIRS_LIBRARY)
      && !PropertiesFile.is(path)
    ) {
      console.log('Generate library...')

      PropertiesFile.writeByPath(path, `export * from '${this.getProjectName()}'
`
      )
    }

    return this
  }

  /**
   * Updates package.json to include the new package.
   *
   * Обновляет package.json для включения нового пакета.
   */
  protected makePackage(): this {
    let packageFile = PropertiesFile.readFileOnly(UI_FILE_PACKAGE)
    const name = this.getCode()

    if (
      packageFile
      && !packageFile.match(new RegExp(`["']${this.getProjectName()}["']`))
    ) {
      let edit = false

      if (
        packageFile.match(/["']devDependencies["']/)
      ) {
        console.log('Update package.json: devDependencies...')

        edit = true
        packageFile = packageFile.replace(
          /(["']devDependencies["']:[^{]+{)/,
          `$1
    "${this.getProjectName()}": "workspace:*",`
        )
      }

      if (
        packageFile.match(/["']exports["']/)
      ) {
        console.log('Update package.json: exports...')

        edit = true
        packageFile = packageFile.replace(
          /(["']exports["']:[^{]+{)/,
          `$1
    "./${name}": {
      "import": "./dist/${name}.js",
      "types": "./dist/${name}.d.ts"
    },`
        )
      }

      if (edit) {
        PropertiesFile.writeByPath(UI_FILE_PACKAGE, packageFile)
      }
    }

    return this
  }

  /**
   * Updates Storybook configuration to include the new package stories.
   *
   * Обновляет конфигурацию Storybook для включения историй нового пакета.
   */
  makeStorybook(): this {
    if (PropertiesFile.is(DIR_STORYBOOK)) {
      let storybook = PropertiesFile.readFileOnly(DIR_STORYBOOK)
      const name = this.getCode()

      if (
        storybook
        && !storybook.match(`/${name}/src/`)
      ) {
        console.log('Update storybook...')

        storybook = storybook.replace(
          /(stories: \[)/,
          `$1
    '../../${name}/src/**/*.mdx',
    '../../${name}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',`
        )

        PropertiesFile.writeByPath(DIR_STORYBOOK, storybook)
      }
    }

    return this
  }
}
