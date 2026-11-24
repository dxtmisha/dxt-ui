import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  isFilled,
  isFunction
} from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonGroupProps } from './props'
import type {
  ButtonGroupComponents,
  ButtonGroupEmits,
  ButtonGroupSlots
} from './types'

/** ButtonGroup dependency constructors type / Тип конструкторов зависимостей ButtonGroup */
export type ButtonGroupConstructors = {
  /** Area context manager constructor / Конструктор менеджера контекста области */
  area: typeof AreaInclude
  /** Click event dispatcher constructor / Конструктор диспетчера событий клика */
  event: typeof EventClickInclude
}

/**
 * Class managing the business logic and orchestrator of the ButtonGroup component.
 * Provides layout area context, encapsulates WAI-ARIA group attributes, and coordinates button click events.
 *
 * Класс, управляющий бизнес-логикой и оркестрацией компонента ButtonGroup.
 * Предоставляет контекст области макета, инкапсулирует ARIA-атрибуты группы и координирует события клика кнопок.
 */
export class ButtonGroup extends DesignLogicAbstract<
  HTMLDivElement,
  ButtonGroupComponents,
  ButtonGroupEmits,
  ButtonGroupSlots,
  ButtonGroupProps,
  ButtonGroupConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ButtonGroupConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    }
  }

  /**
   * Constructor for ButtonGroup.
   *
   * Конструктор для ButtonGroup.
   * @param props input properties / входные свойства
   * @param element root HTML element reference / ссылка на корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components sub-components manager / менеджер вложенных компонентов
   * @param slots component slots / слоты компонента
   * @param emits event emitter / эмиттер событий
   * @param constructors dependency constructors override map / карта переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<ButtonGroupProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ButtonGroupComponents, ButtonGroupProps>,
    slots?: ButtonGroupSlots,
    emits?: ConstrEmit<ButtonGroupEmits>,
    constructors?: Partial<ButtonGroupConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('area')
  }

  /**
   * Returns WAI-ARIA attributes for the button group container (`role="group"` by default).
   *
   * Возвращает WAI-ARIA атрибуты для контейнера группы кнопок (`role="group"` по умолчанию).
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role(this.props.role ?? 'group'),
      ...AriaStaticInclude.label(this.props.ariaLabel)
    }
  }

  /**
   * Checks whether the button group has items in `list` or content in the default slot.
   *
   * Проверяет, содержит ли группа кнопок элементы в `list` или контент в слоте по умолчанию.
   * @returns true if list or default slot is present / true, если задан список или слот по умолчанию
   */
  isList(): boolean {
    return Boolean(
      isFilled(this.props.list)
      || isFunction(this.slots?.default)
    )
  }
}
