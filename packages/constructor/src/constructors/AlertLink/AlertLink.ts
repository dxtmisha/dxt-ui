import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { AlertLinkProps } from './props'
import type { AlertLinkComponents, AlertLinkEmits, AlertLinkSlots } from './types'

/** AlertLink dependency constructors type / Тип конструкторов зависимостей AlertLink */
export type AlertLinkConstructors = {
  /** Click event constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
}

/**
 * AlertLink class for managing the business logic of a link in the Alert component.
 *
 * Класс AlertLink для управления бизнес-логикой ссылки в компоненте Alert.
 */
export class AlertLink extends DesignLogicAbstract<
  HTMLAnchorElement,
  AlertLinkComponents,
  AlertLinkEmits,
  AlertLinkSlots,
  AlertLinkProps,
  AlertLinkConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AlertLinkConstructors> = {
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        undefined,
        this.emits
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
    }
  }

  /**
   * Returns list of ARIA attributes for the alert link element.
   *
   * Возвращает список ARIA-атрибутов для элемента ссылки оповещения.
   * @returns list of ARIA attributes / список ARIA-атрибутов
   */
  get aria(): AriaList {
    if (!this.isLink()) {
      return {
        tabindex: '0',
        ...AriaStaticInclude.role('button')
      }
    }

    return {}
  }

  /**
   * Returns attributes for the main element.
   *
   * Возвращает атрибуты для главного элемента.
   * @returns main element bindings / привязки главного элемента
   */
  get binds(): ConstrBind {
    return {
      ...this.i('event').binds,
      ...this.aria
    }
  }

  /**
   * Returns values for the class.
   *
   * Возвращает значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [getClassTagAStatic(this.naming.getDesign())]: true
    }
  }

  /**
   * Checks whether the link navigates via href or router route.
   *
   * Проверяет, выполняет ли ссылка переход через href или маршрут роутера.
   * @returns true if href or to is defined / true, если заданы href или to
   */
  protected isLink(): boolean {
    return Boolean(this.props.href || this.props.to)
  }
}
