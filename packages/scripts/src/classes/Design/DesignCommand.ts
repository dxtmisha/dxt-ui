// export:none

import { toArray, toCamelCase, toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignStructure } from './DesignStructure'
import { DesignReplace } from './DesignReplace'

import { UI_FILE_PACKAGE } from '../../config'

/**
 * Base abstract class for generating script files and design system components.
 * Provides unified logic for template reading, data transformation, and file writing.
 *
 * Базовый абстрактный класс для генерации файлов скриптов и компонентов дизайн-системы.
 * Обеспечивает единую логику чтения шаблонов, трансформации данных и записи файлов.
 */
export abstract class DesignCommand {
  /** Map of template filenames and contents / Карта имен шаблонов и их содержимого */
  protected abstract sample: Record<string, string>

  /** Identifier mark for replacements / Маркер-идентификатор для замен */
  protected abstract mark: string

  /** Target directory path segments / Сегменты пути целевой директории */
  protected abstract dir: string[]

  /** Design structure metadata instance / Экземпляр метаданных структуры дизайна */
  protected structure?: DesignStructure

  /**
   * Constructor for DesignCommand.
   *
   * Конструктор для DesignCommand.
   * @param command component name or command identifier / название компонента или идентификатор команды
   * @param options additional key-value parameters / дополнительные параметры ключ-значение
   */
  protected constructor(
    protected readonly command: string,
    protected readonly options: Record<string, string> = {}
  ) {
  }

  /**
   * Main entry point for executing the command.
   * Validates input and triggers the primary initialization logic.
   *
   * Основная точка входа для выполнения команды.
   * Проверяет входные данные и запускает основную логику инициализации.
   */
  async make(): Promise<void> {
    if (this.command) {
      console.info(`-- ${PropertiesConfig.getDesignName()}.${this.command}:`)

      await this.initMain()

      console.info('-- end')
    } else {
      console.info('-- not name')
    }
  }

  /**
   * Initializes the creation of all files for the current team.
   *
   * Инициализирует создание всех файлов для текущей команды.
   */
  protected abstract initMain(): void | Promise<void>

  /**
   * Checks the presence of a file.
   *
   * Проверяет наличие файла.
   * @param name file name / название файла
   * @returns true if file exists / true, если файл существует
   */
  protected isFile(name: string | string[]): boolean {
    return PropertiesFile.is([...this.dir, ...toArray(name)])
  }

  /**
   * Returns the command name.
   *
   * Возвращает название команды.
   * @returns command identifier / идентификатор команды
   */
  protected getCommand(): string {
    return this.command
  }

  /**
   * Returns PascalCase component name.
   *
   * Возвращает имя компонента в PascalCase.
   * @returns PascalCase component name / имя компонента в PascalCase
   */
  protected getName(): string {
    return toCamelCaseFirst(this.getCommand())
  }

  /**
   * Returns camelCase component name.
   *
   * Возвращает имя компонента в camelCase.
   * @returns camelCase component name / имя компонента в camelCase
   */
  protected getNameMin(): string {
    return toCamelCase(this.getCommand())
  }

  /**
   * Returns kebab-case component name.
   *
   * Возвращает имя компонента в kebab-case.
   * @returns kebab-case component name / имя компонента в kebab-case
   */
  protected getCode(): string {
    return toKebabCase(this.getCommand())
  }

  /**
   * Returns full PascalCase design component name.
   *
   * Возвращает полное имя дизайн-компонента в PascalCase.
   * @returns full design component name / полное имя дизайн-компонента
   */
  protected getFullName(): string {
    return toCamelCaseFirst(`${PropertiesConfig.getDesignName()}-${this.getCommand()}`)
  }

  /**
   * Returns PascalCase project name.
   *
   * Возвращает имя проекта в PascalCase.
   * @returns PascalCase project name / имя проекта в PascalCase
   */
  protected getProjectName(): string {
    return toCamelCaseFirst(PropertiesConfig.getProjectName())
  }

  /**
   * Returns a structure object.
   *
   * Возвращает объект структуры.
   * @returns structure instance / экземпляр структуры
   */
  protected getStructure(): DesignStructure {
    if (!this.structure) {
      this.structure = new DesignStructure(this.getCommand())
    }

    return this.structure
  }

  /**
   * Returns an object for template transformation.
   *
   * Возвращает объект для преобразования шаблона.
   * @param sample property template / шаблон свойства
   * @returns replacement helper instance / экземпляр хелпера замен
   */
  protected getReplace(sample?: string): DesignReplace {
    return new DesignReplace(
      this.getStructure(),
      this.mark,
      sample ?? ''
    )
  }

  /**
   * Reads file content as string.
   *
   * Читает содержимое файла как строку.
   * @param name file name / название файла
   * @returns file content or undefined / содержимое файла или undefined
   */
  protected read(name: string | string[]): string | undefined {
    return PropertiesFile.readFile<string>([...this.dir, ...toArray(name)])
  }

  /**
   * Reads a template from the sample map.
   *
   * Читает шаблон из карты шаблонов.
   * @param name file name / название файла
   * @returns sample content or undefined / содержимое шаблона или undefined
   */
  protected readSample(name: string): string | undefined {
    return this.sample?.[name]
  }

  /**
   * Reads the file itself or its template if it is not found.
   *
   * Читает сам файл или его шаблон, если его нет.
   * @param name file name / название файла
   * @param callback the function is executed if there is no such file / функция выполняется, если такого файла нет
   * @returns replacement instance / экземпляр объекта замен
   */
  protected readDefinable(name: string, callback?: (sample: DesignReplace) => void): DesignReplace {
    const fileName = this.getReplace().getNameFile(name)

    if (this.isFile(fileName)) {
      return this.getReplace(this.read(fileName))
    }

    const replace = this.getReplace(this.readSample(name))

    if (callback) {
      callback(replace)
    }

    replace
      .replaceOnce()
      .replaceName()

    return replace
  }

  /**
   * Creating or rewriting a file.
   *
   * Создание или перезапись файла.
   * @param name file name / название файла
   * @param value values for storage / значения для хранения
   */
  protected write(name: string, value: string): void {
    this.console(name)

    PropertiesFile.write(
      this.dir,
      name,
      value,
      ''
    )
  }

  protected updatePackage(
    namePath: string,
    value: any
  ): this {
    const packageFile = getPackageJson()
    let focus: Record<string, any> | any | undefined = packageFile

    if (packageFile && focus) {
      const names = namePath.split('|')
      const key = names.pop()

      for (const name of names) {
        if (!(name in focus)) {
          focus[name] = {}
        }

        focus = focus[name]
      }

      if (key) {
        focus[key] = value
      }

      PropertiesFile.writeByPath(UI_FILE_PACKAGE, packageFile)
    }

    return this
  }

  /**
   * Outputting data to the console.
   *
   * Вывод данных в консоль.
   * @param name file name/ название файла
   */
  protected console(name: string): void {
    console.info(`--  ${this.isFile(name) ? 'update' : 'create'} ${name}`)
  }
}
