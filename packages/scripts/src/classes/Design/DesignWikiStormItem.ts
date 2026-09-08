// export:none

import { isArray, isObject, toCamelCaseFirst } from '@dxtmisha/functional-basic'
import type { WikiDataItem, WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki'
import ts from 'typescript'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { LibraryData } from '../../types/libraryTypes'
import type {
  WebTypesEventItem,
  WebTypesProperty,
  WebTypesPropItem,
  WebTypesSlots,
  WebTypesVueComponentItem
} from '../../types/webTypes'

/** Mapping for StorybookControl enum values / Маппинг для значений перечисления StorybookControl */
const storybookControlMap: Record<string, string> = {
  text: 'text',
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  select: 'select',
  array: 'array',
  object: 'object'
}

/** Mapping for StorybookCategory enum values / Маппинг для значений перечисления StorybookCategory */
const storybookCategoryMap: Record<string, string> = {
  actions: 'Actions',
  adaptive: 'Adaptive',
  aria: 'ARIA',
  arrow: 'Arrow',
  attributes: 'Attributes',
  bars: 'Bars',
  counter: 'Counter',
  form: 'Form',
  hook: 'Hook',
  icon: 'Icon',
  information: 'Information',
  mask: 'Mask',
  option: 'Options',
  search: 'Search',
  sort: 'Sort',
  status: 'Status',
  style: 'Styles',
  technical: 'Technical',
  text: 'Text',
  value: 'Values'
}

/**
 * Resolver for extracting and formatting IDE metadata for a specific component.
 * It coordinates the transformation of Storybook-specific wiki data into JetBrains Web-Types tag and attribute definitions.
 *
 * Резолвер для извлечения и форматирования метаданных IDE для конкретного компонента.
 * Координирует преобразование данных вики для Storybook в определения тегов и атрибутов JetBrains Web-Types.
 */
export class DesignWikiStormItem {
  /** Cached design wiki dictionary / Кэшированный словарь вики дизайна */
  protected static wikiDesignCache?: Record<string, any>

  /** Cached design wiki descriptions / Кэшированные описания вики дизайна */
  protected static wikiDescriptionsCache?: any[]

  /** Storybook wiki instance / Экземпляр Storybook вики */
  protected wiki?: WikiStorybook

  /** Component wiki data item / Элемент данных вики компонента */
  protected dataComponent?: WikiDataItem

  /**
   * Constructor for DesignWikiStormItem.
   *
   * Конструктор для DesignWikiStormItem.
   * @param project name of the project for module mapping / имя проекта для маппинга модулей
   * @param path array of directory path segments to the component / массив сегментов пути к директории компонента
   * @param data component metadata from the library / метаданные компонента из библиотеки
   */
  constructor(
    protected readonly project: string,
    protected readonly path: string[],
    protected readonly data: LibraryData
  ) {
  }

  /**
   * Returns the tag definition for web-types.
   *
   * Возвращает определение тега для web-types.
   * @returns component item for web-types or undefined / элемент компонента для web-types или undefined
   */
  async get(): Promise<WebTypesVueComponentItem | undefined> {
    if (this.wiki) {
      const name = `${toCamelCaseFirst(PropertiesConfig.getDesignName())}${this.wiki.getName()}`

      const component: WebTypesVueComponentItem = {
        name,
        description: this.wiki.getDescription(),
        source: {
          module: `${this.project}/${name}`,
          symbol: name
        },
        props: this.getProps()
      }

      const slots = await this.getSlots()

      if (slots) {
        component.slots = slots
      }

      const events = await this.getEvents()

      if (events && events.length > 0) {
        component.js = {
          events
        }
      }

      return component
    }

    return undefined
  }

  /**
   * Returns the directory name.
   *
   * Возвращает имя директории.
   * @returns component directory name / имя директории компонента
   */
  getDirName(): string {
    return this.data.dir
  }

  /**
   * Returns a list of events.
   *
   * Возвращает список событий.
   * @returns list of web-types event items or undefined / список элементов событий web-types или undefined
   */
  async getEvents(): Promise<WebTypesEventItem[] | undefined> {
    const data = await this.getData()

    if (data && data.events) {
      const events: WebTypesEventItem[] = []

      data.events.forEach(
        (event) => {
          let typeString = '() => void'
          if (event.properties && event.properties.length > 0) {
            const args = event.properties
              .map(propertyItem => `${propertyItem.name}: ${propertyItem.type ? this.cleanType(propertyItem.type) : 'any'}`)
              .join(', ')
            typeString = `(${args}) => void`
          }

          events.push({
            name: event.name,
            description: event.description,
            type: typeString
          })
        }
      )

      return events
    }

    return undefined
  }

  /**
   * Returns the prop definition.
   *
   * Возвращает определение свойства.
   * @param item prop item / элемент свойства
   * @returns prop item definition / определение элемента свойства
   */
  getProp(item: WikiStorybookProp): WebTypesPropItem {
    let type: string | undefined
    const options = item.getOptions()

    if (options) {
      if (isArray(options)) {
        type = options
          .map(optionItem => typeof optionItem === 'string' ? `'${optionItem}'` : String(optionItem))
          .join(' | ')
      } else if (isObject(options)) {
        type = Object.keys(options)
          .map(optionItem => `'${optionItem}'`)
          .join(' | ')
      }
    }

    if (!type) {
      const rawType = item.getType()
      type = rawType ? this.cleanType(rawType) : undefined
    }

    return {
      name: item.getName(),
      description: item.getDescription(),
      default: item.getDefaultValue() ?? undefined,
      type
    }
  }

  /**
   * Returns a list of props.
   *
   * Возвращает список свойств.
   * @returns list of prop items / список элементов свойств
   */
  getProps(): WebTypesPropItem[] {
    const props: WebTypesPropItem[] = []

    if (this.wiki) {
      this.wiki.getWikiObject()
        .forEach(
          item => props.push(this.getProp(item))
        )
    }

    return props
  }

  /**
   * Returns a list of slots.
   *
   * Возвращает список слотов.
   * @returns list of web-types slots or undefined / список слотов web-types или undefined
   */
  async getSlots(): Promise<WebTypesSlots | undefined> {
    const data = await this.getData()

    if (data && data.slots) {
      const slots: WebTypesSlots = []

      data.slots.forEach(
        (slot) => {
          const vueProperties: WebTypesProperty[] = (slot.properties ?? []).map(propertyItem => ({
            name: propertyItem.name,
            type: propertyItem.type ? this.cleanType(propertyItem.type) : undefined
          }))

          slots.push({
            'name': slot.name,
            'description': slot.description,
            'vue-properties': vueProperties
          })
        }
      )

      return slots
    }

    return undefined
  }

  /**
   * Initializes the class.
   *
   * Инициализирует класс.
   * @returns current instance / текущий экземпляр
   */
  async init(): Promise<this> {
    this.wiki = await this.initWiki()
    return this
  }

  /**
   * Gets wiki data by parsing wikiData.ts via TypeScript AST.
   *
   * Получает данные вики путем парсинга wikiData.ts через TypeScript AST.
   * @returns wiki data item or undefined / элемент данных вики или undefined
   */
  protected async getData(): Promise<WikiDataItem | undefined> {
    if (!this.dataComponent) {
      const filePath = this.getPaths(['wikiData.ts'])

      if (PropertiesFile.is(filePath)) {
        const content = PropertiesFile.readFileOnly(filePath)

        if (content) {
          const sourceFile = ts.createSourceFile(
            'wikiData.ts',
            content,
            ts.ScriptTarget.Latest,
            true
          )
          const variablesMap = this.extractVariables(sourceFile)

          let wikiDataNode: ts.Node | undefined

          for (const [name, initializer] of variablesMap.entries()) {
            if (name.endsWith('WikiData')) {
              wikiDataNode = initializer
              break
            }
          }

          if (!wikiDataNode) {
            for (const initializer of variablesMap.values()) {
              if (ts.isObjectLiteralExpression(initializer)) {
                const hasComponent = initializer.properties.some(
                  prop => ts.isPropertyAssignment(prop) && prop.name.getText().replace(/^['"]|['"]$/g, '') === 'component'
                )

                if (hasComponent) {
                  wikiDataNode = initializer
                  break
                }
              }
            }
          }

          const parsed = wikiDataNode ? (this.evalNode(wikiDataNode, variablesMap) as Record<string, any>) : undefined
          const component = parsed?.component ?? this.getDirName()
          const props = parsed?.props ?? (variablesMap.has('propsNames') ? this.evalNode(variablesMap.get('propsNames')!, variablesMap) : [])
          const slots = parsed?.slots ?? (variablesMap.has('slotsNames') ? this.evalNode(variablesMap.get('slotsNames')!, variablesMap) : [])
          const events = parsed?.events ?? (variablesMap.has('eventsNames') ? this.evalNode(variablesMap.get('eventsNames')!, variablesMap) : [])
          const defaults = (parsed?.defaults && isObject(parsed.defaults)) ? parsed.defaults : this.getDefaultsFromProps()
          const wikiDesign = (parsed?.wikiDesign && isObject(parsed.wikiDesign)) ? parsed.wikiDesign : this.getWikiDesign()

          this.dataComponent = {
            component,
            props: isArray(props) ? props : [],
            slots: isArray(slots) ? slots : [],
            events: isArray(events) ? events : [],
            defaults,
            wikiDesign
          }
        }
      }
    }

    return this.dataComponent
  }

  /**
   * Extracts default prop values by parsing props.ts via TypeScript AST.
   *
   * Извлекает значения свойств по умолчанию путем парсинга props.ts через TypeScript AST.
   * @returns dictionary of default prop values / словарь значений свойств по умолчанию
   */
  protected getDefaultsFromProps(): Record<string, any> {
    const propsPath = this.getPaths(['props.ts'])

    if (PropertiesFile.is(propsPath)) {
      const content = PropertiesFile.readFileOnly(propsPath)

      if (content) {
        const sourceFile = ts.createSourceFile(
          'props.ts',
          content,
          ts.ScriptTarget.Latest,
          true
        )
        const variablesMap = this.extractVariables(sourceFile)
        const defaultsNode = variablesMap.get('defaults')

        if (defaultsNode) {
          const result = this.evalNode(defaultsNode, variablesMap)
          if (isObject(result)) {
            return result as Record<string, any>
          }
        }
      }
    }

    return {}
  }

  /**
   * Returns the list of directories.
   *
   * Возвращает список директорий.
   * @returns directory path segments / сегменты пути директории
   */
  protected getDirs(): string[] {
    return [
      '.',
      ...this.path,
      this.getDirName()
    ]
  }

  /**
   * Returns the full path to the file.
   *
   * Возвращает полный путь к файлу.
   * @param paths path segments / сегменты пути
   * @returns full combined path segments / полные объединенные сегменты пути
   */
  protected getPaths(paths: string[]): string[] {
    return [
      ...this.getDirs(),
      ...paths
    ]
  }

  /**
   * Extracts design wiki descriptions by parsing all files in src/wiki via TypeScript AST.
   *
   * Извлекает описания вики дизайна путем парсинга всех файлов в src/wiki через TypeScript AST.
   * @returns array of component wiki descriptions or undefined / массив описаний вики компонентов или undefined
   */
  protected getWikiDescriptions(): any[] | undefined {
    if (DesignWikiStormItem.wikiDescriptionsCache) {
      return DesignWikiStormItem.wikiDescriptionsCache
    }

    this.loadWikiFiles()
    return DesignWikiStormItem.wikiDescriptionsCache
  }

  /**
   * Extracts design wiki overrides by parsing all files in src/wiki via TypeScript AST.
   *
   * Извлекает переопределения вики дизайна путем парсинга всех файлов в src/wiki через TypeScript AST.
   * @returns dictionary of design wiki overrides / словарь переопределений вики дизайна
   */
  protected getWikiDesign(): Record<string, any> {
    if (DesignWikiStormItem.wikiDesignCache) {
      return DesignWikiStormItem.wikiDesignCache
    }

    this.loadWikiFiles()
    return DesignWikiStormItem.wikiDesignCache ?? {}
  }

  /**
   * Cleans a type string by removing redundant parentheses and trailing undefined.
   *
   * Очищает строку типа, удаляя лишние скобки и завершающий undefined.
   * @param type input type string / входная строка типа
   * @returns cleaned type string / очищенная строка типа
   */
  protected cleanType(type: string): string {
    let result = type.trim()

    result = result.replace(/\s*\|\s*undefined$/, '').trim()

    while (result.startsWith('(') && result.endsWith(')')) {
      let depth = 0
      let isEnclosing = true

      for (let i = 0; i < result.length - 1; i++) {
        const char = result[i]
        if (char === '(') {
          depth++
        } else if (char === ')') {
          depth--
        }

        if (depth === 0) {
          isEnclosing = false
          break
        }
      }

      if (isEnclosing) {
        result = result.slice(1, -1).trim()
      } else {
        break
      }
    }

    return result
  }

  /**
   * Evaluates a TypeScript AST node into a runtime JavaScript value.
   *
   * Вычисляет узел TypeScript AST в значение среды выполнения JavaScript.
   * @param node target AST node to evaluate / целевой узел AST для вычисления
   * @param variablesMap map of collected top-level variable declarations / карта собранных объявлений переменных верхнего уровня
   * @returns evaluated value / вычисленное значение
   */
  protected evalNode(node: ts.Node, variablesMap: Map<string, ts.Node>): unknown {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      return node.text
    }

    if (ts.isNumericLiteral(node)) {
      return Number(node.text)
    }

    if (node.kind === ts.SyntaxKind.TrueKeyword) {
      return true
    }

    if (node.kind === ts.SyntaxKind.FalseKeyword) {
      return false
    }

    if (node.kind === ts.SyntaxKind.NullKeyword) {
      return null
    }

    if (node.kind === ts.SyntaxKind.UndefinedKeyword) {
      return undefined
    }

    if (ts.isPrefixUnaryExpression(node)) {
      if (node.operator === ts.SyntaxKind.MinusToken && ts.isNumericLiteral(node.operand)) {
        return -Number(node.operand.text)
      }

      if (node.operator === ts.SyntaxKind.ExclamationToken) {
        return !this.evalNode(node.operand, variablesMap)
      }
    }

    if (ts.isArrayLiteralExpression(node)) {
      return node.elements.map(element => this.evalNode(element, variablesMap))
    }

    if (ts.isObjectLiteralExpression(node)) {
      const result: Record<string, any> = {}

      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const propName = prop.name.getText().replace(/^['"]|['"]$/g, '')
          result[propName] = this.evalNode(prop.initializer, variablesMap)
        } else if (ts.isShorthandPropertyAssignment(prop)) {
          const propName = prop.name.text
          if (variablesMap.has(propName)) {
            result[propName] = this.evalNode(variablesMap.get(propName)!, variablesMap)
          }
        } else if (ts.isSpreadAssignment(prop)) {
          const spreadValue = this.evalNode(prop.expression, variablesMap)
          if (isObject(spreadValue)) {
            Object.assign(result, spreadValue)
          }
        }
      }

      return result
    }

    if (ts.isPropertyAccessExpression(node)) {
      const objectName = node.expression.getText().replace(/^['"]|['"]$/g, '')
      const propertyName = node.name.text

      if (objectName === 'StorybookControl') {
        return storybookControlMap[propertyName] ?? propertyName
      }

      if (objectName === 'StorybookCategory') {
        return storybookCategoryMap[propertyName] ?? propertyName
      }

      const targetObject = this.evalNode(node.expression, variablesMap)
      if (isObject(targetObject) && propertyName in (targetObject as Record<string, any>)) {
        return (targetObject as Record<string, any>)[propertyName]
      }

      return propertyName
    }

    if (ts.isIdentifier(node)) {
      const varName = node.text
      if (variablesMap.has(varName)) {
        return this.evalNode(variablesMap.get(varName)!, variablesMap)
      }
      return undefined
    }

    if (
      ts.isAsExpression(node)
      || ts.isTypeAssertionExpression(node)
      || ts.isParenthesizedExpression(node)
    ) {
      return this.evalNode(node.expression, variablesMap)
    }

    return undefined
  }

  /**
   * Extracts top-level variable declarations from a TypeScript source file.
   *
   * Извлекает объявления переменных верхнего уровня из исходного файла TypeScript.
   * @param sourceFile target TypeScript source file / целевой исходный файл TypeScript
   * @returns map of variable names to their initializer AST nodes / карта имен переменных и их узлов инициализации AST
   */
  protected extractVariables(sourceFile: ts.SourceFile): Map<string, ts.Node> {
    const variablesMap = new Map<string, ts.Node>()

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isVariableStatement(node)) {
        for (const declaration of node.declarationList.declarations) {
          if (ts.isIdentifier(declaration.name) && declaration.initializer) {
            variablesMap.set(declaration.name.text, declaration.initializer)
          }
        }
      }
    })

    return variablesMap
  }

  /**
   * Initializes the wiki object.
   *
   * Инициализирует объект wiki.
   * @returns initialized WikiStorybook instance or undefined / инициализированный экземпляр WikiStorybook или undefined
   */
  protected async initWiki(): Promise<WikiStorybook | undefined> {
    const data = await this.getData()

    if (data) {
      const { WikiStorybook } = await import('@dxtmisha/wiki')
      const { wiki, wikiDescriptions: baseDescriptions } = await import('@dxtmisha/wiki/media')

      const customDescriptions = this.getWikiDescriptions()
      const mergedDescriptions = customDescriptions && customDescriptions.length > 0
        ? [...baseDescriptions, ...customDescriptions]
        : baseDescriptions

      return new WikiStorybook(
        data.component,
        data.props,
        data.defaults,
        data.wikiDesign,
        wiki,
        mergedDescriptions
      )
    }

    return undefined
  }

  /**
   * Scans and parses all files in src/wiki directory via TypeScript AST to populate wiki caches.
   *
   * Сканирует и парсит все файлы в директории src/wiki через TypeScript AST для заполнения кэшей вики.
   */
  protected loadWikiFiles(): void {
    if (DesignWikiStormItem.wikiDesignCache) {
      return
    }

    const wikiDirs = [
      ['.', 'src', 'wiki'],
      ['src', 'wiki']
    ]

    const targetDir = wikiDirs.find(dir => PropertiesFile.is(dir))

    if (!targetDir) {
      DesignWikiStormItem.wikiDesignCache = {}
      return
    }

    const files = PropertiesFile.readDirRecursive(targetDir)
      .filter(file => file.endsWith('.ts') || file.endsWith('.js'))

    const allVariablesMap = new Map<string, ts.Node>()

    for (const file of files) {
      const filePath = [...targetDir, file]
      const content = PropertiesFile.readFileOnly(filePath)

      if (content) {
        const sourceFile = ts.createSourceFile(
          file,
          content,
          ts.ScriptTarget.Latest,
          true
        )

        const fileVariables = this.extractVariables(sourceFile)
        for (const [name, initializer] of fileVariables.entries()) {
          allVariablesMap.set(name, initializer)
        }
      }
    }

    const designWiki: Record<string, any> = {}

    for (const [name, initializer] of allVariablesMap.entries()) {
      if (name === 'wikiDescriptions' || name.endsWith('Descriptions')) {
        const evaluated = this.evalNode(initializer, allVariablesMap)
        if (isArray(evaluated)) {
          DesignWikiStormItem.wikiDescriptionsCache = evaluated
        }
      } else if (name.startsWith('wiki')) {
        const evaluated = this.evalNode(initializer, allVariablesMap)
        if (isObject(evaluated)) {
          Object.assign(designWiki, evaluated)
        }
      }
    }

    DesignWikiStormItem.wikiDesignCache = designWiki
  }
}
