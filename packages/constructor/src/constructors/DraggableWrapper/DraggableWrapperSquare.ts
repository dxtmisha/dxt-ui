import { ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

/**
 * Helper class for managing the placeholder spacer (square) element /
 * Вспомогательный класс для управления элементом-заполнителем (square)
 */
export class DraggableWrapperSquare {
  readonly squareElement = ref<HTMLElement>()

  protected readonly before = ref<boolean>()
  protected cached: Partial<CSSStyleDeclaration> = {}

  protected readonly property: {
    width: string
    height: string
    marginTop: string
    marginRight: string
    marginBottom: string
    marginLeft: string
  }

  constructor(
    protected readonly classes: DraggableWrapperClassesData
  ) {
    const className = this.classes.getName()

    this.property = {
      width: `--${className}-sys-square-width`,
      height: `--${className}-sys-square-height`,
      marginTop: `--${className}-sys-square-margin-top`,
      marginRight: `--${className}-sys-square-margin-right`,
      marginBottom: `--${className}-sys-square-margin-bottom`,
      marginLeft: `--${className}-sys-square-margin-left`
    }
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

  prepare(
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
      const child = this.before.value
        ? item
        : item.nextElementSibling

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

      const element = this.classes.getElement()

      if (element) {
        element.insertBefore(squareElement, null)
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
      squareElement.style.setProperty(this.property.width, style.width || 'unset')
      squareElement.style.setProperty(this.property.height, style.height || 'unset')
      squareElement.style.setProperty(this.property.marginTop, style.marginTop || 'unset')
      squareElement.style.setProperty(this.property.marginRight, style.marginRight || 'unset')
      squareElement.style.setProperty(this.property.marginBottom, style.marginBottom || 'unset')
      squareElement.style.setProperty(this.property.marginLeft, style.marginLeft || 'unset')
    }
  }

  protected resetStyles(): void {
    const element = this.squareElement.value

    if (element) {
      element.style.removeProperty(this.property.width)
      element.style.removeProperty(this.property.height)
      element.style.removeProperty(this.property.marginTop)
      element.style.removeProperty(this.property.marginRight)
      element.style.removeProperty(this.property.marginBottom)
      element.style.removeProperty(this.property.marginLeft)
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
