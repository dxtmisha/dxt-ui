import { mergeProps } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract,
  getBind,
  isFilled,
  isNumber
} from '@dxtmisha/functional'

import { ActionsInclude } from '../Actions'
import { AlertLinkInclude } from '../AlertLink'
import { ButtonInclude } from '../Button'
import { IconTrailingInclude } from '../Icon'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { AlertEvent } from './AlertEvent'
import { AlertHide } from './AlertHide'

import type { AriaList } from '../../types/ariaTypes'
import type { AlertProps } from './props'
import type { AlertComponents, AlertEmits, AlertSlots } from './types'

/** Alert dependency constructors type / Тип конструкторов зависимостей Alert */
export type AlertConstructors = {
  /** Actions manager constructor / Конструктор менеджера действий */
  actions: typeof ActionsInclude
  /** Alert events manager constructor / Конструктор менеджера событий Alert */
  alertEvent: typeof AlertEvent
  /** Trailing button manager constructor / Конструктор менеджера кнопки */
  button: typeof ButtonInclude
  /** Close button manager constructor / Конструктор менеджера кнопки закрытия */
  buttonClose: typeof ButtonInclude
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Click event manager constructor / Конструктор менеджера событий клика */
  event: typeof EventClickInclude
  /** Hidden state manager constructor / Конструктор менеджера скрытого состояния */
  hide: typeof AlertHide
  /** Icon manager constructor / Конструктор менеджера иконок */
  icon: typeof IconTrailingInclude
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
  /** Link manager constructor / Конструктор менеджера ссылок */
  link: typeof AlertLinkInclude
  /** Text manager constructor / Конструктор менеджера текста */
  text: typeof TextInclude
}

/**
 * Alert class for managing the business logic of the Alert component.
 *
 * Класс Alert для управления бизнес-логикой компонента Alert.
 */
export class Alert extends DesignLogicAbstract<
  HTMLDivElement,
  AlertComponents,
  AlertEmits,
  AlertSlots,
  AlertProps,
  AlertConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AlertConstructors> = {
    actions: {
      item: ActionsInclude,
      canCreate: () => Boolean(
        !this.props.actionsHide
        && (
          isFilled(this.props.actionsList)
          || isFilled(this.props.actionsSecondary)
          || isFilled(this.props.actionsAttrs?.list)
          || isFilled(this.props.actionsAttrs?.listSecondary)
        )
      ),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        this.emits
      ]
    },
    alertEvent: {
      item: AlertEvent,
      canCreate: () => Boolean(this.props.closeButton) || this.callInstance('hide', item => item.isHide, false),
      parameters: () => [
        () => this.i('hide'),
        this.emits
      ]
    },
    button: {
      item: ButtonInclude,
      canCreate: () => isFilled(this.props.button) || isNumber(this.props.button),
      parameters: () => [
        undefined,
        this.naming,
        this.components,
        () => {
          if (isFilled(this.props.button) || isNumber(this.props.button)) {
            const bind = getBind(this.props.button, undefined, 'label', true)

            if (isFilled(bind)) {
              return mergeProps(
                { onClick: this.i('event').onClick },
                bind
              )
            }
          }

          return {}
        }
      ]
    },
    buttonClose: {
      item: ButtonInclude,
      canCreate: () => Boolean(this.props.closeButton),
      parameters: () => [
        undefined,
        this.naming,
        this.components,
        () => (
          this.props.closeButton
            ? {
                icon: this.props.iconClose,
                class: this.naming.getSubClass('buttonClose'),
                onClick: this.i('alertEvent').onClose,
                ...AriaStaticInclude.label(this.i('text').close)
              }
            : {}
        ),
        'buttonClose'
      ]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    hide: {
      item: AlertHide,
      canCreate: () => Boolean(this.props.closeButton),
      parameters: () => [
        this.naming
      ]
    },
    icon: {
      item: IconTrailingInclude,
      canCreate: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
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
    link: {
      item: AlertLinkInclude,
      canCreate: () => AlertLinkInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.emits
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [
        this.props
      ]
    }
  }

  /**
   * Returns ARIA attributes for the alert element.
   *
   * Возвращает ARIA-атрибуты для элемента оповещения.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.live(this.props.ariaLive),
      ...AriaStaticInclude.labelledby(this.callInstance('label', item => item.is ? item.id : undefined)),
      ...AriaStaticInclude.describedby(this.callInstance('description', item => item.is ? item.id : undefined))
    }
  }

  /**
   * Returns attributes and event listeners for the main element.
   *
   * Возвращает атрибуты и обработчики событий для главного элемента.
   * @returns main element bindings / привязки главного элемента
   */
  get binds(): ConstrBind {
    return {
      onTransitionend: this.onTransition,
      ...this.aria
    }
  }

  /**
   * Returns dynamic status classes for the main element.
   *
   * Возвращает динамические классы статусов для главного элемента.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('hide', item => item.classes, {})
  }

  /**
   * Checks whether the alert has completed its hide transition and should be removed from render.
   *
   * Проверяет, завершена ли анимация скрытия оповещения и нужно ли убрать его из рендера.
   * @returns true if alert is destroyed / true, если оповещение скрыто окончательно
   */
  isDestroy(): boolean {
    return this.callInstance('hide', item => item.destroy.value, false)
  }

  /**
   * Delegates transitionend events lazily to AlertEvent.
   *
   * Лениво делегирует события transitionend в AlertEvent.
   * @param event native transition event / нативное событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    this.callInstance('alertEvent', item => item.onTransition(event))
  }
}
