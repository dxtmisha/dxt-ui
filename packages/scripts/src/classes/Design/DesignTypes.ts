import { forEach, isFilled, ServerStorage } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { useAi } from '../../composables/useAi'

import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignMcpResourceItem, DesignMcpResources, DesignTypesList } from '../../types/designTypes'

import { UI_DIR_CONSTRUCTOR, UI_FILE_AI_DESCRIPTION, UI_FILE_AI_MCP, UI_FILE_AI_TYPES, UI_MODULES } from '../../config'

/**
 * Engine for generating compressed and AI-optimized TypeScript type definitions.
 * It scans the build output for declaration files, sanitizes them, and uses AI to produce a minimal, context-rich type library for use in automated coding assistants.
 *
 * Движок для генерации сжатых и оптимизированных для ИИ определений типов TypeScript.
 * Сканирует выходные данные сборки на наличие файлов деклараций, очищает их и использует ИИ для создания минимальной, насыщенной контекстом библиотеки типов для использования в автоматизированных помощниках по кодированию.
 */
export class DesignTypes {
  /**
   * Array of directory path segments.
   *
   * Массив сегментов пути директории.
   */
  protected readonly dirArray: string[]

  /**
   * Constructor for DesignTypes.
   *
   * Конструктор для DesignTypes.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   */
  constructor(
    protected readonly dir: string = 'dist',
    protected readonly promptsDir: string = 'ai-prompts'
  ) {
    ServerStorage.setErrorStatus(true)
    this.dirArray = this.dir.split('/')
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   */
  async make() {
    console.log('DesignTypes: making AI types...')

    const files = this.getListByFilter()
    const jsFiles = this.getListByFilterJs()

    const fullContent = this.toOneFile(files)
    const fullJsContent = this.toOneFile(jsFiles)

    const aiContent = await this.toAiEdit(fullContent, fullJsContent)
    this.save(aiContent)

    const aiDescription = await this.toAiDescription(fullContent, fullJsContent)

    const promptList = this.getListPrompts()
    const prompts = await this.toAiPrompts(promptList)

    const fullDescription = `${aiDescription}\n${prompts}`
    this.saveDescription(fullDescription)

    const mcpList: DesignTypesList = [
      {
        path: UI_FILE_AI_TYPES,
        content: aiContent
      },
      {
        path: UI_FILE_AI_DESCRIPTION,
        content: fullDescription
      },
      ...promptList
    ]

    const mcpPrompts = await this.toAiMcpPrompts(mcpList)

    if (mcpPrompts) {
      this.saveMcp(mcpPrompts)
    }

    console.log('DesignTypes: AI types saved.')
  }

  /**
   * Checks if the file is a valid declaration file.
   *
   * Проверяет, является ли файл валидным файлом декларации.
   * @param file file name / имя файла
   */
  protected isFile(file: string): boolean {
    return file.endsWith('.d.ts')
      && !file.endsWith('.vue.d.ts')
      && !file.endsWith('wiki.d.ts')
      && !file.endsWith('wikiData.d.ts')
      && (
        !file.includes(`${UI_DIR_CONSTRUCTOR}/`)
        || file.endsWith('/basicTypes.d.ts')
        || file.endsWith('/types.d.ts')
        || file.endsWith('/props.d.ts')
      )
  }

  /**
   * Checks if the file is a valid JavaScript or TypeScript file.
   *
   * Проверяет, является ли файл валидным JavaScript или TypeScript файлом.
   * @param file file name / имя файла
   */
  protected isFileJs(file: string): boolean {
    return file.endsWith('.js')
  }

  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content
      && content.includes('export')
    )
  }

  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   */
  protected getPath(file: string): string[] {
    return [...this.dirArray, file]
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
   * Reads the directory recursively.
   *
   * Читает директорию рекурсивно.
   */
  protected getList() {
    return PropertiesFile.readDirRecursive(this.dirArray)
  }

  /**
   * Gets a list of files filtered by a provided checker function.
   *
   * Получает список файлов, отфильтрованный переданной функцией проверки.
   * @param checkFile function to check if the file matches criteria / функция проверки соответствия файла критериям
   */
  protected getListBy(checkFile: (file: string) => boolean): DesignTypesList {
    return forEach(
      this.getList(),
      (file) => {
        if (checkFile(file)) {
          const content = this.readFile(file)

          if (this.isContent(content)) {
            return {
              path: file,
              content
            }
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Gets a list of files filtered by criteria.
   *
   * Получает список файлов, отфильтрованный по критериям.
   */
  protected getListByFilter(): DesignTypesList {
    return this.getListBy(file => this.isFile(file))
  }

  /**
   * Gets a list of JS files filtered by criteria.
   *
   * Получает список JS файлов, отфильтрованный по критериям.
   */
  protected getListByFilterJs(): DesignTypesList {
    return this.getListBy(file => this.isFileJs(file))
  }

  /**
   * Gets a list of prompt files.
   *
   * Получает список файлов с промптами.
   */
  protected getListPrompts(): DesignTypesList {
    const files = PropertiesFile.readDirRecursive(this.promptsDir)

    return forEach(
      files,
      (file) => {
        const path = `${this.promptsDir}/${file}`
        const content = PropertiesFile.readFileOnly(path)

        if (content) {
          return {
            path,
            content
          }
        }
      }
    ) as DesignTypesList
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   */
  protected readFile(path: string): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path))
  }

  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  protected save(content: string) {
    const packageJson = getPackageJson()

    if (packageJson) {
      PropertiesFile.writeByPath(
        UI_FILE_AI_TYPES,
        [
          `All these methods are in the ${packageJson.name} library.`,
          '',
          content
        ].join('\n')
      )
    }
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
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   */
  protected toOneFile(list: DesignTypesList): string {
    return forEach(
      list,
      item => `// File: ${item.path}\n${item.content}`
    )
      .join('\n\n')
  }

  /**
   * Sends content and a prompt to the AI for processing.
   *
   * Отправляет контент и промпт ИИ для обработки.
   * @param content content for processing / контент для обработки
   * @param prompt instructions for the AI / инструкции для ИИ
   * @param code code to optimize / код для оптимизации
   */
  protected async toAi(
    content: string,
    prompt: string,
    code?: string
  ): Promise<string | undefined> {
    const ai = useAi()

    if (ai) {
      ai.addPrompt('You are a world-class senior developer and an exceptional technical writer.')
      ai.addPrompt(prompt)
      ai.addPrompt(`File Content: ${content}`)

      if (code) {
        ai.addPrompt(`File JS Code: ${code}`)
      }

      const generate = await ai.generate('go!')

      if (generate) {
        return generate
      }
    }

    return undefined
  }

  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   * @param code code to optimize / код для оптимизации
   */
  protected async toAiEdit(content: string, code: string): Promise<string> {
    const generate = await this.toAi(
      content,
      'Goal: Optimize and generate clean, highly informative TypeScript type definitions based ONLY on the provided code and types.\n\n'
      + 'CRITICAL CONTEXT & SCOPE RESTRICTIONS:\n'
      + '- IMPORTANT: The AI coding agent that will write code for developers using this library will NEVER see or have access to the underlying JS implementation code or external files. It will rely EXCLUSIVELY on the output document generated by you in this session. You MUST ensure that your output provides complete, flawless context, clear JSDoc explanations, and precise type contracts so that the reading AI agent can write accurate code without making assumptions.\n'
      + '- Analyze ONLY the code, type definitions, and text explicitly provided in this prompt. Do NOT attempt to read, search, infer, or assume any external files, imports, project structure, or unprovided environment data.\n'
      + '- Do NOT include any references, links, file paths, or pointers to external files or local directories in the final output, as AI agents will have no environment file access.\n'
      + '- Do NOT return the provided JS code in your response.\n\n'
      + 'JSDOC & COMMENT RULES:\n'
      + '- STUDY THE PROVIDED JS CODE: You are explicitly provided with the JS implementation code (`File JS Code`). You MUST study the JS code for every function/method/property to understand its exact logic, behavior, and purpose.\n'
      + '- IF AN EXISTING JSDOC / COMMENT IS PRESENT:\n'
      + '  * Obvious entities (e.g., `isString`, `capitalize`, `copyObject`): DELETE the JSDoc / comment entirely.\n'
      + '  * Non-obvious entities: OPTIMIZE the existing JSDoc — remove fluff, translate to clear English, and PRESERVE ONLY `@example`, `@remarks`, `@note`, and `@warning` tags (remove all other JSDoc tags).\n'
      + '- IF NO JSDOC / COMMENT IS PRESENT:\n'
      + '  * Obvious entities: DO NOTHING (do NOT add any JSDoc).\n'
      + '  * Moderately non-obvious entities (obscure, custom, abbreviated, or ambiguous naming): Generate and add a SHORT, concise, 1-line English JSDoc description derived from inspecting its JS implementation code.\n'
      + '  * Very unclear or highly complex entities (intricate operational logic, complex parameters, or subtle side effects): Generate and add a DETAILED, comprehensive English JSDoc description derived from inspecting its JS implementation code.\n'
      + '- Place all JSDoc comments STRICTLY directly above the target declaration.\n'
      + '- Translate all non-English comments and JSDocs to English.\n'
      + '- Remove regular inline comments (`//` or `/* ... */`).\n'
      + 'CLEANING & OPTIMIZATION:\n'
      + '- Remove all `import` statements and local internal re-exports (e.g., `export * from "./..."`). Strictly KEEP exports from external packages.\n'
      + '- Delete all non-public content (private/protected class members, unexported elements). Keep all public API surfaces.\n'
      + '- Do NOT delete any `type` definitions; they are strictly required.\n'
      + '- Remove large Enums or structures that add length without critical context.\n'
      + '- Exercise extreme caution when removing abstract classes: if there is even a 5% chance it helps understand the API or generate code, keep it.\n'
      + '- Format output tightly with no blank lines.\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting optimized TypeScript type definitions code. No markdown formatting, no code blocks (```), no explanations, and no additional AI text. NOTHING but pure code.',
      code
    )

    return generate ?? content
  }

  /**
   * Generates a project description and usage guidelines using AI.
   *
   * Генерирует описание проекта и рекомендации по использованию с помощью ИИ.
   * @param content cleaned type definitions / очищенные определения типов
   * @param code JS code for analysis / JS код для анализа
   */
  protected async toAiDescription(content: string, code?: string): Promise<string> {
    const generate = await this.toAi(
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
   * Generates project rules and prompt triggers description.
   *
   * Генерирует описание правил проекта и триггеров промптов.
   * @param list list of prompt files / список файлов промптов
   */
  protected async toAiPrompts(list: DesignTypesList): Promise<string> {
    const projectName = this.getProjectName()
    const promptList = await Promise.all(
      forEach(list, async (item) => {
        const content = await this.toAiPromptName(item.content)

        if (isFilled(content)) {
          return `- '${UI_MODULES}/${projectName}/${item.path}': ${content}`
        }

        return ''
      })
    )

    const prompts = promptList.filter(Boolean).join('\n')

    if (prompts) {
      return '## Mandatory Rules\n'
        + 'Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):\n'
        + `${prompts}`
    }

    return ''
  }

  /**
   * Generates a trigger description for studying a prompt file using AI.
   *
   * Генерирует описание-триггер для изучения файла промпта с помощью ИИ.
   * @param content prompt file content / содержимое файла промпта
   */
  protected async toAiPromptName(content: string): Promise<string> {
    const generate = await this.toAi(
      content,
      'Goal: Generate an EXTREMELY SHORT, high-density topic summary for an AI coding assistant describing what rules/topics are covered in this prompt document.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- The output MUST be EXTREMELY CONCISE: 1 short sentence or clause (maximum 10-15 words).\n'
      + '- Do NOT include repetitive filler like "When working with...", "you MUST study this document", or "in order to follow...".\n'
      + '- Analyze ONLY the text explicitly provided in this prompt.\n'
      + '- Do NOT include file paths, URLs, quotes, or markdown syntax.\n\n'
      + 'EXAMPLES OF GOOD OUTPUT:\n'
      + '- "Class structure, typing standards, SSR safety, and primitive helpers"\n'
      + '- "HTTP client, storage management, localization, and DOM event helpers"\n'
      + '- "MDX documentation generation rules for TypeScript classes"\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting short topic summary. No markdown code blocks (```), no labels, no quotes, and no conversational text.'
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
    const generate = await this.toAi(
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
