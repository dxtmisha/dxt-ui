import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'

import type { TextLabelProps } from './props'
import type {
  TextLabelComponents,
  TextLabelEmits,
  TextLabelSlots
} from './types'

/** TextLabel dependency constructors type / Тип конструкторов зависимостей TextLabel */
export type TextLabelConstructors = {
  /** Label include constructor / Конструктор подключения метки */
  label: typeof LabelInclude
}

/**
 * Class representing the TextLabel logic orchestrator.
 * Manages lazy instantiation of the label renderer with dynamic tag resolution.
 *
 * Класс, представляющий оркестратор логики TextLabel.
 * Управляет ленивой инициализацией рендерера метки с динамическим разрешением тега.
 */
export class TextLabel extends DesignLogicAbstract<
  HTMLElement,
  TextLabelComponents,
  TextLabelEmits,
  TextLabelSlots,
  TextLabelProps,
  TextLabelConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TextLabelConstructors> = {
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        undefined,
        () => this.props.tag
      ]
    }
  }
}
