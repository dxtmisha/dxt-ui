import { spawn } from 'node:child_process'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { BrowserItem } from '../BrowserItem'
import { PropertiesFile } from '../Properties/PropertiesFile.ts'

/**
 * Class for automatic capturing of screenshots by running dev server.
 *
 * Класс для автоматического захвата скриншотов путем запуска сервера разработки.
 */
export class DesignScreenshot {
  /** indicates if screenshot process is running / указывает, запущен ли процесс создания скриншота */
  protected isReading: boolean = false

  /** server url / URL сервера */
  protected url?: string

  /**
   * Constructor
   * @param file output path / путь к файлу
   */
  constructor(
    protected readonly file: string = './ai-screenshot/screenshot'
  ) {
    ServerStorage.setErrorStatus(true)
  }

  /**
   * starts the screenshot process.
   *
   * Запускает процесс создания скриншота.
   */
  async make() {
    console.info('Screenshot')

    PropertiesFile.createDir(PropertiesFile.getPathDir(this.file + '.file'))
    this.makeServer()
  }

  /**
   * screenshot trigger listener.
   *
   * Слушатель триггера для создания скриншота.
   * @returns capture success status / статус успешного захвата
   */
  protected readonly listener = async (): Promise<boolean> => {
    if (
      this.url
      && !this.isReading
    ) {
      this.isReading = true

      console.info('URL', this.url)

      const browser = new BrowserItem(this.url, { height: 1024 * 12 })
      await browser.screenshot(this.file)

      return true
    }

    return false
  }

  /**
   * spawns development server.
   *
   * Запускает сервер разработки.
   * @returns this instance / этот экземпляр
   */
  protected makeServer(): this {
    const server = spawn(
      'npm',
      ['run', 'dev'],
      {
        shell: true,
        stdio: 'pipe'
      }
    )

    server.stdout?.on('data', (data) => {
      console.log('Server', 'start')

      const dataString = data.toString()
      this.makeUrl(dataString)

      if (this.url) {
        console.info('Server', 'init')

        this.listener()
          .then((success: boolean) => {
            if (success) {
              server.kill()

              console.info('Server', 'kill')
            }
          })
      }
    })

    server.stderr?.on('data', (data) => {
      console.error(`Server Error: ${data.toString()}`)
    })

    return this
  }

  /**
   * extracts server url from console output.
   *
   * Извлекает URL сервера из консольного вывода.
   * @param data command output / вывод команды
   * @returns this instance / этот экземпляр
   */
  makeUrl(data: string): this {
    const match = data.match(/(https?:\/\/localhost\S+)/)

    if (match) {
      this.url = match[1]
    }

    return this
  }
}
