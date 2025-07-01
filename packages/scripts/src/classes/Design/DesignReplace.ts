// export:none

import { forEach, getColumn, toCamelCase, toCamelCaseFirst } from '@dxt-ui/functional'

import { DesignStructure } from './DesignStructure'

import type {
  DesignStructureClassesItem,
  DesignStructureItem,
  DesignStructureItemSub,
  DesignStructureList
} from '../../types/designTypes'

import { UI_KEY_CUSTOM } from '../../config'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'

/**
 * Class with basic replacement for templates.
 *
 * Класс с базовой заменой для шаблонов.
 */
export class DesignReplace {
  protected readonly component: string
  protected readonly mark: string

  /**
   * Constructor
   * @param structure object for working with components/ объект для работы с компонентами
   * @param mark метка для замена на имя
   * @param sample property template/ шаблон свойства
   */
  constructor(
    protected structure: DesignStructure,
    mark: string,
    protected sample: string
  ) {
    this.mark = toCamelCaseFirst(mark)
    this.component = this.structure.getComponentNameFirst()
  }

  /**
   * Returns the modified template.
   *
   * Возвращает изменённый шаблон.
   */
  get(): string {
    return this.sample
  }

  /**
   * Returns the path for importing the module.
   *
   * Возвращает путь для подключения модуля.
   */
  getRoot(): string {
    // const path = __filename.match(/node_modules\/([^/]+)/)

    // if (path) {
    //   return `${path?.[1]}/`
    // }

    return '../../'
  }

  /**
   * Changes the names in accordance with the component name.
   *
   * Изменяет названия в соответствии с названием компонента.
   * @param name the name of a file/ название файла
   */
  getNameFile(name: string): string {
    return name
      .replace(/\[project]/g, PropertiesConfig.getProjectName())
      .replace(/\[design]/g, this.structure.getDesign())
      .replace(/\[Design]/g, toCamelCaseFirst(this.structure.getDesign()))
      .replace(/\[component]/g, this.structure.getComponentName())
      .replace(/DesignComponent/g, this.structure.getFileName())
      .replace(new RegExp(this.mark, 'g'), this.component)
      .replace(new RegExp(`DefineSetupFn${this.component}`, 'g'), 'DefineSetupFnComponent')
  }

  /**
   * Changing the name of the component.
   *
   * Изменение названия компонента.
   */
  replaceName(): this {
    this.sample = this.getNameFile(this.sample)
    return this
  }

  /**
   * Change the path to the file.
   *
   * Изменение пути к файлу.
   */
  replacePath(): this {
    this.sample = this.sample.replace(/..\/..\/..\//g, this.getRoot())
    return this
  }

  /**
   * Replaces values with selected label.
   *
   * Заменяет значения на выбранную метку.
   * @param name label name/ название метки
   * @param data data for replacement/ данные для замены
   * @param end symbol at the end of the line/ символ в конце строки
   */
  replaceMark(
    name: string,
    data: string[],
    end = ''
  ): this {
    const regName = `(\\/\\/ |\\[/\\/]: # \\():${name} `
    const space = this.sample.match(new RegExp(`^( +)(${regName})`, 'm'))?.[1]

    if (space) {
      const inString = `\r\n${space}`
      const value = data
        .join(`${end}${inString}`)
        .replace(/\[space]/g, inString)

      if (value.trim() !== '') {
        this.sample = this.sample
          .replace(
            new RegExp(`(^ +)(${regName}.*?$)([\\S\\s]+)(^ +${regName})`, 'gm'),
            `$1$2${inString}${value}\r\n$4`
          )
      } else {
        this.sample = this.sample
          .replace(
            new RegExp(`(^ +)(${regName}.*?$)([\\S\\s]+)(^ +${regName})`, 'gm'),
            '$1$2\r\n$4'
          )
      }
    }

    return this
  }

  /**
   * Replaces values with the selected label only once.
   *
   * Заменяет значения на выбранную метку только 1 раз.
   * @param name label name/ название метки
   * @param removeReplacement data deletion/ удаление данных
   */
  replaceOnce(
    name = toCamelCase(this.mark),
    removeReplacement: boolean | ((data: string) => string) = false
  ): this {
    const exp1 = new RegExp(`\\/\\/ :${name}\\.once ([^\r\n]+)([\r\n ]*)`, 'g')
    const exp2 = new RegExp(`\\/\\* :${name}\\.once \\*\\/([\\S\\s]*?)\\/\\* :${name}\\.once\\.end \\*\\/([\r\n ]*)`, 'g')
    const exp3 = new RegExp(`\\/\\* :${name}\\.once (.*?) \\*\\/([\r\n ]*)`, 'g')
    const exp4 = new RegExp(`<!-- :${name}\\.once -->([\\S\\s]*?)<!-- :${name}\\.once\\.end -->([\r\n ]*)`, 'g')
    const exp5 = new RegExp(`<!-- :${name}\\.once (.*?) -->([\r\n ]*)`, 'g')

    const replacement = (...data: string[]) => {
      if (typeof removeReplacement === 'function') {
        return `${removeReplacement(data[1])}${data[2]}`
      } else if (removeReplacement) {
        return ''
      }

      return `${data[1]}${data[2]}`
    }

    this.sample = this.sample
      .replace(exp1, replacement)
      .replace(exp2, replacement)
      .replace(exp3, replacement)
      .replace(exp4, replacement)
      .replace(exp5, replacement)

    return this
  }

  /**
   * Adding types for properties.
   *
   * Добавление типов для свойств.
   * @param constructor additional data for processing/ дополнительные данные для обработки
   */
  replaceType(constructor?: string): this {
    const mark = 'type'
    const props = this.structure.get()
    const templates: string[] = []

    if (constructor) {
      templates.push(...this.getTypeForConstructor(constructor))
    }

    forEach(props, ({
      name,
      valueAll,
      style
    }) => {
      const types = this.getPropTypeByValue(valueAll, style)

      if (
        !this.initMarkAddValue(mark, name, types)
        && !this.isNoMark(mark, name)
      ) {
        const typesString = !constructor && !types.match(/string|boolean/) && types.match(/'/)
          ? `${types}` // string |
          : types

        templates.push(`${name}?: ${typesString}`)
      }
    })

    return this.replaceMark(mark, templates)
  }

  /**
   * Adding default values for properties.
   *
   * Добавление значения по умолчанию для свойств.
   */
  replaceDefault(): this {
    const mark = 'default'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, (item) => {
      if (
        item.default
        && !this.isNoMark(mark, item.name)
      ) {
        templates.push(`${item.name}: ${this.getDefault(item.default)}`)
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding types for properties.
   *
   * Добавление самих свойств.
   */
  replaceProps(): this {
    const mark = 'prop'
    const props = this.structure.get()
    const templates: string[] = []
    const indexDefault = this.getIndexDefault()

    forEach(props, (item) => {
      if (!this.isNoMark('type', item.name)) {
        const type = this.getPropByValue(item.name, item.valueAll)

        if (item.default) {
          templates.push(
            `${item.name}: {`
            + `[space]  type: ${type},`
            + `[space]  default: ${indexDefault}?.${item.name}`
            + '[space]}'
          )
        } else {
          templates.push(`${item.name}: ${type}`)
        }
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Transforms the given value into a list.
   *
   * Преобразовывает данное значение в список.
   */
  replacePropsValues(): this {
    const mark = 'values'
    const props = this.structure.get()
    const templates: string[] = []

    forEach(props, (item) => {
      if (!this.isNoMark('type', item.name)) {
        const values = this.getPropValuesByValue(item.valueAll)

        if (values) {
          templates.push(`${item.name}: [${values}]`)
        } else if (item.valueAll?.indexOf(UI_KEY_CUSTOM) !== -1) {
          templates.push(`${item.name}: []`)
        }
      }
    })

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding a list of available classes.
   *
   * Добавление списка доступных классов.
   * @param template a function that returns a template/ функция, которая возвращает шаблон
   * @param end symbol at the end of the line/ символ в конце строки
   */
  replaceClasses(
    template: (item: DesignStructureClassesItem) => string = (item: DesignStructureClassesItem) => `${item.index}: string`,
    end = ''
  ): this {
    const mark = 'classes'
    const classes = this.structure.getClasses()
    const templates: string[] = []

    forEach(classes, item => templates.push(template(item)))

    return this.replaceMark(mark, templates, end)
  }

  /**
   * Transformation for active status classes.
   *
   * Преобразование для активных классов статуса.
   */
  replaceClassesValues(): this {
    const mark = 'classes-values'
    const templates: string[] = [
      `'${this.structure?.getPathName()}': true`,
      ...this.initClassesValues()
    ]

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Transformation for active status classes.
   *
   * Преобразование для активных классов статуса.
   */
  replaceStylesValues(): this {
    const mark = 'styles-values'
    const templates: string[] = this.initStylesValues()

    return this.replaceMark(mark, templates, ',')
  }

  /**
   * Adding a list of available classes for a constructor.
   *
   * Добавление списка доступных классов для конструктора.
   */
  replaceConstructorClasses(): this {
    return this.replaceClasses(
      (item: DesignStructureClassesItem) => {
        if (item.full) {
          return `${item.index}: '${item.className}'`
        }

        return `${item.index}: this.getSubClass('${item.className}')`
      },
      ','
    )
  }

  /**
   * Checks if the data type is boolean.
   *
   * Проверяет, является ли тип данных булевым.
   * @param value values to check/ значения для проверки
   */
  protected isBoolean(value: DesignStructureItem['value']): boolean {
    return value.indexOf(true) !== -1
  }

  /**
   * Checks if the data type is string.
   *
   * Проверяет, является ли тип данных строковым.
   * @param value values to check/ значения для проверки
   */
  protected isString(value: DesignStructureItem['value']): boolean {
    return value.length > 0 && value[0] !== true
  }

  /**
   * Checks whether the current property should be excluded by its label.
   *
   * Проверяет, следует ли исключить текущее свойство по его метке.
   * @param mark label property/ метка свойства
   * @param name property name/ название свойства
   */
  protected isNoMark(
    mark: string,
    name: string
  ): boolean {
    return Boolean(this.sample.match(`:${mark}.${name}.none`))
  }

  /**
   * Returns default values.
   *
   * Возвращает значения по умолчанию.
   * @param value default values/ значения по умолчанию
   */
  protected getDefault(value: DesignStructureItem['default']): string {
    if (typeof value === 'string') {
      return `'${value}'`
    } else {
      return `${value}`
    }
  }

  /**
   * Returns available types for property.
   *
   * Возвращает доступные типы для свойства.
   * @param name property name/ название свойства
   * @param value values to check/ значения для проверки
   */
  protected getPropByValue(
    name: string,
    value: DesignStructureItem['value']
  ): string {
    if (!this.isString(value)) {
      return 'Boolean'
    }

    const type = this.isBoolean(value) ? '[String, Boolean]' : 'String'
    const index = this.getIndexProp()

    if (index) {
      return `${type} as PropType<${index}['${name}']>`
    }

    return type
  }

  /**
   * Returns a string with the data type.
   *
   * Возвращает строку с типом данных.
   * @param value values to check/ значения для проверки
   * @param style is the property style present/ является ли свойство style
   */
  protected getPropTypeByValue(
    value: DesignStructureItem['value'],
    style?: boolean
  ): string {
    const types: string[] = []

    if (this.isBoolean(value)) {
      types.push('boolean')
    }

    if (style) {
      types.push('string')
    }

    if (this.isString(value)) {
      value.forEach(item => types.push(item === true ? 'true' : `'${item}'`))
    }

    if (types.length === 0) {
      types.push('boolean')
    }

    return types.join(' | ')
  }

  /**
   * Getting a list of available data for the property.
   *
   * Получение списка доступных данных у свойства.
   * @param value values to check/ значения для проверки
   */
  protected getPropValuesByValue(
    value: DesignStructureItem['value']
  ): string | undefined {
    if (this.isString(value)) {
      const types: string[] = []

      value.forEach((item) => {
        if (item !== UI_KEY_CUSTOM) {
          types.push(item === true ? 'true' : `'${item}'`)
        }
      })
      return types.join(', ')
    }

    return undefined
  }

  /**
   * Returns the names of parameters.
   *
   * Возвращает названия параметров переменных.
   */
  protected getIndexProp(): string | undefined {
    return this.sample.match(/type ([a-zA-Z]*Props[a-zA-Z]*) =/)?.[1]
  }

  /**
   * Returns the names of parameters and their default values.
   *
   * Возвращает названия параметров и значения по умолчанию.
   */
  protected getIndexDefault(): string | undefined {
    return this.sample.match(/const ([a-zA-Z]*defaults[a-zA-Z]*)[ :]/)?.[1]
  }

  /**
   * Getting base properties from a constructor.
   *
   * Получение базовых свойств из конструктора.
   * @param constructor data for processing/ данные для обработки
   */
  protected getTypeForConstructor(constructor: string): string[] {
    const props = getColumn(this.structure.get(), 'name')
    const templates: string[] = []

    constructor
      .match(/(?<=type[^{]+Props[^{]+{[^{}]+)(^[^\n{}/]+$)(?=[^{}]+^})/igm)
      ?.forEach((string) => {
        const name = string.match(/[a-z0-9]+(?=[?:])/i)?.[0]

        if (name && props.indexOf(name) === -1) {
          templates.push(`// [constructor] ${string.trim()}`)
        }
      })

    return templates
  }

  /**
   * Adds new data from tokens to existing data.
   *
   * Добавляет новые данные из токенов к уже существующим.
   * @param mark label property/ метка свойства
   * @param name property name/ название свойства
   * @param value property value/ значение свойства
   */
  protected initMarkAddValue(
    mark: string,
    name: string,
    value: string
  ): boolean {
    if (
      this.sample.match(`:${mark}.${name}`)
    ) {
      this.sample = this.sample
        .replace(
          new RegExp(`(/[*] ?:${mark}[.]${name} ?[*]/)[^\r\n]*`, 'g'),
          `$1 | ${value}`
        )

      return true
    }

    return false
  }

  /**
   * Getting an array with all classes and conditions of activity status.
   *
   * Получение массива со всеми классами и условиями статуса активности.
   * @param items data list/ список данных
   * @param parent ancestor data/ данные о предке
   * @param values activity conditions/ условия активности
   * @protected
   */
  protected initClassesValues(
    items: DesignStructureList | DesignStructureItemSub[] = this.structure.get(),
    parent: string = this.structure?.getPathName() ?? '',
    values: string[] = []
  ): string[] {
    const templates: string[] = []

    forEach(items, (item) => {
      const {
        name,
        value,
        state
      } = item

      const index = `props.${name}`
      const newParent = ('className' in item && item?.className as string) || `${parent}--${name}`
      const newValues = [
        ...values,
        this.isString(value) ? `Boolean(${index})` : index,
        ...this.initClassesCategory(item)
      ]

      if (this.isBoolean(value)) {
        templates.push(
          `'${newParent}': ${newValues.join(' && ')}`,
          ...this.initClassesValues(state, newParent, newValues)
        )
      }

      if ('style' in item && item.style) {
        templates.push(`'${newParent}--${UI_KEY_CUSTOM}': isFilled(${index}) && !inArray(propsValues.${name}, ${index})`)
      }

      if (
        this.isString(value)
        && !(value.length === 1 && value[0] === UI_KEY_CUSTOM)
      ) {
        templates.push(`[\`${newParent.match(/-palette$/) ? `${newParent} ` : ''}${newParent}--\${${index}}\`]: inArray(propsValues.${name}, ${index})`)
      }
    })

    return templates
  }

  /**
   * Adding an exception for the current property.
   *
   * Добавление исключения для текущего свойства.
   * @param item object for checking/ объект для проверки
   */
  protected initClassesCategory(item: DesignStructureItem | DesignStructureItemSub): string[] {
    const values: string[] = []

    if (
      'category' in item
      && item.category
      && Boolean(item.default)
    ) {
      forEach(this.structure.get(), ({
        name,
        category
      }) => {
        if (item.name !== name && item.category === category) {
          values.push(`!props.${name}`)
        }
      })
    }

    return values
  }

  /**
   * Getting an array with all component styles.
   *
   * Получение массива со всеми стилями компонента.
   * @param items data list/ список данных
   */
  protected initStylesValues(
    items: DesignStructureList = this.structure.get()
  ): string[] {
    const templates: string[] = []
    const className = this.structure?.getPathName()

    forEach(items, ({
      name,
      style
    }) => {
      if (style) {
        templates.push(`'--${className}-sys-${name}': props.${name} ?? null`)
      }
    })

    return templates
  }
}
