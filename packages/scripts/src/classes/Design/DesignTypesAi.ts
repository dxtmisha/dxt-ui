import { getPackageJson } from '../../functions/getPackageJson'
import { useAi } from '../../composables/useAi'

/**
 * Class for handling low-level AI interactions, directory configuration, and prompt execution.
 *
 * Класс для низкоуровневого взаимодействия с ИИ, конфигурации директории и выполнения промптов.
 */
export class DesignTypesAi {
  /** Cached project name / Кэшированное название проекта */
  protected projectName: string

  /** Array of directory path segments / Массив сегментов пути директории */
  protected readonly dirArray: string[]

  /**
   * Constructor for DesignTypesAi.
   *
   * Конструктор для DesignTypesAi.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param isRaw flag disabling AI processing / флаг отключения ИИ обработки
   */
  constructor(
    protected readonly dir: string = 'dist',
    protected readonly isRaw: boolean = false
  ) {
    this.dirArray = this.dir.split('/')
    this.projectName = getPackageJson()?.name ?? 'none'
  }

  /**
   * Returns the array of directory path segments.
   *
   * Возвращает массив сегментов пути директории.
   * @returns directory path segments / сегменты пути директории
   */
  getDirArray(): string[] {
    return this.dirArray
  }

  /**
   * Returns the project name from package.json.
   *
   * Возвращает название проекта из package.json.
   * @returns project name or 'none' / название проекта или 'none'
   */
  getProjectName(): string {
    return this.projectName
  }

  /**
   * Sends content and a prompt to the AI for processing.
   *
   * Отправляет контент и промпт ИИ для обработки.
   * @param content content for processing / контент для обработки
   * @param prompt instructions for the AI / инструкции для ИИ
   * @param code code to optimize / код для оптимизации
   * @returns AI generated content or undefined / сгенерированный ИИ контент или undefined
   */
  async toAi(
    content: string,
    prompt: string,
    code?: string
  ): Promise<string | undefined> {
    if (this.isRaw) {
      return undefined
    }

    const ai = useAi()

    if (ai) {
      ai.addPrompt('You are a world-class senior developer and an exceptional technical writer.')
      ai.addPrompt('CRITICAL DIRECTIVE: No data stored in history, previous chat messages, or prior conversation context must influence the result. Process strictly and exclusively the data provided in the text below.')
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
   * Sends content and a prompt to the AI for processing and parses the resulting JSON response.
   *
   * Отправляет контент и промпт ИИ для обработки и парсит полученный JSON-ответ.
   * @param content content for processing / контент для обработки
   * @param prompt instructions for the AI / инструкции для ИИ
   * @param code code to optimize / код для оптимизации
   * @returns parsed JSON object or undefined / распарсенный JSON объект или undefined
   */
  async toAiJson<T>(
    content: string,
    prompt: string,
    code?: string
  ): Promise<T | undefined> {
    const generate = await this.toAi(content, prompt, code)

    if (generate) {
      try {
        const cleaned = generate.replace(/```json|```/g, '').trim()
        return JSON.parse(cleaned) as T
      } catch {
        return undefined
      }
    }

    return undefined
  }
}
