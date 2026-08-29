import type { PuppeteerLifeCycleEvent } from 'puppeteer'

/**
 * Viewport dimension metrics for taking screenshots.
 *
 * Метрики размеров области просмотра (viewport) для создания скриншотов.
 */
export interface ScreenshotMetrics {
  /** Width of the page in pixels / Ширина страницы в пикселях */
  width: number

  /** Height of the page in pixels / Высота страницы в пикселях */
  height: number
}

/**
 * Configuration options for capturing screenshots via Puppeteer.
 *
 * Опции конфигурации для создания скриншотов через Puppeteer.
 */
export interface ScreenshotOptions {
  /** Additional CLI flags for browser launch / Дополнительные CLI-флаги для запуска браузера */
  args?: string[]

  /** Navigation lifecycle event conditions to consider page loaded / Условия событий жизненного цикла навигации для завершения загрузки */
  waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]

  /** Maximum timeout in milliseconds for loading the page / Максимальный таймаут в миллисекундах для загрузки страницы */
  timeout?: number

  /** Width of the screenshot viewport in pixels / Ширина области просмотра скриншота в пикселях */
  width?: number

  /** Height of the screenshot viewport in pixels / Высота области просмотра скриншота в пикселях */
  height?: number

  /** Image output format / Формат сохранения изображения */
  format?: 'png' | 'jpeg' | 'webp'

  /** Image compression quality (1-100) / Качество сжатия изображения (1-100) */
  quality?: number

  /** Whether to capture full scrollable page height / Делать ли снимок всей прокручиваемой страницы */
  fullPage?: boolean
}

/** Default Chromium launch arguments / Стандартные аргументы запуска Chromium */
export const SCREENSHOT_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage'
]

/** Default image output format / Стандартный формат вывода скриншотов */
export const SCREENSHOT_FORMAT = 'webp'

/** Default viewport height in pixels / Стандартная высота области просмотра в пикселях */
export const SCREENSHOT_HEIGHTS = 1080

/** Default image compression quality / Стандартное качество сжатия изображений */
export const SCREENSHOT_QUALITY = 80

/** Default page load timeout in milliseconds / Стандартный таймаут загрузки страницы в миллисекундах */
export const SCREENSHOT_TIMEOUT = 320_000

/** Default page navigation readiness conditions / Стандартные условия готовности страницы при навигации */
export const SCREENSHOT_WAIT_UNTIL: PuppeteerLifeCycleEvent[] = ['networkidle0', 'domcontentloaded']

/** Default viewport width in pixels / Стандартная ширина области просмотра в пикселях */
export const SCREENSHOT_WIDTHS = 1920
