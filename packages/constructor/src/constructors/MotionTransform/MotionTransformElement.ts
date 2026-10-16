// ai-none

import { type Ref } from 'vue'
import { getElementId, type DesignName } from '@dxtmisha/functional'

import { __MOTION_TRANSFORM_TYPE_BODY_NAME, type MotionTransformClassList, type MotionTransformStyle } from './basicTypes'
import type { MotionTransformProps } from './props'

/**
 * Class for working with elements and classes.
 *
 * Класс для работы с элементами и классами.
 */
export class MotionTransformElement {
  /** Base unique identifier string / Базовая строка уникального идентификатора */
  readonly id = getElementId()
  /** Control element ID string / Строка идентификатора элемента управления */
  readonly idControl = `${this.id}-control`
  /** Body element ID string / Строка идентификатора элемента тела */
  readonly idBody = `${this.id}-body`

  /** List of design classes / Список классов дизайна */
  readonly classes: MotionTransformClassList
  /** CSS custom properties keys map / Карта ключей пользовательских CSS-свойств */
  readonly style: MotionTransformStyle

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param element window element / элемент окна
   * @param elementContext substrate element / элемент подложка
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly props: MotionTransformProps,
    readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly elementContext: Ref<HTMLDivElement | undefined>,
    protected readonly naming: DesignName
  ) {
    this.classes = MotionTransformElement.getClassesList(naming.getName())
    this.style = {
      top: this.naming.getStyle('top'),
      left: this.naming.getStyle('left'),
      height: this.naming.getStyle('height'),
      scale: this.naming.getStyle('scale'),

      contextWidth: this.naming.getStyle('context-width'),
      contextHeight: this.naming.getStyle('context-height'),

      headWidth: this.naming.getStyle('head-width'),
      headHeight: this.naming.getStyle('head-height'),
      headScale: this.naming.getStyle('head-scale'),

      bodyHeight: this.naming.getStyle('body-height')
    }
  }

  /**
   * Returns the identifier selector.
   *
   * Возвращает селектор идентификатора.
   */
  get idSelector(): string {
    return `#${getElementId(this.element.value)}`
  }

  /**
   * Returns the title element.
   *
   * Возвращает элемент заголовка.
   */
  get elementHead(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.naming.getSubClass('head')}`) || undefined
  }

  /**
   * Returns the body element.
   *
   * Возвращает элемент тела.
   */
  get elementBody(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.naming.getSubClass('body')}`) || undefined
  }

  /**
   * Returns the sizes of elements.
   *
   * Возвращает размеры элементов.
   */
  get rect(): DOMRect | undefined {
    return this.getElementContext()?.getBoundingClientRect()
  }

  /**
   * Checks if click interaction is allowed on the target element.
   *
   * Проверяет, разрешено ли взаимодействие по клику на целевом элементе.
   * @param target target element to inspect / целевой элемент для проверки
   */
  isClick(target: HTMLElement): boolean {
    return Boolean(
      target.closest<HTMLElement>(`.${this.classes.click}`)
      || !target.closest<HTMLElement>(`.${this.classes.none}`)
    )
  }

  /**
   * Checks if click is allowed in the global page area.
   *
   * Проверяет, разрешено ли событие клика в глобальной области страницы.
   * @param target target element to inspect / целевой элемент для проверки
   */
  isClickGlobal(target: HTMLElement): boolean {
    return !target.closest<HTMLElement>(`.${this.classes.noneGlobal}`)
  }

  /**
   * Checks if the event target corresponds to close triggers.
   *
   * Проверяет, соответствует ли цель события триггерам закрытия.
   * @param target target element to inspect / целевой элемент для проверки
   */
  isClose(target: HTMLElement): boolean {
    return Boolean(target.closest<HTMLElement>(`${this.idSelector} .${this.classes.close}`))
  }

  /**
   * Checks if the target is located outside the body element.
   *
   * Проверяет, находится ли цель за пределами элемента тела.
   * @param target target element to inspect / целевой элемент для проверки
   */
  isOutside(target: HTMLElement): boolean {
    return !target.closest(this.idSelector)
  }

  /**
   * Checks if the target matches any elements configured to be ignored.
   *
   * Проверяет, соответствует ли цель элементам, настроенным на игнорирование.
   * @param target target element to inspect / целевой элемент для проверки
   */
  isIgnore(target: HTMLElement): boolean {
    return !(this.props.ignore && target.closest(getElementId(this.props.ignore, ' ')))
      && !(this.props.ignoreSelector && target.closest(this.props.ignoreSelector))
  }

  /**
   * Checks if slide animations are enabled for the element.
   *
   * Проверяет, включена ли анимация смены слайдов для элемента.
   */
  isAnimation(): boolean {
    return Boolean(
      this.elementContext.value
      && this.props.animationShow
    )
  }

  /**
   * Checks if the component is running in window modal mode.
   *
   * Проверяет, работает ли компонент в режиме модального окна.
   */
  isWindow(): boolean {
    return Boolean(
      this.element.value
      && getComputedStyle(this.element.value)
        .getPropertyValue(__MOTION_TRANSFORM_TYPE_BODY_NAME) === '"--WINDOW--"'
    )
  }

  /**
   * Checks if section mode is active.
   *
   * Проверяет, активен ли режим секции.
   */
  isSection(): boolean {
    return Boolean(this.props.section)
  }

  /**
   * Returns the main window element.
   *
   * Возвращает главный элемент окна.
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
   * Generates a classes map based on a base class name.
   *
   * Генерирует карту классов на основе базового имени класса.
   * @param className base class name / имя класса
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
   * Generates a classes map using a design system system token.
   *
   * Генерирует карту классов по системному префиксу дизайна.
   * @param design design prefix / префикс дизайна
   */
  static getClassesListByDesign(design: string) {
    return this.getClassesList(`${design}-motionTransform`)
  }
}
