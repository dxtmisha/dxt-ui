// ai-none

import type { VNode } from 'vue'
import type { ConstrBind, DesignComponents, DesignName } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'

import type { TooltipComponentInclude, TooltipPropsInclude, TooltipSlotsInclude } from './basicTypes'
import type { TooltipExpose, TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * TooltipInclude class provides functionality for conditionally rendering tooltip components
 * within other components. It manages the logic for determining when to display tooltip
 * and configures the appropriate properties.
 *
 * Класс TooltipInclude предоставляет функциональность для условного рендеринга компонентов
 * подсказки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения подсказки и настраивает соответствующие свойства.
 */
export class TooltipInclude extends ComponentIncludeAbstract<
  TooltipPropsInclude,
  TooltipProps,
  TooltipExpose,
  TooltipSlots
> {
  /**
   * Checks whether tooltip content is configured via props, slots, or extra attributes.
   *
   * Проверяет, задано ли содержимое тултипа через свойства, слоты или дополнительные атрибуты.
   * @param props input properties / входные свойства
   * @param slots tooltip slots / слоты тултипа
   * @param extra additional tooltip attributes / дополнительные атрибуты тултипа
   * @returns true if tooltip content is present / true, если содержимое тултипа присутствует
   */
  static is(
    props?: TooltipPropsInclude,
    slots?: TooltipSlotsInclude,
    extra?: Partial<ConstrBind<TooltipProps>>
  ): boolean {
    return Boolean(
      props?.tooltipLabel
      || props?.tooltipDescription
      || extra?.label
      || extra?.description
      || slots?.tooltip
    )
  }

  /** Component sub-name / Дополнительное имя компонента */
  protected override readonly name = 'tooltip'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected override readonly propsAttrsName = 'tooltipAttrs'

  /**
   * Constructor for initializing TooltipInclude properties.
   *
   * Конструктор для инициализации свойств TooltipInclude.
   * @param props input properties / входные свойства
   * @param naming component naming helper / помощник именования компонента
   * @param components design components registry / реестр дизайн-компонентов
   * @param slots tooltip slots / слоты тултипа
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    props: ComponentIncludeProps<TooltipPropsInclude>,
    naming: DesignName,
    components?: DesignComponents<TooltipComponentInclude, TooltipPropsInclude>,
    protected readonly slots?: TooltipSlotsInclude,
    extra?: ComponentIncludeExtra<TooltipProps>,
    index?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Checks whether the component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент.
   * @returns true if tooltip should be displayed / true, если тултип должен отображаться
   */
  override get is(): boolean {
    return Boolean(
      this.components?.is('tooltip')
      && TooltipInclude.is(this.getProps(), this.slots, this.getExtra())
    )
  }

  /**
   * Close the tooltip.
   *
   * Закрыть подсказку.
   */
  close(): void {
    this.toggle(false)
  }

  /**
   * Open the tooltip.
   *
   * Открыть подсказку.
   */
  open(): void {
    this.toggle(true)
  }

  /**
   * Renders the included component as a VNode array.
   *
   * Рендерит включенный компонент в виде массива VNode.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow function returns true if the component should be rendered / функция возвращает true, если компонент должен быть отрисован
   * @param index unique rendering key / уникальный ключ рендеринга
   * @returns array of VNodes / массив VNode
   */
  override readonly render = (
    slotsChildren?: TooltipSlots,
    attrs?: Partial<ConstrBind<TooltipProps>>,
    isShow: () => boolean = () => this.is,
    index?: string
  ): VNode[] => {
    const slots: TooltipSlots = {
      ...slotsChildren
    }
    const body = slotsChildren?.body ?? this.slots?.tooltip

    if (body) {
      slots.body = body
    }

    return this.initRender(
      slots,
      attrs,
      isShow,
      index
    )
  }

  /**
   * Toggle the tooltip.
   *
   * Переключить подсказку.
   * @param open open status / статус открытия
   * @param flash immediate display without delay / мгновенное отображение без задержки
   */
  toggle(open: boolean, flash?: boolean): void {
    this.getElement()?.toggle(open, flash)
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<TooltipProps>> {
    const extra = this.getExtra()
    const props = this.getProps()

    return {
      ...super.toBinds(),
      label: props.tooltipLabel ?? extra?.label,
      description: props.tooltipDescription ?? extra?.description
    }
  }
}
