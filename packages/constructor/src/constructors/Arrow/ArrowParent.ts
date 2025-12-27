import { computed, type Ref, watch } from 'vue'
import { ArrowElement } from './ArrowElement.ts'

/**
 * Class for working with the parent element.
 *
 * Класс для работы с родительским элементом.
 */
export class ArrowParent {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param elementItem arrow element/ элемент стрелки
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly elementItem: ArrowElement
  ) {
    watch(element, this.make)
  }

  /** Checks if the parent element has a border/ Проверяет, есть ли у родительского элемента граница */
  readonly isBorder = computed<boolean>(
    () => this.borderWidth.value !== '0px'
  )

  /** Checks if the parent element has a box shadow/ Проверяет, есть ли у родительского элемента тень */
  readonly isBoxShadow = computed<boolean>(
    () => this.boxShadow.value !== 'none'
  )

  /** Parent element/ Родительский элемент **/
  readonly elementParent = computed<HTMLElement | undefined>(() => {
    return this.element.value?.parentElement as HTMLElement | undefined
  })

  /** Background color of the parent element/ Цвет фона родительского элемента **/
  readonly background = computed<string>(
    () => this.getStyles()?.backgroundColor ?? 'transparent'
  )

  /** Border color of the parent element/ Цвет границы родительского элемента **/
  readonly borderWidth = computed<string>(
    () => this.getStyles()?.borderWidth ?? '0px'
  )

  /** Border color of the parent element/ Цвет границы родительского элемента **/
  readonly borderColor = computed<string>(
    () => this.getStyles()?.borderColor ?? 'transparent'
  )

  /** Border radius of the parent element/ Радиус границы родительского элемента **/
  readonly borderRadius = computed<string>(
    () => this.getStyles()?.borderRadius ?? '0px'
  )

  /** Box shadow of the parent element/ Тень родительского элемента **/
  readonly boxShadow = computed<string>(() => {
    const boxShadow = this.getStyles()?.boxShadow

    if (boxShadow && boxShadow !== 'none') {
      return boxShadow.replace(/^(.*?)( [^ ]+ [^ ]+ [^ ]+)( [^ ]+)$/, '$2 $1')
    }

    return 'none'
  })

  /**
   * Get computed styles of the parent element.
   *
   * Получить вычисленные стили родительского элемента.
   */
  protected getStyles() {
    const parent = this.elementParent.value

    if (parent) {
      return getComputedStyle(parent)
    }

    return undefined
  }

  /**
   * Method for creating styles for the parent element.
   *
   * Метод для создания стилей для родительского элемента.
   */
  protected readonly make = (): void => {
    requestAnimationFrame(() => {
      if (this.elementParent.value) {
        const elementParent = this.elementParent.value

        elementParent.classList.add(`${this.className}__parent`)
        elementParent.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight()))

        if (this.isBorder.value) {
          elementParent.dataset.arrow = 'border'
        }

        if (this.isBoxShadow.value) {
          elementParent.dataset.arrowShadow = 'box-shadow'
          elementParent.style.setProperty(`--${this.className}-sys-boxShadow`, this.boxShadow.value)
        }
      }
    })
  }
}
