import { Datetime, removeCommonPrefix } from '@dxtmisha/functional-basic'

import { BuildItem } from '../BuildItem'
import { ComponentWikiFile } from '../Component/ComponentWikiFile'
import { GitRead } from '../Git/GitRead'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { GitFileItem } from '../../types/gitTypes'
import { PropertiesConfig } from '../Properties/PropertiesConfig.ts'
import { useAi } from '../../composables/useAi.ts'
import type { AiAbstract } from './AiAbstract.ts'

/** Sample prompt template path / Путь к шаблону промпта */
const FILE_PROMPT_SAMPLE = [__dirname, '..', '..', 'media', 'templates', 'prompts']
/** Sample prompt template for classes / Шаблон промпта для классов */
const FILE_PROMPT_SAMPLE_CLASS = [...FILE_PROMPT_SAMPLE, 'aiDocClassPrompt.ru.txt']
const FILE_DEMO_SAMPLE_CLASS = [...FILE_PROMPT_SAMPLE, 'demoClassRu.mdx']

export class AiDocItem {
  /** Build item / Элемент сборки */
  protected readonly build: BuildItem

  /** Markdown file / Файл в формате Markdown */
  protected readonly mdFile: ComponentWikiFile

  /** Prompt class file / Файл промпта для классов */
  protected readonly promptClassFile: ComponentWikiFile
  /** Demo class file / Файл демо для классов */
  protected readonly demoClassFile: ComponentWikiFile

  constructor(
    protected readonly path: string,
    protected readonly item: GitFileItem
  ) {
    this.build = new BuildItem(this.item.path)
    this.mdFile = new ComponentWikiFile(this.getPathWiki())

    this.promptClassFile = new ComponentWikiFile(FILE_PROMPT_SAMPLE_CLASS)
    this.demoClassFile = new ComponentWikiFile(FILE_DEMO_SAMPLE_CLASS)
  }

  isClass(): boolean {
    if (this.item.path.match('classes/')) {
      return true
    }

    const content = this.read()

    return Boolean(
      content.match(/export\s+class\s+/)
      || content.match(/class\s+\w+\s+/)
    )
  }

  async make() {
    const date = this.mdFile.getDate()

    if (this.getItemDate() > date.getDate()) {
      console.log('File:', this.item.path)

      await this.build.make()

      const ai = useAi()

      if (ai) {
        this.addContent(ai)

        const prompt = this.toFullPrompt(this.getPrompt())
        const generate = await ai.generate(prompt)

        if (generate) {
          this.mdFile.write(generate)
        }
      }
    }
  }

  protected getPathWiki(): string[] {
    const fileName = removeCommonPrefix(this.item.path, this.path)
      .replace(/\.ts$/, '')

    return [
      ...GitRead.splitPath(this.path),
      ...GitRead.splitPath(`${fileName}.mdx`)
    ]
  }

  protected getItemDate(): Date {
    return new Datetime(this.item.date).getDate()
  }

  protected getPrompt(): string {
    if (this.isClass()) {
      return this.getClassPrompt()
    }

    return ''
  }

  protected getClassPrompt(): string {
    return this.promptClassFile.read()
  }

  protected read(): string {
    return PropertiesFile.readFileOnly(this.item.path) ?? ''
  }

  protected readDemo(): string {
    if (this.isClass()) {
      return this.demoClassFile.read()
    }

    return ''
  }

  protected addContent(ai: AiAbstract) {
    ai.addContent(`Code: ${this.build.getCode()}`)
    ai.addContent(`Demo: ${this.readDemo()}`)
    ai.addContent(`Original: ${this.mdFile.read()}`)
  }

  protected toFullPrompt(prompt: string): string {
    return prompt
      .replace(/\[wikiLanguage]/g, PropertiesConfig.getWikiLanguage())
  }
}
