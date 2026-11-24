import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'
import { TooltipInclude } from '../Tooltip'

import { AnchorEvent } from './AnchorEvent'
import { AnchorHref } from './AnchorHref'
import { AnchorIcon } from './AnchorIcon'
import { AnchorTo } from './AnchorTo'

import type { AriaList } from '../../types/ariaTypes'
import type { AnchorProps } from './props'
import type { AnchorComponents, AnchorEmits, AnchorSlots } from './types'

/** Anchor dependency constructors type / Тип конструкторов зависимостей Anchor */
export type AnchorConstructors = {
  /** Event handler constructor / Конструктор обработчика событий */
  event: typeof AnchorEvent
  /** Href handler constructor / Конструктор обработчика ссылки */
  href: typeof AnchorHref
  /** Icon handler constructor / Конструктор обработчика иконки */
  icon: typeof AnchorIcon
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
  /** Text localization manager constructor / Конструктор менеджера текста */
  text: typeof TextInclude
  /** Scroll handler constructor / Конструктор обработчика прокрутки */
  to: typeof AnchorTo
  /** Tooltip manager constructor / Конструктор менеджера подсказки */
  tooltip: typeof TooltipInclude
}

/**
 * Anchor orchestrator class managing navigation links, smooth scrolling, and clipboard copy feedback.
 *
 * Класс-оркестратор Anchor, управляющий якорными ссылками, плавной прокруткой и копированием в буфер обмена.
 */
export class Anchor extends DesignLogicAbstract<
  HTMLAnchorElement,
  AnchorComponents,
  AnchorEmits,
  AnchorSlots,
  AnchorProps,
  AnchorConstructors
> {
  /** Pending initial focus animation frame ID / Идентификатор ожидающего кадра анимации начального фокуса */
  protected frameId?: number

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AnchorConstructors> = {
    event: {
      item: AnchorEvent,
      parameters: () => [
        this.props,
        () => this.i('href'),
        () => this.i('to'),
        () => this.i('tooltip')
      ]
    },
    href: {
      item: AnchorHref,
      parameters: () => [this.props]
    },
    icon: {
      item: AnchorIcon,
      canCreate: () => AnchorIcon.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('event')
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    to: {
      item: AnchorTo,
      parameters: () => [
        this.props,
        this.element,
        () => this.i('href')
      ]
    },
    tooltip: {
      item: TooltipInclude,
      canCreate: () => Boolean(this.props.isCopy && this.components?.is('tooltip')),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.slots,
        () => ({
          description: this.i('text').copiedClipboard,
          interactive: false
        })
      ]
    }
  }

  /**
   * Navigates to the anchor on mount if the URL hash matches.
   *
   * Переходит к якорю при монтировании, если хэш URL совпадает.
   */
  protected override readonly onMounted = (): void => {
    if (AnchorHref.is(this.props) && location.hash === this.i('href').get()) {
      this.frameId = requestAnimationFrame(this.goIsFocus)
    }
  }

  /**
   * Cancels pending initial focus animation frame on unmount.
   *
   * Отменяет ожидающий кадр анимации начального фокуса при размонтировании.
   */
  protected override readonly onUnmounted = (): void => {
    if (this.frameId !== undefined && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.frameId)
      this.frameId = undefined
    }
  }

  /**
   * ARIA attributes for the visible anchor element.
   *
   * ARIA-атрибуты для видимого элемента якоря.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    if (this.props.isCopy) {
      return AriaStaticInclude.role('button')
    }

    return AriaStaticInclude.current('page')
  }

  /**
   * Returns attributes for the main visible anchor element.
   *
   * Возвращает атрибуты для главного видимого элемента якоря.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get binds(): ConstrBind {
    const properties: ConstrBind = {
      ref: this.element,
      key: 'main',
      name: this.props.name,
      onClick: this.onClick,
      tabindex: 0,
      ...this.aria
    }

    if (this.props.isCopy) {
      return {
        ...properties,
        onKeydown: this.onKeydown
      }
    }

    return {
      ...properties,
      href: this.i('href').get()
    }
  }

  /**
   * Returns attributes for the hidden anchor element.
   *
   * Возвращает атрибуты для скрытого элемента якоря.
   * @returns hidden element binding attributes / атрибуты привязки скрытого элемента
   */
  get bindsHide(): ConstrBind {
    return {
      ref: this.element,
      key: 'main-hide',
      name: this.props.name,
      ...AriaStaticInclude.hidden()
    }
  }

  /**
   * Checks whether the anchor should render in hidden mode.
   *
   * Проверяет, должен ли якорь отображаться в скрытом режиме.
   * @returns true if anchor is hidden / true, если якорь скрыт
   */
  isHide(): boolean {
    return Boolean(
      this.props.hide
      || (
        !this.callInstance('label', item => item.is, false)
        && !this.props.isCopy
      )
    )
  }

  /**
   * Checks whether the anchor has a valid href name.
   *
   * Проверяет, задано ли корректное имя ссылки якоря.
   * @returns true if anchor name is configured / true, если имя якоря задано
   */
  isHref(): boolean {
    return AnchorHref.is(this.props)
  }

  /**
   * Scrolls to the anchor element.
   *
   * Прокручивает страницу к элементу якоря.
   */
  readonly go = (): void => {
    this.i('to').go()
  }

  /**
   * Go if focus on anchor matches current location hash.
   *
   * Перейти, если текущий хэш адреса совпадает с якорем.
   */
  protected readonly goIsFocus = (): void => {
    this.frameId = undefined

    if (location.hash === this.i('href').get()) {
      this.i('to').go()
    }
  }

  /**
   * Delegates click events lazily to AnchorEvent.
   *
   * Лениво делегирует события клика в AnchorEvent.
   * @param event mouse click event / событие клика мыши
   */
  protected readonly onClick = (event: MouseEvent): void => {
    this.i('event').onClick(event)
  }

  /**
   * Delegates keydown events lazily to AnchorEvent.
   *
   * Лениво делегирует события клавиатуры в AnchorEvent.
   * @param event keyboard event / событие клавиатуры
   */
  protected readonly onKeydown = (event: KeyboardEvent): void => {
    this.i('event').onKeydown(event)
  }
}
