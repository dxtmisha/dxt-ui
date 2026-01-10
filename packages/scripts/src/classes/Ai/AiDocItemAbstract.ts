import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'
import { useAi } from '../../composables/useAi'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { GitRead } from '../Git/GitRead'
import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from '../Component/ComponentWikiFile'

import type { AiAbstract } from './AiAbstract'
import type { GitFileItem } from '../../types/gitTypes'

import { UI_DIR_IN, UI_FILE_PACKAGE } from '../../config'

export abstract class AiDocItemAbstract {
  /** Demo file path / Путь к файлу демо */
  protected abstract pathDemo: string[]
  /** Prompt template path / Путь к шаблону промпта */
  protected abstract pathPrompt: string[]

  /** Build item / Элемент сборки */
  protected readonly build: BuildItem

  /** Markdown file / Файл в формате Markdown */
  protected readonly mdFile: ComponentWikiFile

  /** Code file / Файл с кодом */
  protected readonly code: ComponentWikiFile

  /** Property file data / Данные из файла свойств */
  protected readonly projectName: string

  /** AI instance / Экземпляр ИИ */
  protected readonly ai?: AiAbstract

  /** Description from AI / Описание от ИИ */
  protected description?: string

  /**
   * Constructor
   * @param path source file path / путь к исходному файлу
   * @param item git file item / элемент файла git
   */
  constructor(
    protected readonly path: string,
    protected readonly item: GitFileItem
  ) {
    this.build = new BuildItem(this.item.path)
    this.mdFile = new ComponentWikiFile(this.getPathWiki(), true, false)
    this.code = new ComponentWikiFile(this.item.pathByOS, false, false)
    this.projectName = PropertiesFile.readFile<Record<string, any>>(UI_FILE_PACKAGE)?.name ?? 'Library'
    this.ai = useAi()
  }

  /**
   * Generates documentation using AI.
   *
   * Генерирует документацию с использованием ИИ.
   */
  async make() {
    const date = this.mdFile.getDate()

    if (
      this.ai
      && this.getItemDate() > date.getDate()
    ) {
      console.log(
        `${this.projectName}/File:`,
        this.item.path,
        PropertiesConfig.getWikiLanguage()
      )

      const status = this.isBuildDisabled() || await this.build.make()

      if (status) {
        this.makeAi()

        const generate = await this.ai.generate(
          this.readPrompt()
        )

        if (generate) {
          const read = generate.split('#########')

          if (read?.[0]) {
            this.description = read[0].trim()
          }

          if (
            read?.[1]
            && !read[1].match('--FULL--')
          ) {
            this.code.write(read[1])
          }

          if (read?.[2]) {
            this.mdFile.write(this.initName(read[2]))
          }
        }
      }

      this.build.removeDir()
    } else if (!this.ai) {
      console.error('AI is not configured.')
    }
  }

  /**
   * Checks if the item is marked as not to be built.
   *
   * Проверяет, помечен ли элемент как не подлежащий сборке.
   */
  isBuildDisabled(): boolean {
    return Boolean(
      this.code.read().match('// wiki:build-none')
    )
  }

  /**
   * Returns the path to the Wiki file.
   *
   * Возвращает путь к Wiki файлу.
   */
  protected getPathWiki(): string[] {
    const fileName = removeCommonPrefix(this.item.path, this.path)
      .replace(/\.ts$/, '')

    return [
      ...GitRead.splitPath(this.path),
      ...GitRead.splitPath(`${fileName}.mdx`)
    ]
  }

  /**
   * Returns the file modification date.
   *
   * Возвращает дату изменения файла.
   */
  protected getItemDate(): Date {
    return new Datetime(this.item.date).getDate()
  }

  /**
   * Returns the title for the documentation.
   *
   * Возвращает заголовок для документации.
   */
  protected getTitle() {
    let title = this.projectName
      + '/'
      + this.item.path
        .replace(UI_DIR_IN + '/', '')
        .replace(/\.ts$/, '')

    if (this.description) {
      title += ` - ${this.description}`
    }

    return title
  }

  /**
   * Reads the demo file content.
   *
   * Читает содержимое демо-файла.
   */
  protected readDemo(): string {
    return new ComponentWikiFile(this.pathDemo).read()
  }

  /**
   * Reads the prompt template.
   *
   * Читает шаблон промпта.
   */
  protected readPrompt(): string {
    return new ComponentWikiFile(this.pathPrompt)
      .read()
      .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
  }

  /**
   * Prepares context for AI.
   *
   * Подготавливает контекст для ИИ.
   */
  protected makeAi(): void {
    if (this.ai) {
      this.ai.addContent(`Code: ${this.build.getCode()}`)
      this.ai.addContent(`Original code: ${this.code.read()}`)
      this.ai.addContent(`Demo (only for template analysis, all data is fake): ${this.readDemo()}`)
      this.ai.addContent(`Original MDX: ${this.mdFile.read()}`)
    }
  }

  /**
   * Initializes the title in the content.
   *
   * Инициализирует заголовок в контенте.
   * @param content content / контент
   */
  protected initName(content: string): string {
    if (content.match('[title]')) {
      return content.replace('[title]', this.getTitle())
    }

    return content
  }
}
