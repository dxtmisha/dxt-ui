import { ref, type Ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

/**
 * Helper class for managing the placeholder spacer (square) element /
 * Вспомогательный класс для управления элементом-заполнителем (square)
 */
export class DraggableWrapperSquare {
  protected readonly customPropertyWidth: string
  protected readonly customPropertyHeight: string
  protected readonly customPropertyMarginTop: string
  protected readonly customPropertyMarginRight: string
  protected readonly customPropertyMarginBottom: string
  protected readonly customPropertyMarginLeft: string

  readonly squareElement = ref<HTMLElement>()
  protected readonly before = ref<boolean>()

  protected cached: Partial<CSSStyleDeclaration> = {}

  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly classes: DraggableWrapperClassesData
  ) {
    this.customPropertyWidth = `--${this.className}-sys-square-width`
    this.customPropertyHeight = `--${this.className}-sys-square-height`
    this.customPropertyMarginTop = `--${this.className}-sys-square-margin-top`
    this.customPropertyMarginRight = `--${this.className}-sys-square-margin-right`
    this.customPropertyMarginBottom = `--${this.className}-sys-square-margin-bottom`
    this.customPropertyMarginLeft = `--${this.className}-sys-square-margin-left`
  }

  isShow(): boolean {
    return Boolean(
      this.squareElement.value?.classList.contains(this.classes.list.show)
    )
  }

  isBefore(): boolean {
    return this.before.value ?? false
  }

  getElement(): HTMLElement | undefined {
    return this.squareElement.value
  }

  update(
    item?: HTMLElement,
    reset: boolean = false
  ): void {
    const squareElement = this.squareElement.value

    if (!squareElement) {
      return
    }

    if (!item) {
      this.reset()
      return
    }

    const style = reset
      ? this.cached
      : getComputedStyle(item)

    if (!this.isShow()) {
      this.updateCached(style)
    }

    this.before.value = this.getBefore(item)
    this.updateStyles(style)

    if (item.parentElement) {
      const child = this.before.value ? item : item.nextElementSibling
      item.parentElement.insertBefore(squareElement, child)
    }

    squareElement.classList.add(this.classes.list.show)
    this.classes.setBlockSelection(true)
  }

  reset(): void {
    const squareElement = this.squareElement.value

    if (squareElement) {
      this.classes.setBlockSelection(false)
      squareElement.classList.remove(this.classes.list.show)

      this.resetStyles()

      if (this.element.value) {
        this.element.value.insertBefore(squareElement, null)
      }
    }
  }

  protected getBefore(item: HTMLElement): boolean {
    const items = this.classes.findItems()

    if (items) {
      for (const el of items) {
        if (el === item) {
          return true
        }

        if (el === this.squareElement.value) {
          break
        }
      }
    }

    return false
  }

  protected updateStyles(style: Partial<CSSStyleDeclaration>): void {
    const squareElement = this.squareElement.value

    if (squareElement) {
      squareElement.style.setProperty(this.customPropertyWidth, style.width || 'unset')
      squareElement.style.setProperty(this.customPropertyHeight, style.height || 'unset')
      squareElement.style.setProperty(this.customPropertyMarginTop, style.marginTop || 'unset')
      squareElement.style.setProperty(this.customPropertyMarginRight, style.marginRight || 'unset')
      squareElement.style.setProperty(this.customPropertyMarginBottom, style.marginBottom || 'unset')
      squareElement.style.setProperty(this.customPropertyMarginLeft, style.marginLeft || 'unset')
    }
  }

  protected resetStyles(): void {
    const element = this.squareElement.value

    if (element) {
      element.style.removeProperty(this.customPropertyWidth)
      element.style.removeProperty(this.customPropertyHeight)
      element.style.removeProperty(this.customPropertyMarginTop)
      element.style.removeProperty(this.customPropertyMarginRight)
      element.style.removeProperty(this.customPropertyMarginBottom)
      element.style.removeProperty(this.customPropertyMarginLeft)
    }
  }

  protected updateCached(style: Partial<CSSStyleDeclaration>): void {
    this.cached = {
      width: style.width,
      height: style.height,
      marginTop: style.marginTop,
      marginRight: style.marginRight,
      marginBottom: style.marginBottom,
      marginLeft: style.marginLeft
    }
  }
}
