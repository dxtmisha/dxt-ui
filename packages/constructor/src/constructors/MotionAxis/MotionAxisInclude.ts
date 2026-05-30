import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  executeFunctionRef,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra } from '../../types/componentInclude'

import type {
  MotionAxisComponentInclude,
  MotionAxisEmitOptions,
  MotionAxisEmitsInclude,
  MotionAxisPropsInclude,
  MotionAxisSelectedValue
} from './basicTypes'
import type { MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/**
 * Inclusion class for programmatic rendering and integration of MotionAxis in components.
 * It extends ComponentIncludeAbstract to manage transition states, renders, and bindings.
 *
 * Класс-включение для программного рендеринга и интеграции MotionAxis в другие компоненты.
 * Расширяет ComponentIncludeAbstract для управления состояниями анимации перехода, рендером и привязками.
 *
 * @template Props - Properties interface extending MotionAxisPropsInclude / Интерфейс свойств, расширяющий MotionAxisPropsInclude
 * @template PropsExtra - Extra properties interface / Дополнительный интерфейс свойств
 */
export class MotionAxisInclude<
  Props extends MotionAxisPropsInclude = MotionAxisPropsInclude,
  PropsExtra extends MotionAxisProps = MotionAxisProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    Record<string, any>,
    MotionAxisSlots
  > {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'motionAxis'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected readonly propsAttrsName = 'motionAxisAttrs'

  /**
   * Constructor for programmatic inclusion of MotionAxis.
   *
   * Конструктор для программного включения MotionAxis.
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param selected selected element / выбранный элемент
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<MotionAxisComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<MotionAxisEmitsInclude>,
    protected readonly selected?: RefOrNormalOrFunction<MotionAxisSelectedValue>
  ) {
    super(className, props, components, extra, index)
  }

  /** Selected element / Выбранный элемент */
  get selectedItem(): MotionAxisSelectedValue {
    if (this.selected) {
      return executeFunctionRef(this.selected)
    }

    return this.getProps().selected
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @param attrs attributes to merge / атрибуты для объединения
   * @returns merged binding attributes / объединенные атрибуты привязки
   */
  protected override getAttrs(
    attrs?: ConstrBind<PropsExtra>
  ) {
    return {
      ...super.getAttrs(attrs),
      selected: this.selectedItem
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    return {
      ...super.toBinds(),
      onMotionAxis: this.onMotionAxis
    }
  }

  /**
   * Emits 'motionAxis' event upward.
   *
   * Поднимает событие 'motionAxis' наверх.
   * @param options event payload / параметры события
   */
  protected readonly onMotionAxis = (options: MotionAxisEmitOptions) => {
    this.emits?.('motionAxis', options)
  }
}
