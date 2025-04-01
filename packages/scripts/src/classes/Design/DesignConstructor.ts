import { PropertiesFile } from '../Properties/PropertiesFile'

import { DesignCommand } from './DesignCommand'

import { PROPERTY_DIR_IN } from '../../config'

const FILE_PROPERTIES = 'properties.json'
const FILE_PROPS = 'props.ts'
const FILE_TYPES = 'types.ts'
const FILE_STYLE = 'style.scss'
const FILE_CODE = 'Constructors.ts'
const FILE_CLASS = 'ConstructorsDesign.tsx'

/**
 * Class for generating files based on a constructor.
 *
 * Класс для генерации файлов по конструктору.
 */
export class DesignConstructor extends DesignCommand {
  protected DIR_SAMPLE: string = 'constructors'
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
      PROPERTY_DIR_IN,
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
      .makeStyle()
      .makeCode()
      .makeMain()
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
   * This code generates the style.scss.
   *
   * Генерация файла style.scss.
   */
  protected makeCode(): this {
    const file = FILE_CODE
    const sample = this.readDefinable(file)

    sample.replaceConstructorClasses()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * This code generates the style.scss.
   *
   * Генерация файла style.scss.
   */
  protected makeMain(): this {
    const file = FILE_CLASS
    const sample = this.readDefinable(file)

    sample.replaceConstructorClasses()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }
}
