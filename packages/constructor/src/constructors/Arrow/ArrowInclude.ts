import {
  type ConstrBind,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'

import type { ArrowComponentInclude, ArrowPropsInclude } from './basicTypes'
import type { ArrowProps } from './props'
import type { ArrowExpose, ArrowSlots } from './types'

/**
 * ArrowInclude class provides functionality for conditionally rendering arrow components
 * within other components. It manages the logic for determining when to display arrow
 * and configures the appropriate properties.
 *
 * Класс ArrowInclude предоставляет функциональность для условного рендеринга компонентов
 * стрелки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения стрелки и настраивает соответствующие свойства.
 */
export class ArrowInclude<
  Props extends ArrowPropsInclude = ArrowPropsInclude,
  PropsExtra extends ArrowProps = ArrowProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    ArrowExpose,
    ArrowSlots
  > {
  /** Items to expose / Элементы для экспозиции */
  protected readonly exposeItems: ComponentIncludeExposeItem<any>[] | undefined = undefined

  /** Component name / Имя компонента */
  protected name = 'arrow'

  /** Attribute name for props / Имя атрибута для свойств */
  protected propsAttrsName = 'arrowAttrs'

  /**
   * Constructor for ArrowInclude
   *
   * Конструктор для ArrowInclude
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param elementTarget target element or selector / целевой элемент или селектор
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<ArrowComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly elementTarget?: HTMLElement | string
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Checks whether arrow should be displayed /
   * Проверяет, нужно ли отображать стрелку
   */
  override get is(): boolean {
    const props = this.getProps()

    return Boolean(props.arrowShow)
  }

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

      position: props.arrowPosition,

      elementTarget: this.elementTarget
    }
  }
}
