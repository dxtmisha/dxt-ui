// export:none

import { Canvas, createCanvas, loadImage, type SKRSContext2D } from '@napi-rs/canvas'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignFlagsItem, DesignFlagsList } from '../../types/designTypes'

import { UI_DIR_IN } from '../../config'

const DESIGN_FLAGS_FACTOR = 2
const DESIGN_FLAGS_MIME = 'image/webp'
const DESIGN_FLAGS_FILE_NAME_ITEM = 'flags.webp'
const DESIGN_FLAGS_FILE_NAME = [UI_DIR_IN, 'assets', DESIGN_FLAGS_FILE_NAME_ITEM]
const DESIGN_FLAGS_FILE_PATH = ['.', '..', 'assets', DESIGN_FLAGS_FILE_NAME_ITEM]
const DESIGN_FLAGS_FILE_STYLE_NAME = [UI_DIR_IN, 'styles', 'flags.css']
const DESIGN_FLAGS_CLASS_NAME = '.ui-sys-flags'

export class DesignFlags {
  protected list: string[]
  protected data: DesignFlagsList = []

  protected x: number = 0
  protected y: number = 0

  protected square: number
  protected top: number
  protected left: number

  protected readonly canvas: Canvas
  protected readonly context: SKRSContext2D

  constructor(
    protected readonly dir: string = 'src/assets/flags',
    protected readonly width: number = 96,
    protected readonly height: number = 72,
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
    for (const file of this.list) {
      await this.addImage(file)

      this.data.push(this.addData(file))
      this.next()
    }

    this.save()
    this.saveStyle()
  }

  getLines(): number {
    return Math.ceil(this.list.length / this.columns)
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
    return this.getLines() * this.square
  }

  protected getDx() {
    return (this.x * this.square) + this.left
  }

  protected getDy() {
    return (this.y * this.square) + this.top
  }

  protected getStyle(): string {
    const backgroundSizeColumns = this.columns * (this.square / this.width)
    const backgroundSizeLines = this.getLines() * (this.square / this.height)

    let style: string = `
${DESIGN_FLAGS_CLASS_NAME} {
  --sys-flags-width: ${this.width}px;
  --sys-flags-height: ${this.height}px;
  --sys-flags-top: ${this.top}px;
  --sys-flags-left: ${this.left}px;
  --sys-flags-lines: ${this.getLines()};

  background-image: url("${DESIGN_FLAGS_FILE_PATH.join('/')}");
  background-size: calc(100% * ${backgroundSizeColumns}) calc(100% * ${backgroundSizeLines});
}
`.trim()

    const x = 100 / (this.getCanvasWidth() - this.width)
    const y = 100 / (this.getCanvasHeight() - this.height)

    this.data.forEach((item) => {
      style += `
${DESIGN_FLAGS_CLASS_NAME}--${item.name} {
  background-position: ${item.x * x}% ${item.y * y}%;
}`
    })

    return style
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

  protected addData(file: string): DesignFlagsItem {
    return {
      name: file.replace(/\.[^.]+$/, ''),
      x: this.getDx(),
      y: this.getDy()
    }
  }

  protected next(): void {
    this.x++

    if (this.x >= this.columns) {
      this.x = 0
      this.y++
    }
  }

  protected save(): void {
    const buffer = this.canvas.toBuffer(DESIGN_FLAGS_MIME, 64)

    if (buffer) {
      PropertiesFile.writeByPath(
        DESIGN_FLAGS_FILE_NAME,
        buffer,
        false
      )
    }
  }

  protected saveStyle(): void {
    PropertiesFile.writeByPath(
      DESIGN_FLAGS_FILE_STYLE_NAME,
      this.getStyle()
    )
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
