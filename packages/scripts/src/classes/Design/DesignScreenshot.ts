import { spawn } from 'node:child_process'
import { ServerStorage } from '@dxtmisha/functional-basic'
import { takeScreenshot } from '../../functions/takeScreenshot'

export class DesignScreenshot {
  protected url?: string

  constructor(
    protected readonly file: string = './ai-screenshot.webp'
  ) {
    ServerStorage.setErrorStatus(true)
  }

  async make() {
    const port = 5173
    const url = `http://localhost:${port}`
    let isReading: boolean = false

    console.info('Screenshot...')

    this.makeServer(async () => {
      if (
        this.url
        && !isReading
      ) {
        isReading = true
        await takeScreenshot(this.url, this.file)
      }
    })

    try {
      // await this.waitUntilReady(url)
      // console.info('Server is ready, taking screenshot...')
      // console.info(`Screenshot saved to ${this.file}`)
    } catch (error) {
      // console.error('Error during screenshot process:', error)
    } finally {
      // console.info('Stopping dev server...')
      // server.kill()
    }
  }

  private async waitUntilReady(url: string, timeout = 30000): Promise<void> {
    const start = Date.now()
    while (Date.now() - start < timeout) {
      try {
        const response = await fetch(url)
        if (response.ok) return
      } catch (_e) {
        // Wait for next attempt
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    throw new Error(`Timeout waiting for server at ${url}`)
  }

  protected makeServer(
    listener: (data: any) => Promise<void>
  ) {
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
      console.log(data.toString())

      this.makeUrl(dataString)

      if (this.url) {
        listener(data)
          .then(() => server.kill())
      }
    })

    server.stderr?.on('data', (data) => {
      console.error(`Server Error: ${data.toString()}`)
    })
  }

  makeUrl(data: string): void {
    const match = data.match(/(https?:\/\/localhost\S+)/)

    if (match) {
      this.url = match[1]
    }
  }
}
