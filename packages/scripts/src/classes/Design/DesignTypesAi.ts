import { useAi } from '../../composables/useAi'

/**
 * Class for handling low-level AI interactions, directory configuration, and prompt execution.
 *
 * Класс для низкоуровневого взаимодействия с ИИ, конфигурации директории и выполнения промптов.
 */
export class DesignTypesAi {
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
}
