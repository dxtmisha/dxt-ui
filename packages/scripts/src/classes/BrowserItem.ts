import { type Browser, launch, type Page } from 'puppeteer'
import type { ScreenshotOptions } from '../types/screenshotTypes'

export class BrowserItem {
  protected browser?: Browser
  protected page?: Page

  constructor(
    protected url: string,
    protected readonly options: ScreenshotOptions = {}
  ) {
  }

  async make() {

  }

  protected async makeBrowser() {
    const {
      args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    } = this.options

    const browser = await launch({
      headless: true,
      args
    })
    const page = await browser.newPage()
  }
}
