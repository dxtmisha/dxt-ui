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

  protected images: AiImageList = []

  /**
   * Constructor initializes implementation specific resources.
   *
   * Конструктор инициализирует ресурсы конкретной реализации.
   * @param key - API key / API ключ
   * @param model - initial model id / начальный идентификатор модели
   */
  constructor(
    protected key: string,
    protected model: string
  ) {
  }

  /**
   * Returns accumulated image list.
   *
   * Возвращает накопленный список изображений.
   */
  getImages(): AiImageList {
    return this.images
  }

  /**
   * Appends an image to the accumulated image list.
   *
   * Добавляет изображение к накопленному списку изображений.
   * @param image - image item / элемент изображения
   */
  addImage(image: AiImageItem): this {
    this.images.push(image)
    return this
  }

  /**
   * Appends a new line to the accumulated prompt block.
   *
   * Добавляет новую строку к накопленному блоку prompt.
   */
  addPrompt(prompt: string): void {
    this.prompt += `\n${prompt}`
  }

  /**
   * Clears entire accumulated image list.
   *
   * Очищает весь накопленный список изображений.
   */
  resetImages(): this {
    this.images = []
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
   * @param key - new API key / новый API ключ
   */
  setKey(key: string): this {
    this.key = key

    if (this.ai) {
      this.init()
    }

    return this
  }

  /**
   * Sets / switches current model for generation.
   *
   * Устанавливает / переключает текущую модель для генерации.
   */
  setModel(model: string): this {
    this.model = model
    return this
  }

  /**
   * Generates AI response using active model and composed contents.
   *
   * Генерирует отклик ИИ, используя активную модель и собранный контент.
   */
  async generate(contents: string): Promise<string> {
    if (!this.ai) {
      this.init()

      console.log(
        `[Ai] Initialized AI client with model: ${this.model}`
      )
    }

    if (this.ai) {
      console.log('[Ai] Generating')

      return await this.response(
        this.model,
        this.getContents(contents)
      )
    }

    return ''
  }

  /**
   * Combines persistent prompt prefix with provided contents.
   *
   * Объединяет постоянный префикс prompt с переданным содержимым.
   */
  protected getContents(contents: string): string {
    return `${this.prompt}\n${contents}`
  }

  /**
   * Implementation hook: initialize client / transport / auth.
   *
   * Хук реализации: инициализация клиента / транспорта / авторизации.
   */
  protected abstract init(): void

  /**
   * Implementation hook: convert accumulated images to model-specific format.
   *
   * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
   */
  protected abstract toImages(): void

  /**
   * Implementation hook: perform model call and return textual result.
   *
   * Хук реализации: выполнить вызов модели и вернуть текстовый результат.
   * @param model - active model id / идентификатор активной модели
   * @param contents - composed prompt + contents / собранный prompt + содержимое
   */
  protected abstract response(
    model: string,
    contents: string
  ): Promise<string>
}
