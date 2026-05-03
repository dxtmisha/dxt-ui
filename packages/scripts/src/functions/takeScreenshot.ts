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

  console.info(`Taking screenshot of ${url} to ${outputPath}...`)

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  })
  const page = await browser.newPage()

  try {
    await page.setViewport({ width, height })

    // Перехватываем ошибки консоли браузера для отладки
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()))
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.message))

    const response = await page.goto(url, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
      timeout: 60000
    })

    if (!response || !response.ok()) {
      console.error(`Failed to load page: ${url}. Status: ${response?.status()}`)
    }

    // Проверяем высоту контента перед скриншотом
    const metrics = await page.evaluate(() => {
      return {
        height: document.documentElement.scrollHeight,
        width: document.documentElement.scrollWidth,
        bodyHeight: document.body.scrollHeight
      }
    })
    console.info('Page metrics:', metrics)

    // Принудительно прокручиваем страницу вниз, чтобы ленивые элементы загрузились
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0
        const distance = 100
        const timer = setInterval(() => {
          const scrollHeight = document.documentElement.scrollHeight
          window.scrollBy(0, distance)
          totalHeight += distance

          if (totalHeight >= scrollHeight) {
            clearInterval(timer)
            resolve()
          }
        }, 100)
      })
    })

    // Ждем, пока скроется какой-нибудь лоадер или появится основной контент
    // Если на странице есть анимации, лучше подождать немного
    console.info('Waiting for page animations and layout...')
    await new Promise(resolve => setTimeout(resolve, 10000))

    console.info('Saving screenshot...')
    // const result = await page.screenshot({
    //   path: outputPath,
    //   fullPage,
    //   type: format,
    //   quality: format === 'png' ? undefined : quality
    // })

    const buffer = await page.screenshot({
      fullPage,
      type: format,
      quality: format === 'png' ? undefined : quality
    })

    if (buffer && buffer.length > 0) {
      const fs = await import('node:fs/promises')
      await fs.writeFile(outputPath, buffer)
      console.info(`Screenshot saved successfully. Size: ${buffer.length} bytes to ${outputPath}`)
    } else {
      console.error('Screenshot buffer is empty!')
      // Попробуем сделать скриншот только видимой области, если fullPage не сработал
      const fallbackBuffer = await page.screenshot({
        fullPage: false,
        type: format,
        quality: format === 'png' ? undefined : quality
      })
      if (fallbackBuffer && fallbackBuffer.length > 0) {
        const fs = await import('node:fs/promises')
        await fs.writeFile(outputPath, fallbackBuffer)
        console.info(`Fallback screenshot saved. Size: ${fallbackBuffer.length} bytes`)
      }
    }
  } catch (error) {
    console.error('Error taking screenshot:', error)
  } finally {
    await browser.close()
  }
}
