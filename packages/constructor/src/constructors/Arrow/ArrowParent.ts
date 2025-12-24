import { computed, type Ref } from 'vue'

/**
 * Class for working with the parent element.
 *
 * Класс для работы с родительским элементом.
 */
export class ArrowParent {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
  }

  /** Parent element/ Родительский элемент **/
  readonly elementParent = computed<HTMLElement | undefined>(() => {
    return this.element.value?.parentElement as HTMLElement | undefined
  })

  /** Background color of the parent element/ Цвет фона родительского элемента **/
  readonly background = computed<string>(
    () => this.getStyles()?.backgroundColor ?? 'transparent'
  )

  /** Border radius of the parent element/ Радиус границы родительского элемента **/
  readonly borderRadius = computed<string>(
    () => this.getStyles()?.borderRadius ?? '0px'
  )

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
}
