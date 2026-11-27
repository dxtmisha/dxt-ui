import { mergeProps } from 'vue'
import {
  type ConstrItems,
  DesignLogicAbstract,
  getBind,
  getObjectNoUndefined,
  isFilled,
  isFilledOrNumber
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { ButtonInclude } from '../Button'

import type { CollageBarProps } from './props'
import type { CollageBarComponents, CollageBarEmits, CollageBarSlots } from './types'

/** CollageBar dependency constructors type / Тип конструкторов зависимостей CollageBar */
export type CollageBarConstructors = {
  /** Button manager constructor / Конструктор менеджера кнопки */
  button: typeof ButtonInclude
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Click event manager constructor / Конструктор менеджера событий клика */
  event: typeof EventClickInclude
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
}

/**
 * CollageBar controller class managing labels, descriptions, buttons, and click events.
 *
 * Класс контроллера CollageBar, управляющий метками, описаниями, кнопками и событиями клика.
 */
export class CollageBar extends DesignLogicAbstract<
  HTMLElement,
  CollageBarComponents,
  CollageBarEmits,
  CollageBarSlots,
  CollageBarProps,
  CollageBarConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CollageBarConstructors> = {
    button: {
      item: ButtonInclude,
      canCreate: () => Boolean(
        isFilledOrNumber(this.props.button)
        || isFilled(this.props.icon)
        || isFilled(this.props.buttonAttrs)
      ),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => {
          const extra = getObjectNoUndefined({
            icon: this.props.icon,
            detail: this.props.detail,
            value: this.props.value,
            ...this.i('event').binds
          })

          if (isFilledOrNumber(this.props.button)) {
            return mergeProps(
              extra,
              getObjectNoUndefined(getBind(this.props.button, undefined, 'label', true))
            )
          }

          return extra
        }
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
   * HTML tag for the container.
   *
   * HTML-тег для контейнера.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag || 'figcaption'
  }
}
