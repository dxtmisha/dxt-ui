// ai-none

import { ref, type Ref, watch } from 'vue'
import {
  type DesignName,
  DesignLifecycleAbstract,
  toNumber
} from '@dxtmisha/functional'

import { ArrowElement } from './ArrowElement'

/**
 * Class for working with the parent element.
 * It manages style tracking and coordinate synchronization with the element that contains the arrow.
 *
 * Класс для работы с родительским элементом.
 * Управляет отслеживанием стилей и синхронизацией координат с элементом, в котором находится стрелка.
 */
export class ArrowParent extends DesignLifecycleAbstract {
  /** Computed styles of the parent element / Вычисленные стили родительского элемента */
  protected readonly styles = ref<CSSStyleDeclaration>()

  /** Border color of the parent element / Цвет границы родительского элемента */
  protected readonly borderColorParent = ref<string>()

  /** Saved reference to the modified parent element for cleanup / Сохранённая ссылка на модифицированный родительский элемент для очистки */
  protected currentParent?: HTMLElement

  /** Pending animation frame ID / Идентификатор ожидающего кадра анимации */
  protected frameId?: number

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param elementItem function returning arrow element / функция, возвращающая элемент стрелки
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly elementItem: () => ArrowElement
  ) {
    super()
  }

  /**
   * Hook executed when component mounts.
   *
   * Хук, выполняемый при монтировании компонента.
   */
  override readonly onMounted = (): void => {
    this.make()
    watch(this.element, this.make)
  }

  /**
   * Hook executed when component unmounts.
   *
   * Хук, выполняемый при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.unset()
  }

  /** Parent element / Родительский элемент */
  get elementParent(): HTMLElement | undefined {
    return (this.element.value?.parentElement as HTMLElement | undefined) ?? this.currentParent
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
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
    }

    this.frameId = requestAnimationFrame(() => {
      this.frameId = undefined
      const nextParent = this.element.value?.parentElement as HTMLElement | undefined

      if (this.currentParent && this.currentParent !== nextParent) {
        this.unset()
      }

      if (nextParent) {
        this.currentParent = nextParent
        this.styles.value = getComputedStyle(nextParent)
        this.borderColorParent.value = this.styles.value.borderColor

        nextParent.classList.add(this.naming.getSubClass('parent'))
        nextParent.style.setProperty(this.naming.getStyle('height'), String(this.elementItem().height))

        if (this.isBorder()) {
          nextParent.dataset.arrow = 'border'
        }
      }
    })
  }

  /**
   * Unset styles for the parent element.
   *
   * Сброс стилей для родительского элемента.
   */
  protected readonly unset = (): void => {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }

    const elementParent = this.currentParent ?? (this.element.value?.parentElement as HTMLElement | undefined)

    if (elementParent) {
      elementParent.classList.remove(this.naming.getSubClass('parent'))
      elementParent.style.removeProperty(this.naming.getStyle('height'))
      delete elementParent.dataset.arrow
    }

    this.currentParent = undefined
    this.styles.value = undefined
    this.borderColorParent.value = undefined
  }
}
