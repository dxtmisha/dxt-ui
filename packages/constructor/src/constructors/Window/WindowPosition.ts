// ai-none

import { getElement, isDomRuntime } from '@dxtmisha/functional'

import { WindowClient } from './WindowClient'
import { WindowElement } from './WindowElement'
import { WindowCoordinates } from './WindowCoordinates'

import type { WindowProps } from './props'

/**
 * A class for working with position.
 *
 * Класс для работы с позицией.
 */
export class WindowPosition {
  protected x: number = 0
  protected y: number = 0

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param client function returning client coordinates manager / функция, возвращающая менеджер клиентских координат
   * @param coordinates function returning coordinates manager / функция, возвращающая менеджер координат
   * @param element function returning element manager / функция, возвращающая менеджер элементов
   */
  constructor(
    protected readonly props: WindowProps,
    protected readonly client: () => WindowClient,
    protected readonly coordinates: () => WindowCoordinates,
    protected readonly element: () => WindowElement
  ) {
  }

  /**
   * Returns the X position.
   *
   * Возвращает позицию X.
   * @returns X coordinate / координата X
   */
  getX(): number {
    return this.x
  }

  /**
   * Returns the Y position.
   *
   * Возвращает позицию Y.
   * @returns Y coordinate / координата Y
   */
  getY(): number {
    return this.y
  }

  /**
   * Returns the X position for styles.
   *
   * Возвращает позицию X для стилей.
   * @returns style string with px / строка стилей с px
   */
  getStyleX(): string {
    return `${this.x}px`
  }

  /**
   * Returns the Y position for styles.
   *
   * Возвращает позицию Y для стилей.
   * @returns style string with px / строка стилей с px
   */
  getStyleY(): string {
    return `${this.y}px`
  }

  /**
   * Checks if the alignment type is above the element.
   *
   * Проверяет, является ли тип выравнивания над элементом.
   * @returns true if axis is 'on' / true, если axis равен 'on'
   */
  isOver(): boolean {
    return this.props.axis === 'on'
  }

  /**
   * Update of the element's position coordinates.
   *
   * Обновление координаты положения элемента.
   */
  update(): boolean {
    if (this.coordinates().update()) {
      this.setX()
      this.setY()

      return true
    }

    return false
  }

  /**
   * Updates the scroll position if an element is selected.
   *
   * Обновляет место скрола, если выбран элемент.
   */
  updateScroll(): void {
    const elementBodyContext = this.element().getBodyContext()

    if (
      this.isOver()
      && this.props.overElement
      && elementBodyContext
      && elementBodyContext.scrollHeight > elementBodyContext.offsetHeight
    ) {
      const rect = getElement(this.props.overElement)?.getBoundingClientRect()
      const rectBody = this.element().getBody()?.getBoundingClientRect()
      const rectBodyContext = elementBodyContext?.getBoundingClientRect()
      const rectControl = this.element().getControl()?.getBoundingClientRect()

      if (
        elementBodyContext
        && rect
        && rectBody
        && rectBodyContext
      ) {
        const center = rect.height / 2
        const shift = rect.top - rectBodyContext.top

        if (
          rectControl
          && this.coordinates().getMaxHeight() === rectBody.height
        ) {
          if (rectControl.top + center < rectBody.top) {
            elementBodyContext.scrollTop += shift
            return
          }

          if (rectControl.bottom - center > rectBody.bottom) {
            elementBodyContext.scrollTop += shift - rectBodyContext.height + rect.height
            return
          }

          elementBodyContext.scrollTop += shift - (rectControl.top - rectBodyContext.top) - (rectControl.height / 2) + center
          return
        }

        elementBodyContext.scrollTop += shift - (rectBodyContext.height / 2) + center
      }
    }
  }

  /**
   * Updates the scroll display status of the element.
   *
   * Обновляет статус отображения скролла у элемента.
   */
  updateBody(): void {
    if (isDomRuntime()) {
      const body = document.body
      const value = body.offsetHeight > window.innerHeight ? 'scroll' : 'none'

      if (body.dataset.scroll !== value) {
        body.dataset.scroll = value
      }
    }
  }

  /**
   * Returns the axis alignment values.
   *
   * Возвращает значения оси выравнивания.
   */
  protected getAxis(): WindowProps['axis'] {
    return this.isOver() ? 'y' : (this.props?.axis ?? 'y')
  }

  /**
   * Returns the margins from the control element.
   *
   * Возвращает отступы от элемента управления.
   * @param axis the axis of alignment of the element/ ось выравнивания элемента
   */
  protected getIndent(axis: string): number {
    return this.getAxis() === axis ? (this.props.indent ?? 4) : 0
  }

  /**
   * Calculation of the position for window alignment.
   *
   * Вычисление места положения для выравнивания окна.
   * @param rectTop high control coordinates/ высокие координаты контрола
   * @param rectBottom lower control coordinates/ нижние координаты контрола
   * @returns calculated over height / вычисленная высота перекрытия
   */
  protected getOverHeight(
    rectTop: number,
    rectBottom: number
  ): number {
    const over = (rectBottom - rectTop) / 2

    if (this.props.overElement) {
      const rect = getElement(this.props.overElement)?.getBoundingClientRect()
      const rectBody = this.element().getBody()?.getBoundingClientRect()

      if (rect && rectBody) {
        const top = rect.top - rectBody.top
        const height = rect.height / 2

        return rectBottom - top - height - over
      }
    }

    const height = this.coordinates().getHeight() / 2

    return rectBottom - over - height
  }

  /**
   * Changes in position along the X coordinate.
   *
   * Изменения положения по координате X.
   * @returns this instance / текущий экземпляр
   */
  protected setX(): this {
    const element = this.element().getMain()

    if (element) {
      const indent = this.getIndent('x')
      const rectRight = this.props.contextmenu ? this.client().getX() : this.coordinates().getRight() + indent
      const rectLeft = this.props.contextmenu ? this.client().getX() : this.coordinates().getLeft() - indent
      const argumentValues: [number, number] = this.getAxis() === 'x'
        ? [rectRight, rectLeft]
        : [rectLeft, rectRight]

      const innerWidth = isDomRuntime() ? window.innerWidth : 0

      this.x = this.calculationInner(
        argumentValues[0],
        argumentValues[1],
        element.offsetWidth,
        innerWidth,
        this.coordinates().getWidth()
      )
    }

    return this
  }

  /**
   * Changes in position along the Y coordinate.
   *
   * Изменения положения по координате Y.
   * @returns this instance / текущий экземпляр
   */
  protected setY(): this {
    const element = this.element().getMain()

    if (element) {
      const indent = this.getIndent('y')
      const rectTop = this.props.contextmenu ? this.client().getY() : this.coordinates().getTop() - indent
      const rectBottom = this.props.contextmenu ? this.client().getY() : this.coordinates().getBottom() + indent
      const innerHeight = isDomRuntime() ? window.innerHeight : 0

      if (this.isOver()) {
        this.y = this.calculationOver(
          this.getOverHeight(rectTop, rectBottom),
          rectTop,
          rectBottom,
          element.offsetHeight,
          innerHeight
        )

        return this
      }

      const argumentValues: [number, number] = this.getAxis() !== 'x'
        ? [rectBottom, rectTop]
        : [rectTop, rectBottom]

      this.y = this.calculationInner(
        argumentValues[0],
        argumentValues[1],
        element.offsetHeight,
        innerHeight,
        this.coordinates().getHeight()
      )
    }

    return this
  }

  /**
   * Calculation of the element's position.
   *
   * Вычисление положения элемента.
   * @param inValue initial values/ начальные значения
   * @param outValue final values/ конечные значения
   * @param length length of the object/ длина объекта
   * @param innerLength length of the indentation/ длина отступа
   * @param maxSize maximum length/ максимальная длина
   */
  protected calculationInner(
    inValue: number,
    outValue: number,
    length: number,
    innerLength: number,
    maxSize: number
  ): number {
    const padding = this.coordinates().getPadding()

    if (inValue + length <= innerLength - padding) {
      return inValue
    }

    if (outValue - length > padding) {
      return outValue - length
    }

    return (innerLength / 2) - (maxSize / 2)
  }

  /**
   * Calculation of the element's position.
   *
   * Вычисление положения над элемента.
   * @param value initial values/ начальные значения
   * @param top high control coordinates/ высокие координаты контрола
   * @param bottom lower control coordinates/ нижние координаты контрола
   * @param length length of the object/ длина объекта
   * @param innerLength length of the indentation/ длина отступа
   */
  protected calculationOver(
    value: number,
    top: number,
    bottom: number,
    length: number,
    innerLength: number
  ): number {
    const padding = this.coordinates().getPadding()

    if (bottom < padding) {
      return bottom
    }

    if (top > innerLength - padding) {
      const data = top - length - padding

      if (data < padding) {
        return padding
      }

      return data
    }

    if (value < padding) {
      return padding
    }

    if (value + length <= innerLength - padding) {
      return value
    }

    return innerLength - length - padding
  }
}
