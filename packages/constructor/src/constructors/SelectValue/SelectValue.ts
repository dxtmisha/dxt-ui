import { type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  isFilled
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { type IconProps } from '../Icon'
import { WindowClassesInclude } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { SelectValueComponents, SelectValueEmits, SelectValueSlots } from './types'
import type { SelectValueProps } from './props'

/** SelectValue dependency constructors type / Тип конструкторов зависимостей SelectValue */
export type SelectValueConstructors = {
  /** Enabled state manager constructor / Конструктор менеджера состояния активности */
  enabled: typeof EnabledInclude
  /** Event click controller constructor / Конструктор контроллера клика по событию */
  event: typeof EventClickInclude
  /** Window classes manager constructor / Конструктор менеджера классов окна */
  window: typeof WindowClassesInclude
}

/**
 * SelectValue is a constructor class for managing select value displays,
 * handling state such as placeholder states, canceling icons, and click actions.
 *
 * SelectValue — это класс-конструктор для управления отображением выбранных значений,
 * обрабатывающий такие состояния, как плейсхолдеры, иконки отмены и действия по клику.
 */
export class SelectValue extends DesignLogicAbstract<
  HTMLDivElement,
  SelectValueComponents,
  SelectValueEmits,
  SelectValueSlots,
  SelectValueProps,
  SelectValueConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SelectValueConstructors> = {
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    window: {
      item: WindowClassesInclude,
      parameters: () => [this.naming.getDesign()]
    }
  }

  /**
   * Constructor / Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<SelectValueProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SelectValueComponents, SelectValueProps>,
    slots?: SelectValueSlots,
    emits?: ConstrEmit<SelectValueEmits>,
    constructors?: Partial<SelectValueConstructors>
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
  }

  /** Icon for canceling selection / Иконка для отмены выбора */
  get iconTrailing(): ConstrBind<IconProps> | undefined {
    if (this.i('enabled').isEnabled) {
      return {
        icon: this.props.iconCancel,
        dynamic: true,
        class: [
          this.naming.getSubClass('trailing'),
          this.i('window').get().controlStatic
        ]
      }
    }

    return undefined
  }

  /** Returns data for the main style class / Возвращает данные для главного класса стиля */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('placeholder')]: this.isPlaceholder(),
      [this.naming.getStatusClass('multiple')]: Boolean(this.props.multiple)
    }
  }

  /**
   * Checks whether the current value is a placeholder.
   *
   * Проверяет, является ли текущее значение плейсхолдером.
   * @returns true if placeholder / true, если плейсхолдер
   */
  isPlaceholder(): boolean {
    return !isFilled(this.props.value) && Boolean(this.props.placeholder)
  }

  /**
   * Click event handler.
   *
   * Обработчик события клика.
   * @param event event object / объект события
   * @param options additional event options / дополнительные опции события
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    event.preventDefault()
    event.stopPropagation()
    this.i('event').onClick(event, options)
  }
}
