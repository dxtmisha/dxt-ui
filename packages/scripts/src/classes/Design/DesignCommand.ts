// export:none

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { toArray, toCamelCase, toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'
import { hasNativeDirname } from '../../functions/hasNativeDirname'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignStructure } from './DesignStructure'
import { DesignReplace } from './DesignReplace'

import { UI_FILE_PACKAGE, UI_KEY_CONSTRUCTOR } from '../../config'

const dirnamePath = hasNativeDirname()
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

const DIR_SAMPLE = [dirnamePath, '..', '..', 'media', 'templates']

/**
 * Base abstract class for generating script files.
 *
 * Базовый абстрактный класс для генерации файлов скриптов.
 */
export abstract class DesignCommand {
  protected abstract DIR_SAMPLE: string
  protected abstract dir: string[]

  protected structure?: DesignStructure

  /**
   * Constructor
   * @param command component name/ названия компонента
   * @param options additional parameters/ дополнительные параметры
   */

  protected constructor(
    protected readonly command: string,
    protected readonly options: Record<string, string> = {}
  ) {
  }

  /**
   * Entry point for the command.
   *
   * Точка входа для команды.
   */
  make(): void {
    if (this.command) {
      console.info(`-- ${PropertiesConfig.getDesignName()}.${this.command}:`)

      this.initMain()

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
  protected abstract initMain(): void

  /**
   * Checks the presence of a file.
   *
   * Проверяет наличие файла.
   * @param name file name/ название файла
   */
  protected isFile(name: string | string[]): boolean {
    return PropertiesFile.is([...this.dir, ...toArray(name)])
  }

  /**
   * Returns the names for the team.
   *
   * Возвращает названия для команды.
   */
  protected getCommand(): string {
    return this.command
  }

  protected getName(): string {
    return toCamelCaseFirst(this.getCommand())
  }

  protected getNameMin(): string {
    return toCamelCase(this.getCommand())
  }

  protected getCode(): string {
    return toKebabCase(this.getCommand())
  }

  protected getFullName(): string {
    return toCamelCaseFirst(`${PropertiesConfig.getDesignName()}-${this.getCommand()}`)
  }

  /**
   * Returns a structure object.
   *
   * Возвращает объект структуры.
   */
  protected getStructure(): DesignStructure {
    if (!this.structure) {
      const [design, component] = this.getCommand().split('.', 2)
      this.structure = new DesignStructure(
        design ?? UI_KEY_CONSTRUCTOR,
        component ?? 'component'
      )
    }

    return this.structure
  }

  /**
   * Returns an object for template transformation.
   *
   * Возвращает объект для преобразования шаблона.
   * @param sample property template/ шаблон свойства
   */
  protected getReplace(sample?: string): DesignReplace {
    return new DesignReplace(
      this.getStructure(),
      this.DIR_SAMPLE,
      sample ?? ''
    )
  }

  /**
   * Reading.
   *
   * Читает файл.
   * @param name file name/ название файла
   */
  protected read(name: string | string[]): string | undefined {
    return PropertiesFile.readFile<string>([...this.dir, ...toArray(name)])
  }

  /**
   * This code reads a template.
   *
   * Читает шаблона.
   * @param name file name/ название файла
   */
  protected readSample(name: string): string | undefined {
    return PropertiesFile.readFile<string>([...DIR_SAMPLE, this.DIR_SAMPLE, name])
  }

  /**
   * Reads the file itself or its template if it is not found.
   *
   * Читает сам файл или его шаблон, если его нет.
   * @param name file name/ название файла
   * @param callback the function is executed if there is no such file/ функция выполняется, если такого файла нет
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
   * @param name file name/ название файла
   * @param value values for storage/ значения для хранения
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
