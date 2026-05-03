import {
  type Browser,
  type EvaluateFunc,
  type HTTPResponse,
  launch,
  type Page,
  type PuppeteerLifeCycleEvent
} from 'puppeteer'
import { sleep } from '@dxtmisha/functional-basic'

import {
  type ScreenshotMetrics,
  type ScreenshotOptions,
  SCREENSHOT_ARGS,
  SCREENSHOT_FORMAT,
  SCREENSHOT_HEIGHTS,
  SCREENSHOT_TIMEOUT,
  SCREENSHOT_QUALITY,
  SCREENSHOT_WAIT_UNTIL,
  SCREENSHOT_WIDTHS
} from '../types/screenshotTypes'

/**
 * Class for managing browser instances and taking screenshots using Puppeteer.
 *
 * Класс для управления экземплярами браузера и создания скриншотов с помощью Puppeteer.
 */
export class BrowserItem {
  /** Browser instance / Экземпляр браузера */
  protected browser?: Browser

  /** Page instance / Экземпляр страницы */
  protected page?: Page

  /** HTTP Response from page loading / HTTP-ответ при загрузке страницы */
  protected response?: HTTPResponse

  /** Total scrollable width of the loaded page / Полная прокручиваемая ширина загруженной страницы */
  protected pageWidth: number = -1

  /** Total scrollable height of the loaded page / Полная прокручиваемая высота загруженной страницы */
  protected pageHeight: number = -1

  /**
   * Constructor
   * @param url component path / путь к компоненту
   * @param options additional options for capture / дополнительные опции захвата
   */
  constructor(
    protected url: string,
    protected readonly options: ScreenshotOptions = {}
  ) {
  }

  /** Additional arguments for browser launch / Дополнительные аргументы для запуска браузера */
  get args(): string[] {
    return this.options.args ?? SCREENSHOT_ARGS
  }

  /** Condition to wait for when navigating to the page / Условие, которое нужно дождаться при переходе на страницу */
  get waitUntil(): PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[] {
    return this.options.waitUntil ?? SCREENSHOT_WAIT_UNTIL
  }

  /** Timeout for navigating to the page / Таймаут для перехода на страницу */
  get timeout(): number {
    return this.options.timeout ?? SCREENSHOT_TIMEOUT
  }

  /** Image format for screenshots / Формат изображения для скриншотов */
  get format(): ScreenshotOptions['format'] {
    return this.options.format ?? SCREENSHOT_FORMAT
  }

  /** Viewport width for the initial capture / Ширина порта просмотра для начального захвата */
  get width(): number {
    return this.options.width ?? SCREENSHOT_WIDTHS
  }

  /** Viewport height for the initial capture and page-by-page slicing / Высота порта просмотра для начального захвата и постраничной нарезки */
  get height(): number {
    return this.options.height ?? SCREENSHOT_HEIGHTS
  }

  /** Quality for JPEG/WebP formats (0-100) / Качество для форматов JPEG/WebP (0-100) */
  get quality(): number {
    return this.options.quality ?? SCREENSHOT_QUALITY
  }

  /** Whether to capture the whole scrollable page at once or in slices / Захватывать ли всю прокручиваемую страницу сразу или по частям */
  get fullPage(): boolean {
    return this.options.fullPage ?? false
  }

  /** File extension based on the selected format / Расширение файла на основе выбранного формата */
  get extension(): string {
    const format = this.format

    if (format === 'jpeg') {
      return '.jpg'
    }

    return `.${format}`
  }

  /**
   * launches or returns the browser instance.
   *
   * Запускает или возвращает экземпляр браузера.
   * @returns browser instance / экземпляр браузера
   */
  async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      this.browser = await launch({
        headless: true,
        args: this.args
      })
    }

    return this.browser
  }

  /**
   * Creates or returns the page instance.
   *
   * Создает или возвращает экземпляр страницы.
   * @returns page instance / экземпляр страницы
   */
  async getPage(): Promise<Page> {
    if (!this.page) {
      this.page = await (await this.getBrowser()).newPage()

      await this.page.setViewport({
        width: this.width,
        height: this.height
      })

      this.page.on(
        'console',
        msg => this.toConsole(`Log: ${msg.text()}`)
      )

      this.page.on(
        'pageerror',
        err => this.toConsole(`Error: ${(err as any)?.message}`)
      )
    }

    return this.page
  }

  /**
   * Navigates to the URL and returns the HTTP response.
   *
   * Переходит по URL и возвращает HTTP-ответ.
   * @returns HTTP response or undefined / HTTP-ответ или undefined
   */
  async getResponse(): Promise<HTTPResponse | undefined> {
    if (!this.response) {
      const response = await (await this.getPage()).goto(this.url, {
        waitUntil: this.waitUntil,
        timeout: this.timeout
      })

      if (
        response
        && response.ok()
      ) {
        this.response = response
      } else {
        this.toConsole(
          `Failed to load page: ${this.url}. Status: ${response?.status()}`
        )
      }
    }

    return this.response
  }

  /**
   * Retrieves the HTML content of the page.
   *
   * Извлекает HTML-содержимое страницы.
   * @returns html content string / HTML-содержимое
   */
  async getDom(): Promise<string> {
    return await (await this.getPage()).content()
  }

  /**
   * Extracts scrollable dimensions of the page.
   *
   * Извлекает прокручиваемые размеры страницы.
   * @returns object with width and height / объект с шириной и высотой
   */
  async getMetrics(): Promise<ScreenshotMetrics> {
    if (
      await this.getResponse()
      && (
        this.pageWidth === -1
        || this.pageHeight === -1
      )
    ) {
      const metrics = await this.evaluate(() => {
        return {
          height: document.documentElement.scrollHeight,
          width: document.documentElement.scrollWidth
        }
      })

      if (metrics) {
        this.pageWidth = metrics.width
        this.pageHeight = metrics.height
      }
    }

    return {
      height: this.pageHeight,
      width: this.pageWidth
    }
  }

  /**
   * Evaluates a function in the browser context.
   *
   * Выполняет функцию в контексте браузера.
   * @param pageFunction function to evaluate / функция для выполнения
   * @param args arguments for the function / аргументы для функции
   * @returns result of evaluation / результат выполнения
   */
  async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>> | undefined> {
    return await (await this.getPage()).evaluate<Params, Func>(
      pageFunction,
      ...args
    )
  }

  /**
   * Captures screenshots based on the fullPage option.
   *
   * Создает скриншоты в зависимости от опции fullPage.
   * @param outputPath base path for saving / базовый путь для сохранения
   * @returns this instance / этот экземпляр
   */
  async screenshot(outputPath: string): Promise<this> {
    if (this.fullPage) {
      await this.screenshotFull(outputPath)
    } else {
      await this.screenshotPages(outputPath)
    }

    return this
  }

  /**
   * Resets internal page and response states.
   *
   * Сбрасывает состояние страницы и ответа.
   * @returns this instance / этот экземпляр
   */
  async reset(): Promise<this> {
    this.page = undefined
    this.pageWidth = -1
    this.pageHeight = -1

    this.response = undefined

    return this
  }

  /**
   * Formats the final file path based on current state and index.
   *
   * Форматирует итоговый путь к файлу на основе состояния и индекса.
   * @param outputPath original output path / исходный путь сохранения
   * @param index current page index / текущий индекс страницы
   * @param max total pages count / общее количество страниц
   * @returns formatted path string / отформатированная строка пути
   */
  protected getOutputPath(
    outputPath: string,
    index: number = 1,
    max: number = 1
  ): string {
    if (this.fullPage) {
      return outputPath + this.extension
    }

    return outputPath + `-${max}_${index}` + this.extension
  }

  /**
   * Internal wrapper for Puppeteer's screenshot method.
   *
   * Внутренняя обертка для метода скриншота Puppeteer.
   * @param path specific file path / путь к конкретному файлу
   * @returns this instance / этот экземпляр
   */
  protected async saveScreenshot(path: string): Promise<this> {
    const type = this.format
    const quality = type === 'png' ? undefined : this.quality

    await (await this.getPage()).screenshot({
      path,
      type,
      quality,
      fullPage: this.fullPage
    })

    return this
  }

  /**
   * Iterates through page slices and saves multiple screenshots.
   *
   * Проходит по частям страницы и сохраняет несколько скриншотов.
   * @param outputPath base output path / базовый путь сохранения
   * @returns this instance / этот экземпляр
   */
  protected async screenshotPages(outputPath: string): Promise<this> {
    const {
      height: pageHeight
    } = await this.getMetrics()

    const viewportHeight = this.height
    const pages = Math.ceil(pageHeight / viewportHeight)

    this.toConsole(`Page height: ${pageHeight}px, viewport height: ${viewportHeight}px, total pages: ${pages}`)

    for (let i = 0; i < pages; i++) {
      const currentY = i * viewportHeight
      const fileOutputPath = this.getOutputPath(outputPath, i + 1, pages)

      await this.evaluate(y => window.scrollTo(0, y), currentY)
      await sleep(320)
      await this.saveScreenshot(fileOutputPath)

      this.toConsole(`Saved screenshot page ${i + 1}/${pages} to ${fileOutputPath}`)
    }

    return this
  }

  /**
   * Captures a single full page screenshot.
   *
   * Создает один скриншот всей страницы.
   * @param outputPath output path / путь сохранения
   * @returns this instance / этот экземпляр
   */
  protected async screenshotFull(outputPath: string): Promise<this> {
    const outputPathFull = this.getOutputPath(outputPath)
    await this.saveScreenshot(outputPathFull)

    this.toConsole(`Saved full page screenshot to ${outputPathFull}`)

    return this
  }

  /**
   * Logs text with a "Browser" prefix.
   *
   * Выводит текст в консоль с префиксом "Browser".
   * @param text text to log / текст для вывода
   */
  protected toConsole(text: string): void {
    console.log('Browser', text)
  }
}
