// ai-none

import {
  type ConstrBind,
  type DesignComponents,
  type DesignName
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type {
  ComponentIncludeExtra,
  ComponentIncludeProps
} from '../../types/componentInclude'
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
  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false
  /** Component name / Имя компонента */
  protected override readonly name = 'arrow'
  /** Attribute name for props / Имя атрибута для свойств */
  protected override readonly propsAttrsName = 'arrowAttrs'

  /**
   * Constructor for ArrowInclude
   *
   * Конструктор для ArrowInclude
   * @param naming component naming helper / помощник именования компонента
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param elementTarget target element or selector / целевой элемент или селектор
   */
  constructor(
    naming: DesignName,
    props: ComponentIncludeProps<Props>,
    components?: DesignComponents<ArrowComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly elementTarget?: HTMLElement | string
  ) {
    super(naming, props, components, extra, index)
  }

  /**
   * Checks whether arrow should be displayed /
   * Проверяет, нужно ли отображать стрелку
   * @returns true if arrow should be shown / true, если стрелка должна отображаться
   */
  override get is(): boolean {
    return Boolean(this.getProps().arrowShow)
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      position: props.arrowPosition,
      elementTarget: this.elementTarget,
      ...binds
    }
  }
}
