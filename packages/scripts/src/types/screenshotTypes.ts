/** Options for taking screenshots/ Опции для создания скриншотов */
export interface ScreenshotOptions {
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

/** Default screenshot widths/ Стандартные ширины скриншотов */
export const SCREENSHOT_WIDTHS = 1920

/** Default screenshot heights/ Стандартные высоты скриншотов */
export const SCREENSHOT_HEIGHTS = 1080

/** Default screenshot format/ Стандартный формат скриншотов */
export const SCREENSHOT_FORMAT = 'webp'

/** Default screenshot quality/ Стандартное качество скриншотов */
export const SCREENSHOT_QUALITY = 80
