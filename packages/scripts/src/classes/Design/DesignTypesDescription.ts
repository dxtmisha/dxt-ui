import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesMake } from './DesignTypesMake'
import { DesignTypesPrompts } from './DesignTypesPrompts'

import { UI_FILE_AI_DESCRIPTION } from '../../config'

/**
 * Class for generating, processing, and saving AI project descriptions.
 *
 * Класс для генерации, обработки и сохранения описания проекта ИИ.
 */
export class DesignTypesDescription {
  /** Cached full description content / Кэшированный полный контент описания */
  protected fullDescription?: string

  /**
   * Constructor for DesignTypesDescription.
   *
   * Конструктор для DesignTypesDescription.
   * @param ai instance of DesignTypesAi for AI interactions / экземпляр DesignTypesAi для ИИ взаимодействия
   * @param makeTypes instance of DesignTypesMake for type definitions content access / экземпляр DesignTypesMake для доступа к контенту определений типов
   * @param prompts instance of DesignTypesPrompts for prompt list management / экземпляр DesignTypesPrompts для управления списком промптов
   * @param isRaw flag disabling AI processing / флаг отключения ИИ обработки
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly makeTypes: DesignTypesMake,
    protected readonly prompts: DesignTypesPrompts,
    protected readonly isRaw: boolean = false
  ) { }

  /**
   * Returns the generated full description content.
   *
   * Возвращает сгенерированный полный контент описания.
   * @returns full description string / строка полного описания
   */
  getFullDescription(): string {
    return this.fullDescription ?? ''
  }

  /**
   * Generates and saves AI description file.
   *
   * Генерирует и сохраняет файл описания ИИ.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    let fullDescription = ''

    if (!this.isRaw) {
      const fullContent = this.makeTypes.getFullContent()
      const fullJsContent = this.makeTypes.getFullJsContent()
      const promptsText = await this.prompts.toAiPrompts()

      const aiDescription = await this.toAiDescription(fullContent, fullJsContent)

      fullDescription = `${aiDescription}\n${promptsText}`
    }

    this.fullDescription = fullDescription
    this.saveDescription(fullDescription)

    return this
  }

  /**
   * Saves the AI-generated project description to a file.
   *
   * Сохраняет сгенерированное ИИ описание проекта в файл.
   * @param content content to save / контент для сохранения
   */
  protected saveDescription(content: string): void {
    PropertiesFile.writeByPath(
      UI_FILE_AI_DESCRIPTION,
      content
    )
  }

  /**
   * Generates a project description and usage guidelines using AI.
   *
   * Генерирует описание проекта и рекомендации по использованию с помощью ИИ.
   * @param content cleaned type definitions / очищенные определения типов
   * @param code JS code for analysis / JS код для анализа
   * @returns project description string / строка описания проекта
   */
  protected async toAiDescription(content: string, code?: string): Promise<string> {
    const generate = await this.ai.toAi(
      content,
      'Goal: Generate a concise package overview for an AI coding assistant detailing what this package is, why to study it, and listing its key capabilities.\n\n'
      + 'STRUCTURE & CONTENT REQUIREMENTS:\n'
      + '1. Package Description: 1-2 concise sentences explaining what this package is and its core technical purpose.\n'
      + '2. Triggers for Studying ai-types.md: Clear explanation of when and why an AI assistant must study "ai-types.md" (specific tasks, keywords, or architectural requirements).\n'
      + '3. Key Capabilities: A list of key functional capabilities where each item is strictly 1 to 3 words long (e.g. "Form Controls", "API Integration", "Storage State").\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- Each item in the Key Capabilities list MUST be strictly 1 to 3 words.\n'
      + '- Do NOT list individual method, function, or class names.\n'
      + '- Analyze ONLY the provided type definitions and JS code.\n'
      + '- Do NOT wrap output in markdown code blocks (```).\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the final description text. No explanations, no code blocks, and no conversational fluff.',
      code
    )

    return generate ?? ''
  }
}
