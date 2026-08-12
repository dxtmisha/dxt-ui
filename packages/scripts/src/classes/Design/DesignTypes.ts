import { ServerStorage } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesMake } from './DesignTypesMake'
import { DesignTypesPrompts } from './DesignTypesPrompts'

import type { DesignMcpResourceItem, DesignMcpResources, DesignTypesList } from '../../types/designTypes'

import { UI_FILE_AI_DESCRIPTION, UI_FILE_AI_MCP, UI_FILE_AI_TYPES } from '../../config'

/**
 * Engine for generating compressed and AI-optimized TypeScript type definitions.
 * It scans the build output for declaration files, sanitizes them, and uses AI to produce a minimal, context-rich type library for use in automated coding assistants.
 *
 * Движок для генерации сжатых и оптимизированных для ИИ определений типов TypeScript.
 * Сканирует выходные данные сборки на наличие файлов деклараций, очищает их и использует ИИ для создания минимальной, насыщенной контекстом библиотеки типов для использования в автоматизированных помощниках по кодированию.
 */
export class DesignTypes {
  /** Instance of DesignTypesAi for AI interactions / Экземпляр DesignTypesAi для ИИ взаимодействия */
  protected readonly ai: DesignTypesAi

  /** Instance of DesignTypesPrompts for prompt file processing / Экземпляр DesignTypesPrompts для обработки файлов промптов */
  protected readonly prompts: DesignTypesPrompts

  /**
   * Constructor for DesignTypes.
   *
   * Конструктор для DesignTypes.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param isRaw flag disabling AI processing to create raw types and empty description / флаг отключения ИИ обработки для создания сырых типов и пустого описания
   */
  constructor(
    protected readonly dir: string = 'dist',
    protected readonly promptsDir: string = 'ai-resources',
    protected readonly isRaw: boolean = false
  ) {
    ServerStorage.setErrorStatus(true)
    this.ai = new DesignTypesAi(this.dir, this.isRaw)
    this.prompts = new DesignTypesPrompts(this.promptsDir, this.ai)
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    console.log('DesignTypes: making AI types...')

    const makeTypes = await new DesignTypesMake(this.ai).make()

    let fullDescription = ''
    let mcpPrompts: DesignMcpResources | undefined

    if (!this.isRaw) {
      const fullContent = makeTypes.getFullContent()
      const fullJsContent = makeTypes.getFullJsContent()
      const aiDescription = await this.toAiDescription(fullContent, fullJsContent)

      const promptList = this.prompts.getListPrompts()
      const promptsText = await this.prompts.toAiPrompts(this.getProjectName())

      fullDescription = `${aiDescription}\n${promptsText}`

      const mcpList: DesignTypesList = [
        {
          path: UI_FILE_AI_TYPES,
          content: fullContent
        },
        {
          path: UI_FILE_AI_DESCRIPTION,
          content: fullDescription
        },
        ...promptList
      ]

      mcpPrompts = await this.toAiMcpPrompts(mcpList)
    }

    this.saveDescription(fullDescription)
    this.saveMcp(mcpPrompts ?? [])

    console.log('DesignTypes: AI types saved.')

    return this
  }



  /**
   * Returns the project name from package.json.
   *
   * Возвращает название проекта из package.json.
   * @returns project name or 'none' / название проекта или 'none'
   */
  protected getProjectName(): string {
    return getPackageJson()?.name ?? 'none'
  }

  /**
   * Saves the AI-generated project description to a file.
   *
   * Сохраняет сгенерированное ИИ описание проекта в файл.
   * @param content content to save / контент для сохранения
   */
  protected saveDescription(content: string) {
    PropertiesFile.writeByPath(
      UI_FILE_AI_DESCRIPTION,
      content
    )
  }

  /**
   * Saves the AI-generated MCP server resources to a file.
   *
   * Сохраняет сгенерированные ИИ ресурсы MCP-сервера в файл.
   * @param data data to save / данные для сохранения
   */
  protected saveMcp(data: object) {
    PropertiesFile.writeByPath(
      UI_FILE_AI_MCP,
      JSON.stringify(data, null, 2)
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
      'Goal: Generate a CONCISE, high-density project overview for an AI coding assistant to evaluate this library\'s core purpose, key module groupings, and triggers for studying type definitions.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- Keep the output dense, focused, and fluff-free. Avoid bloated descriptions, exhaustive lists of individual methods, classes, or components by name, or repetitive explanations.\n'
      + '- Always group components, classes, or methods by functional category (e.g. "form components", "navigation controls", "storage utilities") instead of enumerating every individual name.\n'
      + '- Analyze ONLY the code, type definitions, and text explicitly provided in this prompt. Do NOT assume external unprovided data.\n'
      + '- Do NOT include file paths, relative links, URLs, or markdown formatting.\n\n'
      + 'STRUCTURE REQUIREMENTS (Provide a single cohesive text block):\n'
      + '1. Core Purpose: 1-2 sentences summarizing the library\'s primary technical function and responsibility.\n'
      + '2. Key Capabilities & Groupings: Group main classes, composables, or components into high-level functional modules (e.g. API/Network, Storage, Localization, Form Components, Layout Controls, Utilities) and summarize their capabilities in tight sentences. Avoid listing individual component or method names—group them by function instead.\n'
      + '3. Triggers for Studying ai-types.md: Under what specific coding requirements, keywords, tasks, or architectural needs is it mandatory for the AI to study "ai-types.md"?\n'
      + '4. Integration Context: 1 sentence explaining how this library connects with other stack frameworks or packages.\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting concise description text. No markdown code blocks (```), no section headers, no labels (like "Description:"), and no conversational fluff.',
      code
    )

    return generate ?? ''
  }

  /**
   * Generates MCP server resources structure for prompt, type definition, and description files using AI.
   *
   * Генерирует структуру ресурсов MCP-сервера для файлов промптов, определений типов и описаний с помощью ИИ.
   * @param list list of documentation files / список файлов документации
   * @returns object with resources array or undefined / объект со массивом ресурсов или undefined
   */
  protected async toAiMcpPrompts(list: DesignTypesList): Promise<DesignMcpResources | undefined> {
    const projectName = this.getProjectName()
    const resources: DesignMcpResourceItem[] = []

    for (const item of list) {
      const data = await this.toAiMcpResources(item.content, item.path)

      if (
        data?.name
        && data?.description
      ) {
        resources.push({
          uri: `${projectName}/${item.path}`,
          name: `${data.name} (${projectName})`,
          mimeType: data.mimeType ?? 'text/markdown',
          description: data.description
        })
      }
    }

    if (resources.length > 0) {
      return resources
    }

    return undefined
  }

  /**
   * Generates MCP server resource metadata for a prompt document using AI.
   *
   * Генерирует метаданные ресурса MCP-сервера для документа промпта с помощью ИИ.
   * @param content prompt file content / содержимое файла промпта
   * @param file prompt file path or name / путь или имя файла промпта
   * @returns resource metadata object or undefined / объект метаданных ресурса или undefined
   */
  protected async toAiMcpResources(content: string, file?: string): Promise<Partial<DesignMcpResourceItem> | undefined> {
    const generate = await this.ai.toAi(
      content,
      (file ? `File Name: ${file}\n\n` : '')
      + 'Goal: Generate an MCP (Model Context Protocol) server resource metadata object in valid JSON format for this prompt document.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- The output MUST be a valid JSON object with keys: "name", "mimeType", and "description".\n'
      + '- All text values MUST be strictly in English. Non-English languages are strictly forbidden.\n'
      + '- "name": A concise, clear English title (2-4 words, e.g. "Coding Standards", "API Reference").\n'
      + '- "mimeType": Must be strictly "text/markdown".\n'
      + '- "description": A high-density, professional description strictly in English (1-2 sentences) summarizing what rules, APIs, or architectural conventions are covered in this document.\n'
      + '- Do NOT include markdown code block wrappers (```json). Return ONLY the raw JSON string.\n\n'
      + 'EXAMPLES OF GOOD OUTPUT:\n'
      + '{\n'
      + '  "name": "Coding Standards",\n'
      + '  "mimeType": "text/markdown",\n'
      + '  "description": "Strict architectural conventions and code implementation standards for the product."\n'
      + '}\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the JSON object. No explanations, no markdown formatting, no conversational text.'
    )

    if (generate) {
      try {
        const cleaned = generate.replace(/```json|```/g, '').trim()
        return JSON.parse(cleaned)
      } catch {
        return undefined
      }
    }

    return undefined
  }
}
