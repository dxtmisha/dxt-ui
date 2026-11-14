import { type Ref } from 'vue'
import { getElementId, isDomRuntime, type DesignName } from '@dxtmisha/functional'

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
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входные свойства
   * @param element window element / элемент окна
   * @param naming component naming helper / помощник именования компонента
   * @param elementContext substrate element / элемент подложка
   */
  constructor(
    protected readonly props: Readonly<MotionTransformProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly elementContext?: Ref<HTMLDivElement | undefined>
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
   * @returns identifier selector string / строка селектора идентификатора
   */
  get idSelector(): string {
    const id = getElementId(this.element.value)
    return `#${isDomRuntime() ? CSS.escape(id) : id}`
  }

  /**
   * Returns the title element.
   *
   * Возвращает элемент заголовка.
   * @returns header HTMLDivElement or undefined / HTMLDivElement заголовка или undefined
   */
  get elementHead(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.naming.getSubClass('head')}`) || undefined
  }

  /**
   * Returns the body element.
   *
   * Возвращает элемент тела.
   * @returns body HTMLDivElement or undefined / HTMLDivElement тела или undefined
   */
  get elementBody(): HTMLDivElement | undefined {
    return this.getElement()?.querySelector<HTMLDivElement>(`.${this.naming.getSubClass('body')}`) || undefined
  }

  /**
   * Returns the sizes of elements.
   *
   * Возвращает размеры элементов.
   * @returns DOMRect or undefined / DOMRect или undefined
   */
  get rect(): DOMRect | undefined {
    return this.getElementContext()?.getBoundingClientRect()
  }

  /**
   * Checks if click interaction is allowed on the target element.
   *
   * Проверяет, разрешено ли взаимодействие по клику на целевом элементе.
   * @param target target element to inspect / целевой элемент для проверки
   * @returns true if click is permitted / true, если клик разрешен
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
   * @returns true if click is globally permitted / true, если глобальный клик разрешен
   */
  isClickGlobal(target: HTMLElement): boolean {
    return !target.closest<HTMLElement>(`.${this.classes.noneGlobal}`)
  }

  /**
   * Checks if the event target corresponds to close triggers.
   *
   * Проверяет, соответствует ли цель события триггерам закрытия.
   * @param target target element to inspect / целевой элемент для проверки
   * @returns true if target is a close trigger / true, если цель является триггером закрытия
   */
  isClose(target: HTMLElement): boolean {
    return Boolean(target.closest<HTMLElement>(`${this.idSelector} .${this.classes.close}`))
  }

  /**
   * Checks if the target is located outside the body element.
   *
   * Проверяет, находится ли цель за пределами элемента тела.
   * @param target target element to inspect / целевой элемент для проверки
   * @returns true if target is outside / true, если цель находится снаружи
   */
  isOutside(target: HTMLElement): boolean {
    return !target.closest(this.idSelector)
  }

  /**
   * Checks if the target matches any elements configured to be ignored.
   *
   * Проверяет, соответствует ли цель элементам, настроенным на игнорирование.
   * @param target target element to inspect / целевой элемент для проверки
   * @returns true if target is ignored / true, если цель игнорируется
   */
  isIgnore(target: HTMLElement): boolean {
    return !(this.props.ignore && target.closest(getElementId(this.props.ignore, ' ')))
      && !(this.props.ignoreSelector && target.closest(this.props.ignoreSelector))
  }

  /**
   * Checks if slide animations are enabled for the element.
   *
   * Проверяет, включена ли анимация смены слайдов для элемента.
   * @returns true if slide animation is enabled / true, если анимация включена
   */
  isAnimation(): boolean {
    return Boolean(
      this.elementContext?.value
      && this.props.animationShow
    )
  }

  /**
   * Checks if the component is running in window modal mode.
   *
   * Проверяет, работает ли компонент в режиме модального окна.
   * @returns true if window mode is active / true, если режим окна активен
   */
  isWindow(): boolean {
    return Boolean(
      this.element.value
      && isDomRuntime()
      && getComputedStyle(this.element.value)
        .getPropertyValue(__MOTION_TRANSFORM_TYPE_BODY_NAME) === '"--WINDOW--"'
    )
  }

  /**
   * Checks if section mode is active.
   *
   * Проверяет, активен ли режим секции.
   * @returns true if section mode is enabled / true, если режим секции включен
   */
  isSection(): boolean {
    return Boolean(this.props.section)
  }

  /**
   * Returns the main window element.
   *
   * Возвращает главный элемент окна.
   * @returns window HTMLDivElement or undefined / HTMLDivElement окна или undefined
   */
  getElement(): HTMLDivElement | undefined {
    return this.element.value
  }

  /**
   * Returns the context element.
   *
   * Возвращает элемент контекста.
   * @returns context HTMLDivElement or undefined / HTMLDivElement контекста или undefined
   */
  getElementContext(): HTMLDivElement | undefined {
    return this.elementContext?.value
  }

  /**
   * Generates a classes map based on a base class name.
   *
   * Генерирует карту классов на основе базового имени класса.
   * @param className base class name / имя класса
   * @returns map of motion transform classes / карта классов трансформации
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
   * @returns map of motion transform classes / карта классов трансформации
   */
  static getClassesListByDesign(design: string): MotionTransformClassList {
    return this.getClassesList(`${design}-motionTransform`)
  }
}
