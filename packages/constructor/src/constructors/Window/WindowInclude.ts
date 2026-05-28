import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ModelInclude } from '../../classes/ModelInclude'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
import type {
  WindowComponentInclude,
  WindowEmitOptions,
  WindowEmitsInclude,
  WindowExposeInclude,
  WindowPropsInclude
} from './basicTypes'
import type { WindowSlots } from './types'
import type { WindowProps } from './props'

/**
 * WindowInclude class provides functionality for working with the Window component.
 * It manages the reactive bindings, rendering, and expose API of the window component.
 *
 * Класс WindowInclude предоставляет функциональность для работы с компонентом Window.
 * Он управляет реактивными привязками, рендерингом и экспортируемым API компонента окна.
 */
export class WindowInclude<
  Props extends WindowPropsInclude = WindowPropsInclude,
  PropsExtra extends WindowProps = WindowProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    WindowExposeInclude,
    WindowSlots
  > {
  protected readonly exposeItems: ComponentIncludeExposeItem[] | undefined = [
    { name: 'getId' },
    { name: 'getOpen', type: 'boolean' },
    { name: 'getControl' },

    { name: 'setOpen' },
    { name: 'toOpen' },
    { name: 'toClose' },
    { name: 'toggle' }
  ]

  protected name = 'window'
  protected propsAttrsName = 'windowAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param ariaLabelledby identifier for the label / идентификатор для метки
   * @param ariaDescribedby identifier for the description / идентификатор для описания
   * @param model instance for managing modal open state / экземпляр для управления состоянием открытия модального окна
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<WindowComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<WindowEmitsInclude>,
    protected readonly ariaLabelledby?: string,
    protected readonly ariaDescribedby?: string,
    protected readonly model?: ModelInclude<boolean>
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Returns preparation result /
   * Возвращает результат preparation
   */
  protected readonly getPreparation = () =>
    this.getExtra()?.preparation?.() ?? this.getProps().windowAttrs?.preparation?.()

  /**
   * Returns opening result /
   * Возвращает результат opening
   */
  protected readonly getOpening = () =>
    this.getExtra()?.opening?.() ?? this.getProps().windowAttrs?.opening?.() ?? true

  /**
   * Returns closing result /
   * Возвращает результат closing
   */
  protected readonly getClosing = () =>
    this.getExtra()?.closing?.() ?? this.getProps().windowAttrs?.closing?.() ?? true

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): ConstrBind<PropsExtra> {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,

      disabled: props.disabled,
      autoClose: props.autoClose,

      preparation: this.getPreparation,
      opening: this.getOpening,
      closing: this.getClosing,

      ariaLabelledby: this.ariaLabelledby,
      ariaDescribedby: this.ariaDescribedby,

      onWindow: this.onWindow
    }
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected override toExpose(): WindowExposeInclude {
    return {
      ...super.toExpose(),
      getWindowElement: () => this.element.value
    }
  }

  /**
   * Emits 'window' event upward /
   * Поднимает событие 'window' наверх
   * @param options event payload / параметры события
   */
  protected readonly onWindow = (options: WindowEmitOptions) => {
    this.emits?.('window', options)
    this.model?.emit(options.open)
  }
}
