import { isFilled } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import type { DesignTypesMakeAbstract } from './DesignTypesMakeAbstract'
import type { DesignTypesPromptsAbstract } from './DesignTypesPromptsAbstract'

import { UI_FILE_AI_DESCRIPTION } from '../../config'

import aiDescriptionGenerationPrompt from '../../media/templates/prompts/aiDescriptionGeneration.en.md?raw'

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
   * @param makeTypes instance of DesignTypesMakeAbstract for type definitions content access / экземпляр DesignTypesMakeAbstract для доступа к контенту определений типов
   * @param prompts instance of DesignTypesPromptsAbstract for prompt list management / экземпляр DesignTypesPromptsAbstract для управления списком промптов
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly makeTypes: DesignTypesMakeAbstract,
    protected readonly prompts: DesignTypesPromptsAbstract
  ) { }

  /**
   * Checks if the AI description file exists.
   *
   * Проверяет, существует ли файл описания ИИ.
   * @returns true if description file exists / true, если файл описания существует
   */
  is(): boolean {
    return PropertiesFile.is(UI_FILE_AI_DESCRIPTION)
  }

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
    const fullContent = this.makeTypes.getFullContent()
    const fullJsContent = this.makeTypes.getFullJsContent()
    const promptsText = await this.prompts.toAiPrompts()

    const aiDescription = await this.toAiDescription(fullContent, fullJsContent)
    const fullDescription = `${aiDescription}\n${promptsText}`

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
    if (!isFilled(content) && !isFilled(code)) {
      return ''
    }

    const generate = await this.ai.toAi(
      content,
      aiDescriptionGenerationPrompt,
      code
    )

    return generate ?? ''
  }
}
