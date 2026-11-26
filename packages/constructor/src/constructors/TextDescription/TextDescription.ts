import { toRef } from 'vue'
import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'

import type { TextDescriptionProps } from './props'
import type {
  TextDescriptionComponents,
  TextDescriptionEmits,
  TextDescriptionSlots
} from './types'

/** TextDescription dependency constructors type / Тип конструкторов зависимостей TextDescription */
export type TextDescriptionConstructors = {
  /** Description include constructor / Конструктор подключения описания */
  description: typeof DescriptionInclude
}

/**
 * Class representing the TextDescription logic orchestrator.
 * Manages lazy instantiation of the description renderer with dynamic tag resolution.
 *
 * Класс, представляющий оркестратор логики TextDescription.
 * Управляет ленивой инициализацией рендерера описания с динамическим разрешением тега.
 */
export class TextDescription extends DesignLogicAbstract<
  HTMLElement,
  TextDescriptionComponents,
  TextDescriptionEmits,
  TextDescriptionSlots,
  TextDescriptionProps,
  TextDescriptionConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TextDescriptionConstructors> = {
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        undefined,
        toRef(this.props, 'tag')
      ]
    }
  }
}
