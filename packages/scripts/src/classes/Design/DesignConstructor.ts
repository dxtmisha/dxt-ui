import { toCamelCaseFirst } from '@dxtmisha/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { DesignCommand } from './DesignCommand'

import { UI_FILE_PACKAGE, UI_DIR_IN, UI_DIR_CONSTRUCTOR } from '../../config'

const FILE_PROPERTIES = 'properties.json'
const FILE_PROPS = 'props.ts'
const FILE_TYPES = 'types.ts'
const FILE_TYPES_BASIC = 'basicTypes.ts'
const FILE_STYLE = 'style.scss'
const FILE_CODE = 'Constructors.ts'
const FILE_CLASS = 'ConstructorsDesign.tsx'
const FILE_INDEX = 'index.ts'

/**
 * Class for generating files based on a constructor.
 *
 * Класс для генерации файлов по конструктору.
 */
export class DesignConstructor extends DesignCommand {
  protected DIR_SAMPLE: string = UI_DIR_CONSTRUCTOR
  protected dir: string[]

  /**
   * Constructor
   * @param command component name/ названия компонента
   * @param options additional parameters/ дополнительные параметры
   */
  constructor(
    command: string,
    options: Record<string, string> = {}
  ) {
    super(command, options)

    this.dir = [
      PropertiesFile.getRoot(),
      UI_DIR_IN,
      this.DIR_SAMPLE,
      this.getStructure().getComponentNameFirst()
    ]
  }

  /**
   * Initializes the creation of all files for the current team.
   *
   * Инициализирует создание всех файлов для текущей команды.
   */
  protected initMain(): void {
    this
      .makeProperties()
      .makeProps()
      .makeTypes()
      .makeTypesBasic()
      .makeStyle()
      .makeCode()
      .makeMain()
      .makeIndex()
      .makeFilePackage()
  }

  /**
   * This code generates the properties.json.
   *
   * Генерация файла properties.json.
   */
  protected makeProperties(): this {
    const file = FILE_PROPERTIES

    if (!this.isFile(file)) {
      this.write(file, '{\r\n}\r\n')
    }

    return this
  }

  /**
   * This code generates the props.ts.
   *
   * Генерация файла props.ts.
   */
  protected makeProps(): this {
    const file = FILE_PROPS
    const sample = this.readDefinable(file)

    sample
      .replaceType()
      .replaceDefault()
      .replaceProps()

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the types.ts.
   *
   * Генерация файла types.ts.
   */
  protected makeTypes(): this {
    const file = FILE_TYPES
    const sample = this.readDefinable(file)

    sample.replaceClasses()

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the properties.json.
   *
   * Генерация файла properties.json.
   */
  protected makeTypesBasic(): this {
    return this.makeFileStandard(FILE_TYPES_BASIC)
  }

  /**
   * This code generates the style.scss.
   *
   * Генерация файла style.scss.
   */
  protected makeStyle(): this {
    const file = FILE_STYLE

    if (!this.isFile(file)) {
      const sample = this.readDefinable(file)
      this.write(file, sample.get())
    }

    return this
  }

  /**
   * This code generates the Constructors.ts.
   *
   * Генерация файла Constructors.ts.
   */
  protected makeCode(): this {
    return this.makeFileStandard(FILE_CODE)
  }

  /**
   * This code generates the ConstructorsDesign.tsx.
   *
   * Генерация файла ConstructorsDesign.tsx.
   */
  protected makeMain(): this {
    return this.makeFileStandard(FILE_CLASS)
  }

  /**
   * This code generates the index.ts.
   *
   * Генерация файла index.ts.
   */
  protected makeIndex(): this {
    return this.makeFileStandard(FILE_INDEX)
  }

  protected makeFileStandard(file: string): this {
    const sample = this.readDefinable(file)

    sample.replaceConstructorClasses()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  protected makeFilePackage(): this {
    const packageFile = PropertiesFile.readFile<Record<string, any>>(UI_FILE_PACKAGE)
    const command = toCamelCaseFirst(this.getCommand())
    const name = `./${command}`

    if (
      packageFile
      && packageFile.exports
      && !(name in packageFile.exports)
    ) {
      packageFile.exports[name] = `./src/constructors/${command}/index.ts`
      packageFile.exports[`${name}/style`] = `./src/constructors/${command}/style.scss`

      PropertiesFile.writeByPath(UI_FILE_PACKAGE, packageFile)
    }

    return this
  }
}
