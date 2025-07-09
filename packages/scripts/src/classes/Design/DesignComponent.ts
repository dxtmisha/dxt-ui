// export:none

import type { StorybookComponentsDescriptionItem } from '@dxt-ui/wiki'
import { wikiDescriptions } from '@dxt-ui/wiki/media'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignCommand } from './DesignCommand'
import { DesignTypescript } from './DesignTypescript'
import type { DesignReplace } from './DesignReplace'

import {
  UI_DIR_COMPONENTS,
  UI_DIR_CONSTRUCTOR,
  UI_DIR_IN,
  UI_DIRS_COMPONENTS,
  UI_PROJECT_CONSTRUCTOR_FULL_NAME,
  UI_PROJECT_CONSTRUCTOR_NAME
} from '../../config'
import { forEach, isObjectNotArray } from '@dxt-ui/functional'

const FILE_PROPERTIES = 'properties.json'
const FILE_PROPS = 'props.ts'
const FILE_STYLE = 'styleToken.scss'
const FILE_CLASS = 'DesignComponent.vue'
const FILE_INDEX = 'index.ts'
const FILE_WIKI = 'wiki.ts'
const FILE_STORIES = 'DesignComponent.stories.ts'
const FILE_STORIES_DOCUMENTATION = 'DesignComponent.mdx'

/**
 * Class for creating a component or updating data.
 *
 * Класс для создания компонента или обновления данных.
 */
export class DesignComponent extends DesignCommand {
  protected DIR_SAMPLE: string = 'component'
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

    const structure = this.getStructure()

    this.dir = [
      PropertiesFile.getRoot(),
      ...UI_DIRS_COMPONENTS,
      PropertiesConfig.getProjectName(),
      structure.getComponentNameFirst()
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
      .makeStyle()
      .makeMain()
      .makeIndex()
      .makeWiki()
      .makeStories()
      .makeStoriesDocumentation()
  }

  /**
   * This code generates the properties.json.
   *
   * Генерация файла properties.json.
   */
  protected makeProperties(): this {
    const file = FILE_PROPERTIES

    if (!this.isFile(file)) {
      this.write(file, `{\r\n  "main": "{d.${this.getStructure().getComponentName()}}"\r\n}\r\n`)
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
    const constructor = this.getFileConstructor(file)

    sample
      .replaceType(constructor)
      .replaceDefault()
      .replaceProps()
      .replacePropsValues()

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
    const sample = this.readDefinable(file)
    const styles = this.getStructure().getStyles()

    sample.replaceMark('style', styles)

    this.write(file, sample.get())
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

    sample.replaceClassesValues()
    sample.replaceStylesValues()

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * This code generates the index.ts.
   *
   * Генерация файла index.ts.
   */
  protected makeIndex(): this {
    const file = FILE_INDEX
    const sample = this.readDefinable(file)

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the wiki.ts.
   *
   * Генерация файла wiki.ts.
   */
  protected makeWiki(): this {
    const file = FILE_WIKI
    const root = PropertiesFile.getRootProject()
    const componentName = this.getStructure().getComponentNameFirst()
    const sample = this.readDefinable(file)

    if (root) {
      const props: string[] = []
      const ts = new DesignTypescript(
        PropertiesFile.joinPath([
          PropertiesFile.getRoot(),
          UI_DIR_IN,
          UI_DIR_COMPONENTS,
          PropertiesConfig.getProjectName(),
          componentName,
          FILE_PROPS
        ]),
        {
          paths: {
            [`${UI_PROJECT_CONSTRUCTOR_FULL_NAME}/${componentName}`]: [
              PropertiesFile.joinPath([
                root,
                UI_PROJECT_CONSTRUCTOR_NAME,
                UI_DIR_IN,
                UI_DIR_CONSTRUCTOR,
                componentName,
                FILE_INDEX
              ])
            ]
          }
        }
      )

      const typeInfo = ts.getType(`${componentName}Props`)?.props

      if (typeInfo) {
        typeInfo
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach((prop) => {
            const option = prop.option
            let item: string = ''

            item += `{ name: '${prop.name}', type: '${prop.type}'`

            if (
              option
              && option.length > 0
            ) {
              item += `, option: [${option.map(item => `'${item}'`).join(', ')}]`
            }

            item += ` }`
            props.push(item)
          })

        sample.replaceMark('propsList', props, ',')
      }
    }

    this.write(file, sample.get())
    return this
  }

  /**
   * This code generates the stories.ts.
   *
   * Генерация файла stories.ts.
   */
  protected makeStories(): this {
    const file = FILE_STORIES
    const sample = this.readDefinable(file)
    const description = this.getWikiDescription()

    if (description) {
      this.replaceMarkStoriesRender(sample, description)
        .replaceMarkStoriesStories(sample, description)
        .replaceMarkStoriesImport(sample, description)
    }

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * This code generates the mdx.
   *
   * Генерация файла mdx.
   */
  protected makeStoriesDocumentation(): this {
    const file = FILE_STORIES_DOCUMENTATION
    const sample = this.readDefinable(file)
    const documentation = this.getWikiDescription()?.documentation

    if (documentation) {
      this
        .replaceMarkDocumentation(sample, 'import', documentation.import)
        .replaceMarkDocumentation(sample, 'body', documentation.body)
        .replaceMarkDocumentation(sample, 'events', documentation.events, 'Events')
        .replaceMarkDocumentation(sample, 'expose', documentation.expose, 'Expose')
        .replaceMarkDocumentation(sample, 'slots', documentation.slots, 'Slots')
    }

    this.write(sample.getNameFile(file), sample.get())
    return this
  }

  /**
   * Getting the contents of a file from a constructor.
   *
   * Получение содержимого файла из конструктора.
   * @param file file name/ имя файла
   */
  private getFileConstructor(file: string): string {
    const path: string[] = ['..', '..', UI_DIR_CONSTRUCTOR, this.getStructure().getComponentNameFirst(), file]
    const constructor = this.read(path)

    return constructor ?? ''
  }

  /**
   * Returns the description of the component from the wiki
   *
   * Возвращает описание компонента из вики
   */
  private getWikiDescription(): StorybookComponentsDescriptionItem | undefined {
    const name = this.getStructure().getComponentNameFirst()
    return wikiDescriptions.find(item => item.name === name)
  }

  /**
   * Returns the import of components for stories.
   *
   * Возвращает импорт компонентов для сториз.
   * @param description description of the component/ описание компонента
   */
  private getStoriesComponentsImport(description: StorybookComponentsDescriptionItem): string[] {
    if (description.stories) {
      const components: string[] = []

      description.stories.forEach((story) => {
        if (story.components) {
          story.components.forEach((component) => {
            components.push(component)
          })
        }
      })

      return components
    }

    return []
  }

  /**
   * Replaces the render in the sample.
   *
   * Заменяет рендер в сэмпле.
   * @param sample sample for replacement/ сэмпл для замены
   * @param description description of the component/ описание компонента
   */
  private replaceMarkStoriesRender(
    sample: DesignReplace,
    description: StorybookComponentsDescriptionItem
  ): this {
    if (description.render) {
      const name = this.getStructure().getFullComponentName()

      sample.replaceMark(
        'story-main',
        [
          'render: (args: any) => ({',
          `  components: { ${name} },`,
          '  setup: () => ({ args }),',
          '  template: `',
          `    ${description.render.trim()}`,
          '  `',
          '})'
        ]
      )
    }

    return this
  }

  /**
   * Replaces the import in the sample.
   *
   * Заменяет импорт в сэмпле.
   * @param sample sample for replacement/ сэмпл для замены
   * @param description description of the component/ описание компонента
   */
  private replaceMarkStoriesImport(
    sample: DesignReplace,
    description: StorybookComponentsDescriptionItem
  ): this {
    const design = this.getStructure().getDesignFirst()
    const imports: string[] = []

    this.getStoriesComponentsImport(description).forEach((component) => {
      const name = `${design}${component}`
      imports.push(`import ${name} from '../${component}/${name}.vue'`)
    })

    if (description.import) {
      imports.push(...description.import)
    }

    sample.replaceMark('story-import', imports)
    return this
  }

  /**
   * Replaces the stories in the sample.
   *
   * Заменяет истории в сэмпле.
   * @param sample sample for replacement/ сэмпл для замены
   * @param description description of the component/ описание компонента
   */
  private replaceMarkStoriesStories(
    sample: DesignReplace,
    description: StorybookComponentsDescriptionItem
  ): this {
    if (description.stories) {
      const wikiLanguage = PropertiesConfig.getWikiLanguage()
      const design = this.getStructure().getDesignFirst()
      const name = this.getStructure().getFullComponentName()
      const stories: string[] = []

      description.stories.forEach((story) => {
        const components = story.components && forEach(story.components, component => `${design}${component}`)
        const template = story.template
          .replace(/DesignComponent/g, name).trim()
          .replace(/<(\/?)Design/g, `<$1${design}`)

        stories.push(`export const ${story.id}: Story = {`)

        if (isObjectNotArray(story.name) && story.name?.[wikiLanguage]) {
          stories.push(`  name: '${story.name?.[wikiLanguage]}',`)
        }

        stories.push(`  render: () => ({`)
        stories.push(`    components: { ${name}${components ? `, ${components.join(', ')}` : ''} },`)

        if (story.setup) {
          stories.push(`    setup() {`)
          stories.push(`      ${story.setup.trim()}`)
          stories.push(`    },`)
        }

        stories.push(`    template: \``)
        stories.push(`        ${template}`)
        stories.push(`    \``)
        stories.push(`  })`)
        stories.push(`}`)
      })

      sample.replaceMark('story-items', stories)
    }

    return this
  }

  /**
   * Replaces the documentation in the sample.
   *
   * Заменяет документацию в сэмпле.
   * @param sample sample for replacement/ сэмпл для замены
   * @param type type of the documentation to replace/ тип документации для замены
   * @param documentation documentation text/ текст документации
   * @param name name of the documentation section/ название секции документации
   */
  private replaceMarkDocumentation(
    sample: DesignReplace,
    type: string,
    documentation?: string,
    name?: string
  ): this {
    if (documentation) {
      const component = this.getStructure().getComponentNameFirst()
      const data = []

      if (name) {
        data.push(`## ${name}`)
      }

      data.push(documentation.replace(new RegExp('Component', 'g'), component))
      sample.replaceMark(`documentation-${type}`, data)
    }

    return this
  }
}
