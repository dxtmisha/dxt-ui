import { MotionTransformElement } from './MotionTransformElement'

/**
 * Class for managing size calculation.
 *
 * Класс для управления вычислением размера.
 */
export class MotionTransformSize {
  /** Top offset for transform/ Верхнее смещение для трансформации */
  top: string | null = null
  /** Left offset for transform/ Левое смещение для трансформации */
  left: string | null = null
  /** Head width value/ Ширина шапки */
  headWidth: string | null = null
  /** Total height value/ Общая высота */
  height: string | null = null
  /** Scale factor/ Коэффициент масштаба */
  scale: string | null = null

  /** Context width/ Ширина контекста */
  contextWidth: string | null = null
  /** Context height/ Высота контекста */
  contextHeight: string | null = null

  /** Head height value/ Высота шапки */
  headHeight: string | null = null
  /** Head scale factor/ Коэффициент масштаба шапки */
  headScale: string | null = null

  /** Body height value/ Высота тела */
  bodyHeight: string | null = null

  /**
   * Constructor
   * @param element class object for managing an element/ объект класса для управления элементом
   */
  constructor(
    protected element: MotionTransformElement
  ) {
  }

  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update(): void {
    const rect = this.element.getRect()

    if (rect) {
      const elementHead = this.element.getElementHead()
      const elementBody = this.element.getElementBody()

      const scale = 1 / window.innerWidth * rect.width
      const headScale = 1 / rect.width * window.innerWidth

      this.top = `${rect.top - (scale * rect.top / (scale - 1))}px`
      this.left = `${rect.left - (scale * rect.left / (scale - 1))}px`
      this.height = `${100 / window.innerHeight * rect.height * headScale}%`
      this.scale = scale.toString()

      this.contextWidth = `${rect.width}px`
      this.contextHeight = `${rect.height}px`

      if (elementHead) {
        this.headWidth = `${rect.width}px`
        this.headHeight = `${elementHead.offsetHeight ?? '0'}px`
        this.headScale = headScale.toString()

        if (elementBody) {
          this.bodyHeight = `${elementBody.offsetHeight + (this.element.isSection() ? elementHead.offsetHeight : 0)}px`
        }
      }
    }
  }

  /**
   * Restores all data to original.
   *
   * Восстанавливает все данные на изначальные.
   */
  reset(): void {
    this.top = null
    this.left = null
    this.height = null
    this.scale = null

    this.contextWidth = null
    this.contextHeight = null

    this.headWidth = null
    this.headHeight = null
    this.headScale = null

    this.bodyHeight = null
  }
}
