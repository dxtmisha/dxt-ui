// export:none

import { toCamelCase, toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { DesignCommand } from './DesignCommand'
import { constructorTemplates } from '../../media/templates/constructorTemplates'

import { UI_DIR_IN, UI_DIR_CONSTRUCTOR, UI_DIRS_LIBRARY } from '../../config'

/** Properties configuration filename / Имя файла конфигурации свойств */
const FILE_PROPERTIES = 'properties.json'
/** Props definition filename / Имя файла определения props */
const FILE_PROPS = 'props.ts'
/** Types definition filename / Имя файла определения типов */
const FILE_TYPES = 'types.ts'
/** Basic types definition filename / Имя файла определения базовых типов */
const FILE_TYPES_BASIC = 'basicTypes.ts'
/** Component style SCSS filename / Имя файла SCSS стилей компонента */
const FILE_STYLE = 'style.scss'
/** Constructor implementation filename / Имя файла реализации конструктора */
const FILE_CODE = 'Constructors.ts'
/** Design JSX wrapper filename / Имя файла JSX-обертки дизайна */
const FILE_CLASS = 'ConstructorsDesign.tsx'
/** Module entrypoint filename / Имя файла точки входа модуля */
const FILE_INDEX = 'index.ts'

/**
 * Class for generating files and configurations based on a component's constructor.
 * It automates the creation of property definitions, type files, styles, and integration logic for constructors.
 *
 * Класс для генерации файлов и конфигураций на основе конструктора компонента.
 * Автоматизирует создание определений свойств, файлов типов, стилей и логики интеграции для конструкторов.
 */
export class DesignConstructor extends DesignCommand {
  /** Map of constructor template files / Карта файлов шаблонов конструктора */
  protected sample = constructorTemplates

  /** Target directory mark / Маркер целевой директории */
  protected mark = UI_DIR_CONSTRUCTOR

  /** Target directory path segments / Сегменты пути целевой директории */
  protected dir: string[]

  /**
   * Constructor for DesignConstructor.
   *
   * Конструктор для DesignConstructor.
   * @param command component name or command identifier / название компонента или идентификатор команды
   * @param options additional key-value parameters / дополнительные параметры ключ-значение
   */
  constructor(
    command: string,
    options: Record<string, string> = {}
  ) {
    super(command, options)

    this.dir = [
      PropertiesFile.getRoot(),
      UI_DIR_IN,
      this.mark,
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
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
   */
  protected makeTypesBasic(): this {
    return this.makeFileStandard(FILE_TYPES_BASIC)
  }

  /**
   * This code generates the style.scss.
   *
   * Генерация файла style.scss.
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
   */
  protected makeCode(): this {
    return this.makeFileStandard(FILE_CODE)
  }

  /**
   * This code generates the ConstructorsDesign.tsx.
   *
   * Генерация файла ConstructorsDesign.tsx.
   * @returns current instance / текущий экземпляр
   */
  protected makeMain(): this {
    return this.makeFileStandard(FILE_CLASS)
  }

  /**
   * This code generates the index.ts.
   *
   * Генерация файла index.ts.
   * @returns current instance / текущий экземпляр
   */
  protected makeIndex(): this {
    return this.makeFileStandard(FILE_INDEX)
  }

  /**
   * Generates a standard file based on a template.
   *
   * Генерирует стандартный файл на основе шаблона.
   * @param file file name / имя файла
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
   */
  protected makeFilePackage(): this {
    const command = this.getName()
    const name = `./${command}`

    this.updatePackage(
      `exports|${name}`,
      {
        types: `./dist/constructors/${command}/index.d.ts`,
        default: `./dist/${this.getNameMin()}.js`
      }
    )

    return this
  }

  /**
   * Generates a library file.
   *
   * Генерирует файл библиотеки.
   * @returns current instance / текущий экземпляр
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
