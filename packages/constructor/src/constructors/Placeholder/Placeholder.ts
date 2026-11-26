import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract,
  isFilled
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { ActionsInclude } from '../Actions'
import { ImageInclude } from '../Image'

import type { AriaList } from '../../types/ariaTypes'
import type { PlaceholderProps } from './props'
import type { PlaceholderComponents, PlaceholderEmits, PlaceholderSlots } from './types'

/** Placeholder dependency constructors type / Тип конструкторов зависимостей Placeholder */
export type PlaceholderConstructors = {
  /** Actions manager constructor / Конструктор менеджера действий */
  actions: typeof ActionsInclude
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Image manager constructor / Конструктор менеджера изображения */
  image: typeof ImageInclude
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
}

/**
 * Placeholder orchestrator class managing illustrative image, label, description,
 * action controls, and WAI-ARIA container bindings with lazy dependency instantiation.
 *
 * Класс-оркестратор Placeholder, управляющий иллюстративным изображением, меткой, описанием,
 * кнопками действий и WAI-ARIA-привязками контейнера с ленивой инициализацией зависимостей.
 */
export class Placeholder extends DesignLogicAbstract<
  HTMLDivElement,
  PlaceholderComponents,
  PlaceholderEmits,
  PlaceholderSlots,
  PlaceholderProps,
  PlaceholderConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<PlaceholderConstructors> = {
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
        () => ({ align: 'center' }),
        undefined,
        this.emits
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
    image: {
      item: ImageInclude,
      canCreate: () => ImageInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
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
   * Computed ARIA attributes linking the placeholder container to its label and description.
   *
   * Вычисляемые ARIA-атрибуты, связывающие контейнер заглушки с меткой и описанием.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get aria(): AriaList {
    const aria: AriaList = {}
    const labelId = this.callInstance('label', item => (item.is ? item.id : undefined))
    const descriptionId = this.callInstance('description', item => (item.is ? item.id : undefined))

    if (labelId) {
      Object.assign(aria, AriaStaticInclude.labelledby(labelId))
    }

    if (descriptionId) {
      Object.assign(aria, AriaStaticInclude.describedby(descriptionId))
    }

    return aria
  }

  /**
   * Computed bindings for the main element.
   *
   * Вычисляемые привязки для главного элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    return {
      ...this.aria
    }
  }
}
