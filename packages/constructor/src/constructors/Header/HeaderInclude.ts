import { type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type {
  ComponentIncludeExtra,
  ComponentIncludeProps
} from '../../types/componentInclude'
import type {
  HeaderComponentInclude,
  HeaderPropsInclude,
  HeaderSlotsInclude
} from './basicTypes'
import type { HeaderProps } from './props'

/**
 * The class returns data for working with the Header component. /
 * Класс возвращает данные для работы с компонентом Header.
 */
export class HeaderInclude<
  Props extends HeaderPropsInclude = HeaderPropsInclude,
  PropsExtra extends HeaderProps = HeaderProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    Record<string, any>,
    HeaderSlotsInclude
  > {
  /** Sub-component name / Название субкомпонента */
  protected readonly name = 'header'
  /** Name of the property for component attributes / Название свойства для атрибутов компонента */
  protected readonly propsAttrsName = 'headerAttrs'

  /**
   * Constructor /
   * Конструктор
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param labelId identifier for the label / идентификатор для метки
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<Props>,
    components?: DesignComponents<HeaderComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly labelId?: string
  ) {
    super(className, props, components, extra, index)
  }

  /** Checks whether header should be displayed / Проверяет, нужно ли отображать заголовок */
  override get is(): boolean {
    const props = this.getProps()

    return Boolean(
      props.label
      || props.caption
      || props.icon
      || props.headerAttrs
    )
  }

  /**
   * Refinement of the rendering process. /
   * Доработка процесса рендеринга.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @returns array of VNodes / массив VNode
   */
  readonly render = (
    slotsChildren?: HeaderSlotsInclude,
    attrs?: Partial<ConstrBind<PropsExtra>>
  ): VNode[] => {
    const children: Record<string, any> = {}

    if (slotsChildren) {
      if ('label' in slotsChildren) {
        children['default'] = slotsChildren.label
      }

      if ('caption' in slotsChildren) {
        children['caption'] = slotsChildren.caption
      }

      if ('trailing' in slotsChildren) {
        children['trailing'] = slotsChildren.trailing
      }
    }

    if (Object.keys(children).length >= 0) {
      return this.initRender(children, attrs)
    }

    return []
  }

  /** Computed bindings for the header / Вычисляемые привязки для header */
  protected override toBinds() {
    const props = this.getProps()
    return {
      ...super.toBinds(),

      tag: props.tagHeader,

      label: props.label,
      labelId: this.labelId,

      caption: props.caption,
      captionDecorative: props.captionDecorative,

      icon: props.icon,
      iconTurn: props.iconTurn,
      iconHide: props.iconHide,
      iconDir: props.iconDir,
      iconPalette: props.iconPalette,
      iconAttrs: props.iconAttrs
    }
  }
}
