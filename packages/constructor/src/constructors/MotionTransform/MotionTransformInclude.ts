import {
  type ConstrBind,
  type DesignComponents,
  type ConstrEmit
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
import type { MotionTransformProps } from './props'
import type { MotionTransformEmits, MotionTransformSlots } from './types'
import type {
  MotionTransformComponentInclude,
  MotionTransformEmitOptions,
  MotionTransformExposeInclude,
  MotionTransformPropsInclude
} from './basicTypes'

/**
 * The class returns data for working with the MotionTransform component.
 * It extends ComponentIncludeAbstract to manage transition states, renders, and bindings.
 *
 * Класс возвращает данные для работы с компонентом MotionTransform.
 * Расширяет ComponentIncludeAbstract для управления состояниями анимации перехода, рендером и привязками.
 */
export class MotionTransformInclude<
  Props extends MotionTransformPropsInclude = MotionTransformPropsInclude,
  PropsExtra extends MotionTransformProps = MotionTransformProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    MotionTransformExposeInclude,
    MotionTransformSlots
  > {
  /** List of methods to expose from the sub-component / Список методов для экспорта из субкомпонента */
  protected readonly exposeItems: ComponentIncludeExposeItem<any>[] | undefined = [
    { name: 'getOpen', type: 'boolean' },
    { name: 'isShow', type: 'boolean' },

    { name: 'setOpen' },
    { name: 'toOpen' },
    { name: 'toClose' },
    { name: 'toggle' }
  ]

  protected name = 'motionTransform'
  protected propsAttrsName = 'motionTransformAttrs'

  /**
   * Constructor
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param emits the function is called when an event is triggered / функция вызывается при срабатывании события
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<MotionTransformComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Emits 'transform' event upward /
   * Поднимает событие 'transform' наверх
   * @param event native event / нативное событие
   * @param options payload / параметры события
   */
  readonly onTransform = (
    event: Event | undefined,
    options: MotionTransformEmitOptions
  ) => {
    this.emits?.('transform', event, options)
    this.emits?.('transformLite', options)
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
  ): ConstrBind<PropsExtra> {
    const props = this.getProps()

    return {
      ...super.getAttrs(attrs),

      open: props.open,
      clickOpen: props.clickOpen,
      autoClose: props.autoClose,

      onTransform: this.onTransform
    }
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected toExpose(): MotionTransformExposeInclude {
    const data: Record<string, any> = {}

    if (this.exposeItems) {
      this.exposeItems.forEach((item) => {
        data[item.name] = this.getExposeItem(item)
      })
    }

    return {
      ...super.toExpose(),
      getMotionTransformElement: () => this.element.value
    }
  }
}
