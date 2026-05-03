import { type PuppeteerLifeCycleEvent } from 'puppeteer'

/** Options for page sizes/ Опции для размеров страницы */
export interface ScreenshotMetrics {
  /** Width of the page/ Ширина страницы */
  width: number
  /** Height of the page/ Высота страницы */
  height: number
}

/** Options for taking screenshots/ Опции для создания скриншотов */
export interface ScreenshotOptions {
  /** Additional arguments for browser launch/ Дополнительные аргументы для запуска браузера */
  args?: string[]
  /** When to consider navigation succeeded/ Когда считать навигацию успешной */
  waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
  /** Timeout for loading the page/ Таймаут для загрузки страницы */
  timeout?: number

  /** Width of the screenshot/ Ширина скриншота */
  width?: number
  /** Height of the screenshot/ Высота скриншота */
  height?: number
  /** Format of the screenshot/ Формат скриншота */
  format?: 'png' | 'jpeg' | 'webp'
  /** Quality of the screenshot/ Качество скриншота */
  quality?: number
  /** Whether to take a full page screenshot/ Делать ли скриншот всей страницы */
  fullPage?: boolean
}

/** Default screenshot args/ Стандартные аргументы для запуска браузера */
export const SCREENSHOT_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage'
]

/** Default screenshot format/ Стандартный формат скриншотов */
export const SCREENSHOT_FORMAT = 'webp'

/** Default screenshot heights/ Стандартные высоты скриншотов */
export const SCREENSHOT_HEIGHTS = 1080

/** Default screenshot quality/ Стандартное качество скриншотов */
export const SCREENSHOT_QUALITY = 80

/** Default screenshot timeout/ Стандартный таймаут для загрузки страницы */
export const SCREENSHOT_TIMEOUT = 320_000

/** Default wait until condition/ Стандартное условие ожидания загрузки */
export const SCREENSHOT_WAIT_UNTIL: PuppeteerLifeCycleEvent[] = ['networkidle0', 'domcontentloaded']

/** Default screenshot widths/ Стандартные ширины скриншотов */
export const SCREENSHOT_WIDTHS = 1920
