// export:none

import { toCamelCase, toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { DesignCommand } from './DesignCommand'

import { UI_DIR_IN, UI_DIR_CONSTRUCTOR, UI_DIRS_LIBRARY } from '../../config'

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
      .makeLibrary()
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
   * This code generates the basicTypes.ts.
   *
   * Генерация файла basicTypes.ts.
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

  /**
   * Generates a standard file based on a template.
   *
   * Генерирует стандартный файл на основе шаблона.
   * @param file file name/ имя файла
   */
  protected makeFileStandard(file: string): this {
    const sample = this.readDefinable(file)

    sample.replaceConstructorClasses()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * Updates the package.json file.
   *
   * Обновляет файл package.json.
   */
  protected makeFilePackage(): this {
    const command = this.getName()
    const name = `./${command}`

    this.updatePackage(
      `exports|${name}`,
      {
        import: `./dist/${this.getNameMin()}.js`,
        types: `./dist/constructors/${command}/index.d.ts`
      }
    )

    return this
  }

  /**
   * Generates a library file.
   *
   * Генерирует файл библиотеки.
   */
  protected makeLibrary(): this {
    const name = toCamelCase(this.getCommand())

    PropertiesFile.writeByPath(
      [...UI_DIRS_LIBRARY, `${name}.ts`],
      `export * from '../${UI_DIR_CONSTRUCTOR}/${toCamelCaseFirst(this.getCommand())}/index'
`
    )

    return this
  }
}
