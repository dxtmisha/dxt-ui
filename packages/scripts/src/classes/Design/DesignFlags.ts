// export:none

import { Canvas, createCanvas, loadImage, type SKRSContext2D } from '@napi-rs/canvas'
import { PropertiesFile } from '../Properties/PropertiesFile'

const DESIGN_FLAGS_FACTOR = 1.5
const DESIGN_FLAGS_FILE_NAME = 'flags.webp'

export class DesignFlags {
  protected list: string[]

  protected x: number = 0
  protected y: number = 0

  protected square: number
  protected top: number
  protected left: number

  protected readonly canvas: Canvas
  protected readonly context: SKRSContext2D

  constructor(
    protected readonly dir: string = 'src/assets/flags',
    protected readonly width: number = 64,
    protected readonly height: number = 48,
    protected readonly columns: number = 12
  ) {
    this.list = this.initList()
    this.square = this.initSquare()
    this.top = this.initTop()
    this.left = this.initLeft()

    this.canvas = this.initCanvas()
    this.context = this.initContext()
  }

  async make() {
    const list = this.initList()

    for (const file of list) {
      await this.addImage(file)
      this.next()
    }
  }

  /**
   * Returns the maximum width of the canvas.
   *
   * Возвращает максимальную ширину холста.
   */
  protected getCanvasWidth(): number {
    return this.columns * this.square
  }

  /**
   * Returns the maximum height of the canvas.
   *
   * Возвращает максимальную высоту холста.
   */
  protected getCanvasHeight(): number {
    return Math.ceil(this.initList().length / this.columns) * this.square
  }

  protected getDx() {
    return (this.x * this.square) + this.left
  }

  protected getDy() {
    return (this.y * this.square) + this.top
  }

  protected async addImage(file: string): Promise<void> {
    const path = PropertiesFile.joinPath([this.dir, file])
    const image = await loadImage(path)

    this.context.drawImage(
      image,
      this.getDx(),
      this.getDy(),
      this.width,
      this.height
    )
  }

  protected next(): void {
    this.x++

    if (this.x >= this.columns) {
      this.x = 0
      this.y++
    }
  }

  protected save(): void {
    const buffer = this.canvas.toBuffer('image/webp', 0.9)

    if (buffer) {
      PropertiesFile.writeByPath(
        [this.dir, DESIGN_FLAGS_FILE_NAME],
        buffer
      )
    }
  }

  protected initCanvas(): Canvas {
    return createCanvas(
      this.getCanvasWidth(),
      this.getCanvasHeight()
    )
  }

  protected initContext(): SKRSContext2D {
    return this.canvas.getContext('2d', { alpha: true })
  }

  protected initLeft(): number {
    return (this.square / 2) - (this.width / 2)
  }

  protected initList(): string[] {
    return PropertiesFile.readDir(this.dir)
      .filter(dir => dir.endsWith('.svg'))
  }

  protected initSquare(): number {
    if (this.width >= this.height) {
      return this.width * DESIGN_FLAGS_FACTOR
    }

    return this.height * DESIGN_FLAGS_FACTOR
  }

  protected initTop(): number {
    return (this.square / 2) - (this.height / 2)
  }
}
