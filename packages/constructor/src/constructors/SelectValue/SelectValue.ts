import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type DesignComp,
  isFilled
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { type IconProps } from '../Icon'
import { WindowClassesInclude } from '../Window'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { SelectValueComponents, SelectValueEmits, SelectValueSlots } from './types'
import type { SelectValueProps } from './props'

/**
 * SelectValue is a constructor class for managing select value displays,
 * handling state such as placeholder states, canceling icons, and click actions.
 *
 * SelectValue — это класс-конструктор для управления отображением выбранных значений,
 * обрабатывающий такие состояния, как плейсхолдеры, иконки отмены и действия по клику.
 */
export class SelectValue {
  /** Enabled state manager / Менеджер состояния активности */
  readonly enabled: EnabledInclude

  /** Event click controller / Контроллер клика по событию */
  readonly event: EventClickInclude

  /** Window classes manager / Менеджер классов окна */
  readonly window: WindowClassesInclude

  /**
   * Constructor / Конструктор
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.EnabledConstructor class for creating the enabled state / класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event / класс для создания события
   * @param constructors.WindowClassesConstructor class for working with window classes / класс для работы с классами окна
   */
  constructor(
    protected readonly props: SelectValueProps,
    protected readonly refs: ToRefs<SelectValueProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SelectValueComponents, SelectValueProps>,
    protected readonly slots?: SelectValueSlots,
    protected readonly emits?: ConstrEmit<SelectValueEmits>,
    constructors: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      WindowClassesConstructor?: typeof WindowClassesInclude
    } = {}
  ) {
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      WindowClassesConstructor = WindowClassesInclude
    } = constructors

    this.enabled = new EnabledConstructor(this.props)
    this.event = new EventConstructor(
      this.props,
      this.enabled,
      this.emits
    )

    this.window = new WindowClassesConstructor(classDesign)
  }

  /** Icon for canceling selection / Иконка для отмены выбора */
  get iconTrailing(): ConstrBind<IconProps> | undefined {
    if (this.enabled.isEnabled) {
      return {
        icon: this.props.iconCancel,
        dynamic: true,
        class: [
          `${this.className}__trailing`,
          this.window.get().controlStatic
        ]
      }
    }

    return undefined
  }

  /** Returns data for the main style class / Возвращает данные для главного класса стиля */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--placeholder`]: this.isPlaceholder(),
      [`${this.className}--multiple`]: Boolean(this.props.multiple)
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
  ) => {
    event.preventDefault()
    event.stopPropagation()
    this.event.onClick(event, options)
  }
}
