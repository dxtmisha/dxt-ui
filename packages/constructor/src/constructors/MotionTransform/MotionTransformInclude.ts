import {
  type ConstrBind,
  type DesignComponents,
  type ConstrEmit
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
import type { MotionTransformEmits, MotionTransformSlots } from './types'
import type { MotionTransformProps } from './props'
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
 *
 * @template Props - Properties interface extending MotionTransformPropsInclude / Интерфейс свойств, расширяющий MotionTransformPropsInclude
 * @template PropsExtra - Extra properties interface / Дополнительный интерфейс свойств
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

  /** Component sub-name / Дополнительное имя компонента */
  protected name = 'motionTransform'

  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected propsAttrsName = 'motionTransformAttrs'

  /**
   * Constructor for initializing MotionTransform properties and inclusion managers.
   *
   * Конструктор для инициализации свойств MotionTransform и включенных менеджеров.
   * @param className base class name of the parent component / имя базового класса родительского компонента
   * @param props input parameter / входной параметр
   * @param components design components registry / реестр дизайн-компонентов
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
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
      open: props.open
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): ConstrBind<PropsExtra> {
    const props = this.getProps()

    return {
      ...super.toBinds(),
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
    return {
      ...super.toExpose(),
      getMotionTransformElement: () => this.element.value
    }
  }

  /**
   * Emits 'transform' event upward.
   *
   * Поднимает событие 'transform' наверх.
   * @param event native event / нативное событие
   * @param options payload / параметры события
   */
  protected readonly onTransform = (
    event: Event | undefined,
    options: MotionTransformEmitOptions
  ) => {
    this.emits?.('transform', event, options)
    this.emits?.('transformLite', options)
  }
}
