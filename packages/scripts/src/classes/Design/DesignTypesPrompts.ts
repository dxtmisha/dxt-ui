import { createHash } from 'node:crypto'
import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'

import type { DesignTypesItem, DesignTypesList } from '../../types/designTypes'

import { UI_MODULES } from '../../config'

/**
 * Class for reading prompt files and generating AI project rules and prompt triggers description.
 *
 * Класс для чтения файлов промптов и генерации описания правил проекта ИИ и триггеров промптов.
 */
export class DesignTypesPrompts {
  /** Cached list of prompt files / Кэшированный список файлов с промптами */
  protected listPrompts?: DesignTypesList

  /**
   * Constructor for DesignTypesPrompts.
   *
   * Конструктор для DesignTypesPrompts.
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param ai instance of DesignTypesAi for AI interactions / экземпляр DesignTypesAi для ИИ взаимодействия
   */
  constructor(
    protected readonly promptsDir: string = 'ai-resources',
    protected readonly ai: DesignTypesAi = new DesignTypesAi()
  ) {}

  /**
   * Gets a list of prompt files, using cached result if available.
   *
   * Получает список файлов с промптами, используя кэшированный результат при наличии.
   * @returns list of prompt files / список файлов с промптами
   */
  getListPrompts(): DesignTypesList {
    if (this.listPrompts === undefined) {
      const files = PropertiesFile.readDirRecursive(this.promptsDir)

      this.listPrompts = forEach(
        files,
        (file) => {
          const path = `${this.promptsDir}/${file}`
          const content = PropertiesFile.readFileOnly(path)

          if (content) {
            return {
              path,
              content,
              md5: this.getMd5(content)
            }
          }
        }
      ) as DesignTypesList
    }

    return this.listPrompts
  }

  /**
   * Generates project rules and prompt triggers description using AI.
   *
   * Генерирует описание правил проекта и триггеров промптов с помощью ИИ.
   * @param projectName project name / название проекта
   * @returns prompt rules description / описание правил промптов
   */
  async toAiPrompts(projectName: string): Promise<string> {
    const list = this.getListPrompts()
    const prompts: string[] = []

    for (const item of list) {
      const prompt = await this.toAiPromptItem(item, projectName)

      if (prompt) {
        prompts.push(prompt)
      }
    }

    if (prompts.length > 0) {
      return '## Mandatory Rules\n'
        + 'You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:\n'
        + `${prompts.join('\n')}`
    }

    return ''
  }

  /**
   * Generates MD5 hash for the given content.
   *
   * Генерирует MD5 хэш для переданного содержимого.
   * @param content file or text content / содержимое файла или текста
   * @returns MD5 hash string / MD5 хэш строка
   */
  protected getMd5(content: string): string {
    return createHash('md5').update(content.trim()).digest('hex')
  }

  /**
   * Processes a single prompt file item into a formatted rule entry string.
   *
   * Обрабатывает один элемент файла промпта в отформатированную строку правила.
   * @param item prompt file item / элемент файла промпта
   * @param projectName project name / название проекта
   * @returns formatted prompt rule entry string or undefined / отформатированная строка правила промпта или undefined
   */
  protected async toAiPromptItem(
    item: DesignTypesItem,
    projectName: string
  ): Promise<string | undefined> {
    const content = await this.toAiPromptName(item.content)

    if (isFilled(content)) {
      return `- '${UI_MODULES}/${projectName}/${item.path}': ${content}`
    }

    return undefined
  }

  /**
   * Generates a trigger description for studying a prompt file using AI.
   *
   * Генерирует описание-триггер для изучения файла промпта с помощью ИИ.
   * @param content prompt file content / содержимое файла промпта
   * @returns trigger description / описание-триггер
   */
  protected async toAiPromptName(content: string): Promise<string> {
    const generate = await this.ai.toAi(
      content,
      'Goal: Generate an EXTREMELY SHORT, high-density trigger and topic summary for an AI coding assistant describing what rules/topics are covered AND under what specific tasks, conditions, or use cases this document must be studied.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- The output MUST be EXTREMELY CONCISE: 1-2 short sentence or clause (maximum 30-35 words).\n'
      + '- Clearly specify BOTH the key topics/rules AND the specific scenarios, tasks, or triggers when this document must be read.\n'
      + '- Do NOT include repetitive filler like "you MUST study this document", "in order to follow...", or "when working with...".\n'
      + '- Analyze ONLY the text explicitly provided in this prompt.\n'
      + '- Do NOT include file paths, URLs, quotes, or markdown syntax.\n\n'
      + 'EXAMPLES OF GOOD OUTPUT:\n'
      + '- "Class structure, typing standards, SSR safety, and primitive utility functions"\n'
      + '- "HTTP client, storage management, localization formatting, and DOM event helpers"\n'
      + '- "Implementing or wrapping D1 components, slot/event types, or customizing theme variables"\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting short trigger and topic summary. No markdown code blocks (```), no labels, no quotes, and no conversational text.'
    )

    return generate ?? ''
  }
}
