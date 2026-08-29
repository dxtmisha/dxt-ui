// export:none

import type { Canvas, SKRSContext2D } from '@napi-rs/canvas'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignFlagsItem, DesignFlagsList } from '../../types/designTypes'

import { UI_DIR_IN } from '../../config'

/** Scaling factor for flag sprite layout / Фактор масштабирования разметки спрайта флагов */
const DESIGN_FLAGS_FACTOR = 2
/** Target image MIME type / MIME-тип целевого изображения */
const DESIGN_FLAGS_MIME = 'image/webp'
/** Sprite image filename / Имя файла изображения спрайта */
const DESIGN_FLAGS_FILE_NAME_ITEM = 'flags.webp'
/** Target sprite image output path / Целевой путь сохранения изображения спрайта */
const DESIGN_FLAGS_FILE_NAME = [UI_DIR_IN, 'assets', DESIGN_FLAGS_FILE_NAME_ITEM]
/** Relative CSS background path / Относительный путь фона в CSS */
const DESIGN_FLAGS_FILE_PATH = ['.', '..', 'assets', DESIGN_FLAGS_FILE_NAME_ITEM]
/** Target CSS style output path / Целевой путь сохранения CSS стилей */
const DESIGN_FLAGS_FILE_STYLE_NAME = [UI_DIR_IN, 'styles', 'flags.css']
/** Base CSS class name for flag sprite / Базовое имя CSS-класса для спрайта флагов */
const DESIGN_FLAGS_CLASS_NAME = '.ui-sys-flags'

/**
 * Class for generating a sprite image and CSS mapping from a directory of flag icons.
 * It automates the creation of a combined webp image and a CSS file with specific background-position utility classes.
 *
 * Класс для генерации спрайта и CSS-маппинга из директории иконок флагов.
 * Автоматизирует создание комбинированного изображения webp и CSS-файла с утилитарными классами для позиционирования фона.
 */
export class DesignFlags {
  /** List of SVG flag icon filenames / Список имен файлов SVG-иконок флагов */
  protected list: string[]

  /** Accumulated sprite data list / Накопленный список данных спрайта */
  protected data: DesignFlagsList = []

  /** Current column index in sprite grid / Текущий индекс колонки в сетке спрайта */
  protected x: number = 0

  /** Current row index in sprite grid / Текущий индекс строки в сетке спрайта */
  protected y: number = 0

  /** Cell square dimension / Размер квадратной ячейки */
  protected square: number

  /** Top offset inside cell / Смещение сверху внутри ячейки */
  protected top: number

  /** Left offset inside cell / Смещение слева внутри ячейки */
  protected left: number

  /** Canvas instance / Экземпляр canvas */
  protected canvas!: Canvas

  /** Canvas 2D rendering context / 2D-контекст отрисовки canvas */
  protected context!: SKRSContext2D

  /**
   * Constructor for DesignFlags.
   *
   * Конструктор для DesignFlags.
   * @param dir path to the directory containing SVG icons / путь к директории с SVG-иконками
   * @param width width of a single flag in the sprite / ширина одного флага в спрайте
   * @param height height of a single flag in the sprite / высота одного флага в спрайте
   * @param columns number of columns in the sprite grid / количество колонок в сетке спрайта
   */
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
  }

  /**
   * Generates the sprite image and corresponding CSS styles.
   *
   * Генерирует изображение спрайта и соответствующие CSS-стили.
   */
  async make(): Promise<void> {
    await this.initGraphics()

    for (const file of this.list) {
      await this.addImage(file)

      this.data.push(this.addData(file))
      this.next()
    }

    this.save()
    this.saveStyle()
  }

  /**
   * Returns total number of rows in sprite grid.
   *
   * Возвращает общее количество строк в сетке спрайта.
   * @returns number of rows / количество строк
   */
  getLines(): number {
    return Math.ceil(this.list.length / this.columns)
  }

  /**
   * Returns the maximum width of the canvas.
   *
   * Возвращает максимальную ширину холста.
   * @returns canvas width / ширина холста
   */
  protected getCanvasWidth(): number {
    return this.columns * this.square
  }

  /**
   * Returns the maximum height of the canvas.
   *
   * Возвращает максимальную высоту холста.
   * @returns canvas height / высота холста
   */
  protected getCanvasHeight(): number {
    return this.getLines() * this.square
  }

  /**
   * Calculates horizontal drawing offset for current cell.
   *
   * Вычисляет горизонтальное смещение отрисовки для текущей ячейки.
   * @returns horizontal offset / горизонтальное смещение
   */
  protected getDx(): number {
    return (this.x * this.square) + this.left
  }

  /**
   * Calculates vertical drawing offset for current cell.
   *
   * Вычисляет вертикальное смещение отрисовки для текущей ячейки.
   * @returns vertical offset / вертикальное смещение
   */
  protected getDy(): number {
    return (this.y * this.square) + this.top
  }

  /**
   * Generates CSS styles with sprite background positions.
   *
   * Генерирует CSS-стили с позициями фона в спрайте.
   * @returns generated CSS string / сгенерированная CSS-строка
   */
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

  /**
   * Loads and renders single flag image onto canvas.
   *
   * Загружает и отрисовывает изображение отдельного флага на холсте.
   * @param file filename of SVG flag / имя файла SVG-флага
   */
  protected async addImage(file: string): Promise<void> {
    const path = PropertiesFile.joinPath([this.dir, file])
    const { loadImage } = await import('@napi-rs/canvas')
    const image = await loadImage(path)

    this.context.drawImage(
      image,
      this.getDx(),
      this.getDy(),
      this.width,
      this.height
    )
  }

  /**
   * Records metadata and positions for a flag item.
   *
   * Записывает метаданные и координаты для элемента флага.
   * @param file filename of SVG flag / имя файла SVG-флага
   * @returns flag item metadata / метаданные элемента флага
   */
  protected addData(file: string): DesignFlagsItem {
    return {
      name: file.replace(/\.[^.]+$/, ''),
      x: this.getDx(),
      y: this.getDy()
    }
  }

  /**
   * Advances grid coordinates to next cell.
   *
   * Перемещает координаты сетки к следующей ячейке.
   */
  protected next(): void {
    this.x++

    if (this.x >= this.columns) {
      this.x = 0
      this.y++
    }
  }

  /**
   * Saves rendered canvas buffer to webp file.
   *
   * Сохраняет буфер отрисованного canvas в файл webp.
   */
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

  /**
   * Saves generated CSS styles to file.
   *
   * Сохраняет сгенерированные CSS-стили в файл.
   */
  protected saveStyle(): void {
    PropertiesFile.writeByPath(
      DESIGN_FLAGS_FILE_STYLE_NAME,
      this.getStyle()
    )
  }

  /**
   * Initializes canvas and 2D context.
   *
   * Инициализирует canvas и 2D-контекст.
   */
  protected async initGraphics(): Promise<void> {
    const { createCanvas } = await import('@napi-rs/canvas')

    this.canvas = createCanvas(
      this.getCanvasWidth(),
      this.getCanvasHeight()
    )

    this.context = this.canvas.getContext('2d', { alpha: true })
  }

  /**
   * Calculates horizontal left alignment offset.
   *
   * Вычисляет горизонтальное смещение выравнивания слева.
   * @returns left offset / смещение слева
   */
  protected initLeft(): number {
    return (this.square / 2) - (this.width / 2)
  }

  /**
   * Reads and filters SVG file list from icons directory.
   *
   * Читает и фильтрует список файлов SVG из директории иконок.
   * @returns list of SVG filenames / список имен SVG-файлов
   */
  protected initList(): string[] {
    return PropertiesFile.readDir(this.dir)
      .filter(dir => dir.endsWith('.svg'))
  }

  /**
   * Calculates square cell dimension based on flag width/height factor.
   *
   * Вычисляет размер квадратной ячейки на основе коэффициента ширины/высоты флага.
   * @returns square cell size / размер квадратной ячейки
   */
  protected initSquare(): number {
    if (this.width >= this.height) {
      return this.width * DESIGN_FLAGS_FACTOR
    }

    return this.height * DESIGN_FLAGS_FACTOR
  }

  /**
   * Calculates vertical top alignment offset.
   *
   * Вычисляет вертикальное смещение выравнивания сверху.
   * @returns top offset / смещение сверху
   */
  protected initTop(): number {
    return (this.square / 2) - (this.height / 2)
  }
}
