import { onMounted, ref, type Ref, watch } from 'vue'
import { toNumber } from '@dxtmisha/functional'

import { ArrowElement } from './ArrowElement'

/**
 * Class for working with the parent element.
 * It manages style tracking and coordinate synchronization with the element that contains the arrow.
 *
 * Класс для работы с родительским элементом.
 * Управляет отслеживанием стилей и синхронизацией координат с элементом, в котором находится стрелка.
 */
export class ArrowParent {
  /** Computed styles of the parent element / Вычисленные стили родительского элемента */
  protected readonly styles = ref<CSSStyleDeclaration>()
  protected readonly borderColorParent = ref<string>()

  /**
   * Constructor
   * @param element input element / элемент ввода
   * @param className class name / название класса
   * @param elementItem arrow element / элемент стрелки
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly elementItem: ArrowElement
  ) {
    onMounted(() => {
      watch(element, this.make, { immediate: true })
    })
  }

  /** Parent element / Родительский элемент */
  get elementParent(): HTMLElement | undefined {
    return this.element.value?.parentElement as HTMLElement | undefined
  }

  /** Background color of the parent element / Цвет фона родительского элемента */
  get background(): string {
    return this.styles.value?.backgroundColor ?? 'transparent'
  }

  /** Border width of the parent element / Ширина границы родительского элемента */
  get borderWidth(): string {
    return this.styles.value?.borderWidth ?? '0px'
  }

  /** Border color of the parent element / Цвет границы родительского элемента */
  get borderColor(): string {
    return this.borderColorParent.value ?? 'transparent'
  }

  /** Border radius of the parent element / Радиус границы родительского элемента */
  get borderRadius(): string {
    return this.styles.value?.borderRadius ?? '0px'
  }

  /** Get border radius as number / Получить радиус границы в виде числа */
  get borderRadiusNumber(): number {
    return toNumber(this.borderRadius)
  }

  /**
   * Checks if the parent element has a border.
   *
   * Проверяет, есть ли у родительского элемента граница.
   * @returns border presence status / статус наличия границы
   */
  isBorder(): boolean {
    return this.borderWidth !== '0px'
  }

  /**
   * Method for creating styles for the parent element.
   *
   * Метод для создания стилей для родительского элемента.
   */
  protected readonly make = (): void => {
    requestAnimationFrame(() => {
      const elementParent = this.elementParent

      if (elementParent) {
        this.styles.value = getComputedStyle(elementParent)
        this.borderColorParent.value = this.styles.value.borderColor

        elementParent.classList.add(`${this.className}__parent`)
        elementParent.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.height))

        if (this.isBorder()) {
          elementParent.dataset.arrow = 'border'
        }
      }
    })
  }
}
