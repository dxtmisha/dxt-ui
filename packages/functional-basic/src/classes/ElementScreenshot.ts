/**
 * Class for taking screenshots of an element.
 *
 * Класс для создания скриншотов элемента.
 *
 * This class uses native browser APIs to capture an element by embedding its HTML into an SVG.
 * It has limitations and may not render everything with perfect accuracy, especially:
 * - Images, iframes, or other resources from different origins (due to CORS security policies).
 * - CSS pseudo-elements like ::before and ::after are not rendered.
 * - The element's context is lost, so CSS rules depending on parent elements might not apply correctly.
 *
 * For more robust and accurate capturing, a library like html2canvas is recommended as it reconstructs
 * the element and its styles on a canvas from scratch.
 */
export class ElementScreenshot {
  /**
   * Constructor
   * @param element HTML element to capture/ HTML элемент для захвата
   */
  constructor(
    protected readonly element: HTMLElement
  ) {
  }

  /**
   * Takes a screenshot of the element.
   *
   * Делает скриншот элемента.
   */
  take(): Promise<string> {
    return new Promise((resolve, reject) => {
      const {
        width,
        height
      } = this.element.getBoundingClientRect()

      if (width === 0 || height === 0) {
        return reject(new Error('Element has no dimensions'))
      }

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      if (!context) {
        return reject(new Error('Could not get canvas context'))
      }

      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.scale(dpr, dpr)

      const styles = this.getStyles()
      const elementHtml = this.element.outerHTML

      // The element is wrapped in a div to ensure it's a valid XHTML for the foreignObject.
      const data = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <foreignObject x="0" y="0" width="100%" height="100%">
            <style>${styles}</style>
            <div xmlns="http://www.w3.org/1999/xhtml">${elementHtml}</div>
          </foreignObject>
        </svg>
      `

      const img = new Image()

      // Using btoa to encode the SVG for the data URL to prevent issues with special characters.
      // unescape and encodeURIComponent are used to handle UTF-8 characters correctly.
      const svg64 = btoa(unescape(encodeURIComponent(data)))
      const imageSrc = 'data:image/svg+xml;base64,' + svg64

      img.onload = () => {
        context.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/png'))
      }

      img.onerror = (error) => {
        console.error('Screenshot failed', {
          error,
          svg: data
        })
        reject(new Error('Failed to load SVG image for screenshot. See console for details.'))
      }

      img.src = imageSrc
    })
  }

  /**
   * Takes a screenshot and downloads it.
   *
   * Делает скриншот и скачивает его.
   * @param filename name of the file to download/ имя файла для скачивания
   */
  async download(filename: string = 'screenshot.png'): Promise<void> {
    const dataUrl = await this.take()
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  /**
   * Gathers all CSS styles from the document's stylesheets.
   *
   * Собирает все стили CSS из таблиц стилей документа.
   */
  protected getStyles(): string {
    let styles = ''
    try {
      for (const sheet of Array.from(document.styleSheets)) {
        // Reading cssRules can be blocked by CORS if the stylesheet is from another domain.
        try {
          for (const rule of Array.from(sheet.cssRules)) {
            styles += rule.cssText
          }
        } catch (e) {
          console.warn('Could not read CSS rules from a stylesheet due to CORS.', e)
        }
      }
    } catch (e) {
      console.error('Could not access stylesheets.', e)
    }
    return styles
  }
}
