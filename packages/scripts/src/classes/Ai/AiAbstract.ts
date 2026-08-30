import { random, sleep } from '@dxtmisha/functional-basic'
import type { AiImageItem, AiImageList } from '../../types/aiTypes'

/**
 * Abstract AI base class providing common mechanics for AI integrations.
 * Handles prompt accumulation, model selection and unified response workflow.
 *
 * Абстрактный базовый класс AI, обеспечивающий общую механику интеграций:
 * накопление prompt, выбор модели и унифицированный цикл получения ответа.
 *
 * Responsibilities / Ответственности:
 * - Accumulate and compose prompt context / Накопление и компоновка контекста
 * - Select active model / Выбор активной модели
 * - Normalize generation call flow / Нормализация вызова генерации
 *
 * Extension points / Точки расширения:
 * - init(): client / auth / transport setup
 * - response(): concrete model invocation
 *
 * Расширение через методы:
 * - init(): инициализация клиента / авторизация / транспорт
 * - response(): конкретный вызов модели
 */
export abstract class AiAbstract<AI = any> {
  /** AI client instance / Экземпляр AI-клиента */
  protected ai?: AI

  /** Prompt prefix / Префикс prompt */
  protected prompt: string = ''

  /** Accumulated image list / Накопленный список изображений */
  protected images: AiImageList = []

  /** Accumulated contents / Накопленное содержимое */
  protected contents: string[] = []

  /**
   * Constructor initializes implementation specific resources.
   *
   * Конструктор инициализирует ресурсы конкретной реализации.
   * @param key API key / API ключ
   * @param model initial model id / начальный идентификатор модели
   * @param config configuration object / объект конфигурации
   */
  constructor(
    protected key: string,
    protected model: string,
    protected config: Record<string, any> = {}
  ) {
  }

  /**
   * Returns accumulated image list.
   *
   * Возвращает накопленный список изображений.
   * @returns accumulated image list / накопленный список изображений
   */
  getImages(): AiImageList {
    return this.images
  }

  /**
   * Returns accumulated contents.
   *
   * Возвращает накопленное содержимое.
   * @returns accumulated contents / накопленное содержимое
   */
  getContents(): string[] {
    return this.contents
  }

  /**
   * Appends an image to the accumulated image list.
   *
   * Добавляет изображение к накопленному списку изображений.
   * @param image image item / элемент изображения
   * @returns current instance / текущий экземпляр
   */
  addImage(image: AiImageItem): this {
    this.images.push(image)
    return this
  }

  /**
   * Appends content to the accumulated contents.
   *
   * Добавляет содержимое к накопленному содержимому.
   * @param content content string / строка содержимого
   * @returns current instance / текущий экземпляр
   */
  addContent(content: string): this {
    this.contents.push(content)
    return this
  }

  /**
   * Appends a new line to the accumulated prompt block.
   *
   * Добавляет новую строку к накопленному блоку prompt.
   * @param prompt prompt string to append / строка prompt для добавления
   */
  addPrompt(prompt: string): void {
    this.prompt += `\n${prompt}`
  }

  /**
   * Clears entire accumulated image list.
   *
   * Очищает весь накопленный список изображений.
   * @returns current instance / текущий экземпляр
   */
  resetImages(): this {
    this.images = []
    return this
  }

  /**
   * Clears entire accumulated contents.
   *
   * Очищает все накопленное содержимое.
   * @returns current instance / текущий экземпляр
   */
  resetContents(): this {
    this.contents = []
    return this
  }

  /**
   * Clears entire accumulated prompt.
   *
   * Полностью очищает накопленный prompt.
   */
  resetPrompt(): void {
    this.prompt = ''
  }

  /**
   * Sets / switches API key for authentication.
   *
   * Устанавливает / переключает API ключ для аутентификации.
   * @param key new API key / новый API ключ
   * @returns current instance / текущий экземпляр
   */
  setKey(key: string): this {
    this.key = key

    if (this.ai) {
      this.ai = undefined
    }

    return this
  }

  /**
   * Sets / switches current model for generation.
   *
   * Устанавливает / переключает текущую модель для генерации.
   * @param model model identifier / идентификатор модели
   * @returns current instance / текущий экземпляр
   */
  setModel(model: string): this {
    this.model = model
    return this
  }

  /**
   * Sets / switches configuration object.
   *
   * Устанавливает / переключает объект конфигурации.
   * @param config configuration object / объект конфигурации
   * @returns current instance / текущий экземпляр
   */
  setConfig(config: Record<string, any>): this {
    this.config = config
    return this
  }

  /**
   * Generates AI response using active model and composed contents.
   * Supports retry with random delay and configurable error handling.
   *
   * Генерирует отклик ИИ, используя активную модель и собранный контент.
   * Поддерживает повторные попытки со случайной задержкой и настраиваемой обработкой ошибок.
   * @param contents input contents for generation / входное содержимое для генерации
   * @param exitOnError whether to terminate the process on unrecoverable failure / завершать ли процесс при неустранимой ошибке
   * @param maxRetries number of retry attempts before giving up / количество повторных попыток перед отказом
   * @returns generated response text / сгенерированный текст ответа
   */
  async generate(
    contents: string,
    exitOnError: boolean = true,
    maxRetries: number = 0
  ): Promise<string> {
    if (!this.ai) {
      await this.init()

      console.log(
        `[Ai] Initialized AI client with model: ${this.model}`
      )
    }

    if (this.ai) {
      const totalAttempts = 1 + maxRetries

      for (let attempt = 1; attempt <= totalAttempts; attempt++) {
        console.log(`[Ai] Generating${totalAttempts > 1 ? ` (attempt ${attempt}/${totalAttempts})` : ''}`)

        try {
          const generate = await this.response(
            this.model,
            this.getMainContents(contents)
          )

          console.log(`[Ai] End (length: ${generate.length})`)

          return generate
        } catch (error) {
          console.error(`[Ai] Generation error (attempt ${attempt}/${totalAttempts}):`, error)

          if (attempt < totalAttempts) {
            const delayMs = random(1000, 2000)
            console.log(`[Ai] Retrying in ${delayMs}ms...`)
            await sleep(delayMs)
          } else if (exitOnError) {
            process.exit(1)
          }
        }
      }
    }

    return ''
  }

  /**
   * Combines persistent prompt prefix with provided contents.
   *
   * Объединяет постоянный префикс prompt с переданным содержимым.
   * @param contents input contents / входное содержимое
   * @returns combined prompt content / объединенное содержимое prompt
   */
  protected getMainContents(contents: string): string {
    return `${this.prompt}\n${contents}`
  }

  /**
   * Implementation hook: initialize client / transport / auth.
   *
   * Хук реализации: инициализация клиента / транспорта / авторизации.
   */
  protected abstract init(): Promise<void> | void

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   */
  protected abstract toImages(): void

  /**
   * Implementation hook: convert accumulated contents to model-specific format.
   *
   * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
   */
  protected abstract toContents(): void

  /**
   * Implementation hook: perform model call and return textual result.
   *
   * Хук реализации: выполнить вызов модели и вернуть текстовый результат.
   * @param model active model id / идентификатор активной модели
   * @param contents composed prompt + contents / собранный prompt + содержимое
   * @returns generated response string / сгенерированная строка ответа
   */
  protected abstract response(
    model: string,
    contents: string
  ): Promise<string>
}
