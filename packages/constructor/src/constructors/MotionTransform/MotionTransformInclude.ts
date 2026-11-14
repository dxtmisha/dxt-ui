import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  type ConstrEmit
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
import type {
  MotionTransformComponentInclude,
  MotionTransformEmitOptions,
  MotionTransformExposeInclude,
  MotionTransformPropsInclude
} from './basicTypes'
import type { MotionTransformEmits, MotionTransformSlots } from './types'
import type { MotionTransformProps } from './props'

/**
 * The class returns data for working with the MotionTransform component.
 * It extends ComponentIncludeAbstract to manage transition states, renders, and bindings.
 *
 * Класс возвращает данные для работы с компонентом MotionTransform.
 * Расширяет ComponentIncludeAbstract для управления состояниями анимации перехода, рендером и привязками.
 */
export class MotionTransformInclude extends ComponentIncludeAbstract<
  MotionTransformPropsInclude,
  MotionTransformProps,
  MotionTransformExposeInclude,
  MotionTransformSlots
> {
  /** List of methods to expose from the sub-component / Список методов для экспорта из субкомпонента */
  protected readonly exposeItems: ComponentIncludeExposeItem[] | undefined = [
    { name: 'isShow', type: 'boolean' },
    { name: 'getOpen', type: 'boolean' },

    { name: 'setOpen' },
    { name: 'toOpen' },
    { name: 'toClose' },
    { name: 'toggle' }
  ]

  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'motionTransform'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected readonly propsAttrsName = 'motionTransformAttrs'

  /**
   * Constructor for initializing MotionTransform properties and inclusion managers.
   *
   * Конструктор для инициализации свойств MotionTransform и включенных менеджеров.
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components design components registry / реестр дизайн-компонентов
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: Readonly<MotionTransformPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<MotionTransformComponentInclude, MotionTransformPropsInclude>,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>,
    extra?: ComponentIncludeExtra<MotionTransformProps>,
    index?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @param attrs attributes to merge / атрибуты для объединения
   * @returns merged binding attributes / объединенные атрибуты привязки
   */
  protected override getAttrs(
    attrs?: ConstrBind<MotionTransformProps>
  ): ConstrBind<MotionTransformProps> {
    const props = this.getProps()

    return {
      ...super.getAttrs(attrs),
      ...(props.open !== undefined ? { open: props.open } : {})
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): ConstrBind<MotionTransformProps> {
    const props = this.getProps()

    return {
      ...super.toBinds(),

      ...(props.clickOpen !== undefined ? { clickOpen: props.clickOpen } : {}),
      ...(props.autoClose !== undefined ? { autoClose: props.autoClose } : {}),
      onTransform: this.onTransform
    }
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected override toExpose(): MotionTransformExposeInclude {
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
  ): void => {
    this.emits?.('transform', event, options)
    this.emits?.('transformLite', options)
  }
}
