// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  getObjectNoUndefined,
  isFilled,
  isNumber,
  type RawSlots
} from '@dxtmisha/functional'

import { CaptionInclude } from '../../classes/CaptionInclude'
import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import { IconInclude } from '../Icon'

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
import type { HeaderExpose } from './types'

/**
 * Class providing configuration, conditional visibility, and slot-mapped rendering
 * for embedding the Header component within parent layout constructors (e.g., Block).
 *
 * Класс, обеспечивающий конфигурацию, условную видимость и рендеринг с сопоставлением слотов
 * для встраивания компонента Header в родительские конструкторы макета (например, Block).
 */
export class HeaderInclude<
  Props extends HeaderPropsInclude = HeaderPropsInclude,
  PropsExtra extends HeaderProps = HeaderProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    HeaderExpose,
    HeaderSlotsInclude
  > {
  /**
   * Checks whether header content is present in properties or header slots.
   *
   * Проверяет наличие содержимого шапки в свойствах или слотах шапки.
   * @param props input properties / входные свойства
   * @param slots optional header slots / необязательные слоты шапки
   * @returns true if header should be displayed / true, если шапка должна отображаться
   */
  static is(
    props?: HeaderPropsInclude,
    slots?: HeaderSlotsInclude
  ): boolean {
    return Boolean(
      isFilled(props?.label, true)
      || isNumber(props?.label)
      || CaptionInclude.is(props, slots)
      || IconInclude.is(props)
      || isFilled(props?.headerAttrs)
      || slots?.label
      || slots?.caption
      || slots?.trailing
    )
  }

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'header'
  /** Name of the property for component attributes / Название свойства для атрибутов компонента */
  protected override readonly propsAttrsName = 'headerAttrs'

  /**
   * Constructor for initializing HeaderInclude.
   *
   * Конструктор для инициализации HeaderInclude.
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param labelId identifier for the label / идентификатор для метки
   * @param slots optional header slots / необязательные слоты шапки
   */
  constructor(
    props: ComponentIncludeProps<Props>,
    naming: DesignName,
    components?: DesignComponents<HeaderComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly labelId?: string,
    protected readonly slots?: HeaderSlotsInclude
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Checks whether header should be displayed.
   *
   * Проверяет, нужно ли отображать заголовок.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return HeaderInclude.is(this.getProps(), this.slots)
  }

  /**
   * Renders the included Header component, remapping parent `label` slot to `default`.
   *
   * Рендерит включённый компонент Header, перенаправляя родительский слот `label` в `default`.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow function returning visibility state / функция, возвращающая состояние видимости
   * @param index unique rendering key / уникальный ключ рендеринга
   * @returns array of VNodes / массив VNode
   */
  override readonly render = (
    slotsChildren: HeaderSlotsInclude | undefined = this.slots,
    attrs?: Partial<ConstrBind<PropsExtra>>,
    isShow?: () => boolean,
    index?: string
  ): VNode[] => {
    const children: RawSlots = {}

    if (slotsChildren) {
      if (slotsChildren.label) {
        children.default = slotsChildren.label
      }

      if (slotsChildren.caption) {
        children.caption = slotsChildren.caption
      }

      if (slotsChildren.trailing) {
        children.trailing = slotsChildren.trailing
      }
    }

    return this.initRender(
      children as HeaderSlotsInclude,
      attrs,
      isShow ?? (() => HeaderInclude.is(this.getProps(), slotsChildren)),
      index
    )
  }

  /**
   * Combines input attributes with internal header bindings without overwriting defined `headerAttrs` values with `undefined`.
   *
   * Объединяет входные атрибуты со внутренними привязками шапки без перезаписи заданных значений `headerAttrs` на `undefined`.
   * @returns resolved header bindings / разрешённые привязки шапки
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()
    const superBinds = super.toBinds()

    return mergeProps(
      superBinds,
      getObjectNoUndefined({
        tag: props.tagHeader,

        label: props.label,
        labelId: props.labelId ?? (superBinds.labelId as string | undefined) ?? this.labelId,

        caption: props.caption,
        captionDecorative: props.captionDecorative,

        icon: props.icon,
        iconTurn: props.iconTurn,
        iconHide: props.iconHide,
        iconDir: props.iconDir,
        iconPalette: props.iconPalette,
        iconAttrs: props.iconAttrs
      })
    ) as Partial<ConstrBind<PropsExtra>>
  }
}
