import { forEach, ServerStorage } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { useAi } from '../../composables/useAi'

import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignTypesList } from '../../types/designTypes'

import { UI_DIR_CONSTRUCTOR, UI_FILE_AI_DESCRIPTION, UI_FILE_AI_TYPES } from '../../config'

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
   */
  constructor(
    protected readonly dir: string = 'dist'
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
    this.saveDescription(aiDescription)

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
          `1) All these methods are in the ${packageJson.name} library.`,
          '2) Everything that is exported can be used.',
          '3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.',
          '',
          'The following is the content of "exports" from package.json:',
          JSON.stringify(packageJson.exports, null, 2),
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
      + '- GENERATE MISSING JSDOCS FROM JS CODE: If an entity lacks a JSDoc comment in the input declarations, but its provided JS code implementation reveals its behavior or purpose, you MUST generate and add a clear, fluff-free English JSDoc description directly above its declaration.\n'
      + '- DEFINITION OF OBVIOUS (NO JSDOC): An entity is "obvious" ONLY IF its name uses clear, standard English naming conventions (e.g., `isString`, `capitalize`, `copyObject`) AND its functionality is 100% self-evident from its signature alone. Obvious entities MUST NOT have a JSDoc.\n'
      + '- MANDATORY JSDOC FOR NON-OBVIOUS ENTITIES: Any entity with an obscure, non-standard, custom, abbreviated, or ambiguous name (e.g., `abutaSudatoho`, `transformation`), or complex logic, MUST have a clear English JSDoc description generated by inspecting its JS implementation code.\n'
      + '- Write JSDoc comments WITHOUT fluff or filler text, focusing strictly on operational logic and behavior.\n'
      + '- Place all JSDoc comments STRICTLY directly above the target declaration.\n'
      + '- Translate all non-English comments and JSDocs to English.\n'
      + '- Remove regular inline comments (`//` or `/* ... */`).\n'
      + '- STRICTLY PRESERVE all JSDoc tags like `@example`, `@remarks`, `@note`, and warnings—keep them intact, translating only to English if needed.\n\n'
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
      'Goal: Generate a comprehensive, highly technical, and fluff-free project overview designed for an AI coding assistant to evaluate this library\'s exact contents and capabilities.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- Analyze ONLY the code, type definitions, and text explicitly provided in this prompt. Do NOT attempt to read, search, infer, or assume any external files, dependencies, or unprovided data.\n'
      + '- Do NOT include any file paths, relative links, or external URLs, as reading AI agents will not have environment file access.\n\n'
      + 'STRUCTURE & CONTENT REQUIREMENTS:\n'
      + 'Provide an objective, dense, and complete technical summary including:\n'
      + '1. Core Purpose: What is the primary technical function, responsibility, and role of this library?\n'
      + '2. Key Expositions & Capabilities: Detail ALL main classes, composables/hooks, utilities, components, services, or data structures exposed by this library. Specify the exact functionality and specific tasks each exposed entity or module performs so reading AI agents clearly understand the full capability set.\n'
      + '3. Triggers for Studying ai-types.md: Under what specific coding requirements, keywords, tasks, or architectural needs is this library indispensable, making it mandatory for the AI to study "ai-types.md"?\n'
      + '4. Integration Context: How does this library connect with other technologies, frameworks, or packages in the system stack?\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the resulting description text. No markdown formatting, no code blocks, no labels (like "Description:"), and no conversational explanations. NOTHING but pure, dense content.',
      code
    )

    return generate ?? ''
  }
}
