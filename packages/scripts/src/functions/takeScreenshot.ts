import puppeteer from 'puppeteer'
import {
  SCREENSHOT_FORMAT,
  SCREENSHOT_HEIGHTS,
  SCREENSHOT_QUALITY,
  SCREENSHOT_WIDTHS,
  type ScreenshotOptions
} from '../types/screenshotTypes'

/**
 * Takes a screenshot of the given URL.
 *
 * Делает скриншот по указанному URL.
 * @param url URL to capture/URL для захвата
 * @param outputPath Path to save the screenshot/Путь для сохранения скриншота
 * @param options Additional options for screenshot/Дополнительные опции для скриншота
 */
export async function takeScreenshot(
  url: string,
  outputPath: string,
  options: ScreenshotOptions = {}
): Promise<void> {
  const {
    width = SCREENSHOT_WIDTHS,
    height = SCREENSHOT_HEIGHTS,
    format = SCREENSHOT_FORMAT,
    quality = SCREENSHOT_QUALITY,
    fullPage = true
  } = options

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    await page.setViewport({ width, height })
    await page.goto(url, { waitUntil: 'networkidle2' })

    await page.screenshot({
      path: outputPath,
      fullPage,
      type: format,
      quality
    })
  } catch (error) {
    console.error('Error taking screenshot:', error)
  } finally {
    await browser.close()
  }
}
