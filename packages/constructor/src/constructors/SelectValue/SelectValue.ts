import { computed, type Ref, type ToRefs } from 'vue'
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
 * SelectValue
 */
export class SelectValue {
  readonly enabled: EnabledInclude
  readonly event: EventClickInclude

  readonly window: WindowClassesInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
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
    constructors?: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      WindowClassesConstructor?: typeof WindowClassesInclude
    }
  ) {
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      WindowClassesConstructor = WindowClassesInclude
    } = constructors ?? {}

    this.enabled = new EnabledConstructor(this.props)
    this.event = new EventConstructor(
      this.props,
      this.enabled,
      this.emits
    )

    this.window = new WindowClassesConstructor(classDesign)
  }

  /** Is placeholder/ Является ли плейсхолдером */
  readonly isPlaceholder = computed<boolean>(
    () => !isFilled(this.props.value) && Boolean(this.props.placeholder)
  )

  /** Icon for canceling selection/ Иконка для отмены выбора */
  readonly iconTrailing = computed<ConstrBind<IconProps> | undefined>(() => {
    if (this.enabled.isEnabled.value) {
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
  })

  /** Returns data for the main style class/ Возвращает данные для главного класса стиля */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--placeholder`]: this.isPlaceholder.value,
    [`${this.className}--multiple`]: Boolean(this.props.multiple)
  }))

  /**
   * Click event handler.
   *
   * Обработчик события клика.
   * @param event event object/ объект события
   * @param options additional event options/ дополнительные опции события
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
