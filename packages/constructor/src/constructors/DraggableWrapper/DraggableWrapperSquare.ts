import { ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

import type { DraggableWrapperProps } from './props'

/**
 * Helper class for managing the placeholder spacer (square) element.
 *
 * Вспомогательный класс для управления элементом-заполнителем (square).
 */
export class DraggableWrapperSquare {
  /** Target square placeholder element / Целевой элемент-заполнитель (square) */
  readonly squareElement = ref<HTMLElement>()

  /** Indicator showing if placeholder is placed before target / Индикатор, показывающий, помещен ли заполнитель перед целью */
  protected readonly before = ref<boolean>()

  /** Cached CSS style declarations / Кэшированные объявления стилей CSS */
  protected cached: Partial<CSSStyleDeclaration> = {}
  /** Cached CSS classes array / Кэшированный массив классов CSS */
  protected cachedClasses: string[] = []

  /** Custom properties names map / Карта имен пользовательских свойств */
  protected readonly property: {
    /** CSS property for square width / Свойство CSS для ширины заполнителя */
    width: string
    /** CSS property for square height / Свойство CSS для высоты заполнителя */
    height: string
    /** CSS property for square margin-top / Свойство CSS для внешнего отступа сверху */
    marginTop: string
    /** CSS property for square margin-right / Свойство CSS для внешнего отступа справа */
    marginRight: string
    /** CSS property for square margin-bottom / Свойство CSS для внешнего отступа снизу */
    marginBottom: string
    /** CSS property for square margin-left / Свойство CSS для внешнего отступа слева */
    marginLeft: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param classes classes helper instance / экземпляр помощника по классам
   */
  constructor(
    protected readonly props: DraggableWrapperProps,
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

  /**
   * Checks if the square placeholder is currently shown.
   *
   * Проверяет, отображается ли в данный момент элемент-заполнитель.
   * @returns check result / результат проверки
   */
  isShow(): boolean {
    return Boolean(
      this.squareElement.value?.classList.contains(this.classes.list.show)
    )
  }

  /**
   * Checks if the placeholder is placed before the target element.
   *
   * Проверяет, помещен ли элемент-заполнитель перед целевым элементом.
   * @returns check result / результат проверки
   */
  isBefore(): boolean {
    return this.before.value ?? false
  }

  /**
   * Returns the square placeholder element.
   *
   * Возвращает элемент-заполнитель.
   * @returns square placeholder element or undefined / элемент-заполнитель или undefined
   */
  getElement(): HTMLElement | undefined {
    return this.squareElement.value
  }

  /**
   * Prepares and inserts the placeholder spacer before target element.
   *
   * Подготавливает и вставляет элемент-заполнитель перед целевым элементом.
   * @param item active draggable element / активный перетаскиваемый элемент
   * @param reset force cache styles reset status / принудительно сбросить состояние кэшированных стилей
   */
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

    this.updateClasses(item)
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

  /**
   * Hides the placeholder and resets its classes and styles.
   *
   * Скрывает элемент-заполнитель и сбрасывает его классы и стили.
   */
  reset(): void {
    const squareElement = this.squareElement.value

    if (squareElement) {
      this.classes.setBlockSelection(false)
      squareElement.classList.remove(this.classes.list.show)

      this.resetClasses()
      this.resetStyles()

      const element = this.classes.getElement()

      if (element) {
        element.insertBefore(squareElement, null)
      }
    }
  }

  /**
   * Calculates check if placeholder should be inserted before the item.
   *
   * Вычисляет проверку, нужно ли вставлять элемент-заполнитель перед элементом.
   * @param item target element / целевой элемент
   * @returns check result / результат проверки
   */
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

  /**
   * Retrieves classes list of the target element.
   *
   * Получает список классов целевого элемента.
   * @param item HTML element / HTML-элемент
   * @returns classes array / массив классов
   */
  protected getItemClasses(item: HTMLElement): string[] {
    const classes = this.props.classesSquare

    if (classes) {
      if (
        Array.isArray(classes)
        && classes.length > 0
      ) {
        return classes
      } else if (typeof classes === 'string') {
        return classes.split(' ')
      }
    }

    return [...item.classList]
  }

  /**
   * Filters component internal/identifier classes from item classes list.
   *
   * Фильтрует внутренние классы и идентификаторы компонента из списка классов элемента.
   * @param classes input classes array / массив входящих классов
   * @returns filtered classes array / массив отфильтрованных классов
   */
  protected filterItemClasses(classes: string[]): string[] {
    const name = this.classes.getName()
    const id = this.classes.getId()

    return classes.filter((classItem) => {
      return !classItem.startsWith(name)
        && !classItem.startsWith(id)
    })
  }

  /**
   * Updates CSS classes on the square placeholder.
   *
   * Обновляет классы CSS на элементе-заполнителе.
   * @param item target element to copy classes from / целевой элемент для копирования классов
   */
  protected updateClasses(item: HTMLElement): void {
    const squareElement = this.squareElement.value

    this.resetClasses()

    if (squareElement) {
      this.cachedClasses = this.filterItemClasses(this.getItemClasses(item))
      squareElement.classList.add(...this.cachedClasses)
    }
  }

  /**
   * Updates CSS variables and dimensions on the square placeholder.
   *
   * Обновляет переменные CSS и размеры на элементе-заполнителе.
   * @param style CSS declaration to copy properties from / объявление CSS для копирования свойств
   */
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

  /**
   * Caches styles declaration properties.
   *
   * Кэширует свойства объявления стилей.
   * @param style CSS declaration properties / свойства объявления CSS
   */
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

  /**
   * Resets and cleans all applied classes.
   *
   * Сбрасывает и очищает все примененные классы.
   */
  protected resetClasses(): void {
    const squareElement = this.squareElement.value

    if (
      squareElement
      && this.cachedClasses.length > 0
    ) {
      squareElement.classList.remove(...this.cachedClasses)
      this.cachedClasses = []
    }
  }

  /**
   * Resets and removes CSS style property variables.
   *
   * Сбрасывает и удаляет переменные свойств стилей CSS.
   */
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
}
