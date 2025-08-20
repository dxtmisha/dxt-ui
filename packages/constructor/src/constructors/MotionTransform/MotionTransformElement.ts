import { computed, type Ref } from 'vue'
import { getElementId } from '@dxt-ui/functional'

import type { MotionTransformClassList, MotionTransformStyle } from './basicTypes'
import type { MotionTransformProps } from './props'

/**
 * Class for working with elements and classes.
 *
 * Класс для работы с элементами и классами.
 */
export class MotionTransformElement {
  readonly classes: MotionTransformClassList
  readonly style: MotionTransformStyle

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element window element/ элемент окна
   * @param elementContext substrate element/ элемент подложка
   * @param className class name/ название класса
   */
  constructor(
    protected readonly props: MotionTransformProps,
    readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly elementContext: Ref<HTMLDivElement | undefined>,
    protected readonly className: string
  ) {
    this.classes = MotionTransformElement.getClassesList(className)

    this.style = {
      top: `--${this.className}-sys-top`,
      left: `--${this.className}-sys-left`,
      height: `--${this.className}-sys-height`,
      scale: `--${this.className}-sys-scale`,

      contextWidth: `--${this.className}-sys-context-width`,
      contextHeight: `--${this.className}-sys-context-height`,

      headWidth: `--${this.className}-sys-head-width`,
      headHeight: `--${this.className}-sys-head-height`,
      headScale: `--${this.className}-sys-head-scale`,

      bodyHeight: `--${this.className}-sys-body-height`
    }
  }

  /** Checks if the element exists/ Проверяет, есть ли элемент */
  readonly is = computed<boolean>(() => Boolean(this.element.value))

  /**
   * Checks if the click event is prohibited.
   *
   * Проверяет, запрещено ли событие клика.
   * @param target selected element/ выбранный элемент
   */
  isClick(target: HTMLElement): boolean {
    return Boolean(
      target.closest<HTMLElement>(`.${this.classes.click}`)
      || !target.closest<HTMLElement>(`.${this.classes.none}`)
    )
  }

  /**
   * Checks if the click event is prohibited in the global area.
   *
   * Проверяет, запрещено ли событие клика в глобальной области.
   * @param target selected element/ выбранный элемент
   */
  isClickGlobal(target: HTMLElement): boolean {
    return !target.closest<HTMLElement>(`.${this.classes.noneGlobal}`)
  }

  /**
   * Checks if the window needs to be closed on click.
   *
   * Проверяет, нужно ли закрыть окно при клике.
   * @param target selected element/ выбранный элемент
   */
  isClose(target: HTMLElement): boolean {
    return Boolean(target.closest<HTMLElement>(`${this.getId()} .${this.classes.close}`))
  }

  /**
   * Checks if the element is outside the body.
   *
   * Проверяет, является ли элемент за предел тела.
   * @param target selected element/ выбранный элемент
   */
  isOutside(target: HTMLElement): boolean {
    return !target.closest(this.getId())
  }

  /**
   * Checks if the element needs to be ignored.
   *
   * Проверяет, нужно ли игнорировать элемент.
   * @param target selected element/ выбранный элемент
   */
  isIgnore(target: HTMLElement): boolean {
    return !(this.props.ignore && target.closest(getElementId(this.props.ignore, '')))
      && !(this.props.ignoreSelector && target.closest(this.props.ignoreSelector))
  }

  /**
   * Is the animation for slide changes enabled.
   *
   * Включено ли анимация на изменения слайда.
   */
  isAnimation(): boolean {
    return Boolean(
      this.elementContext.value
      && this.props.animationShow
    )
  }

  /**
   * Is window mode enabled.
   *
   * Включен ли режим окна.
   */
  isWindow(): boolean {
    return Boolean(
      this.element.value
      && getComputedStyle(this.element.value).content === '"--WINDOW--"'
    )
  }

  /**
   * Checks whether the title needs to be left.
   *
   * Проверяет, надо ли оставить заголовок.
   */
  isSection(): boolean {
    return Boolean(this.props.section)
  }

  /**
   * Returns the main element.
   *
   * Возвращает главного элемента.
   */
  getElement(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the context element.
   *
   * Возвращает элемент контекста.
   */
  getElementContext(): HTMLDivElement | undefined {
    return this.elementContext.value
  }

  /**
   * Returns the title element.
   *
   * Возвращает элемент заголовка.
   */
  getElementHead(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.className}__head`) || undefined
  }

  /**
   * Returns the body element.
   *
   * Возвращает элемент тела.
   */
  getElementBody(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.className}__body`) || undefined
  }

  /**
   * Returns the identifier.
   *
   * Возвращает идентификатор.
   */
  getId(): string {
    return `#${getElementId(this.element.value)}`
  }

  /**
   * Returns the sizes of elements.
   *
   * Возвращает размеры элементов.
   */
  getRect(): DOMRect | undefined {
    return this.getElementContext()?.getBoundingClientRect()
  }

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   */
  static getClassesList(className: string): MotionTransformClassList {
    return {
      show: `${className}--show`,
      open: `${className}--open`,
      window: `${className}--window`,

      click: `${className}--click`,
      close: `${className}--close`,
      none: `${className}--none`,
      noneGlobal: `${className}--noneGlobal`
    }
  }

  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(design: string) {
    return this.getClassesList(`${design}-motionTransform`)
  }
}
