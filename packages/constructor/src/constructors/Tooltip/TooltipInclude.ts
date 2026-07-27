import type { VNode } from 'vue'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
import type { DesignComponents } from '@dxtmisha/functional'

import type { TooltipPropsInclude, TooltipSlotsInclude } from './basicTypes'
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
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'tooltip'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected readonly propsAttrsName = 'tooltipAttrs'

  /**
   * Constructor for initializing TooltipInclude properties.
   *
   * Конструктор для инициализации свойств TooltipInclude.
   * @param className base class name / название базового класса
   * @param props input properties / входные свойства
   * @param components design components registry / реестр дизайн-компонентов
   * @param slots tooltip slots / слоты тултипа
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<TooltipPropsInclude>,
    components?: DesignComponents<any, TooltipPropsInclude>,
    protected readonly slots?: TooltipSlotsInclude,
    extra?: ComponentIncludeExtra<any>,
    index?: string
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Checks whether the component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент.
   */
  override get is(): boolean {
    const props = this.getProps()
    const extra = this.getExtra()

    return Boolean(
      this.components?.is('tooltip')
      && (
        props.tooltipLabel
        || props.tooltipDescription
        || extra?.label
        || extra?.description
        || this.slots?.tooltip
      )
    )
  }

  /**
   * Open the tooltip.
   *
   * Открыть подсказку.
   */
  open() {
    this.toggle(true)
  }

  /**
   * Close the tooltip.
   *
   * Закрыть подсказку.
   */
  close() {
    this.toggle(false)
  }

  /**
   * Toggle the tooltip.
   *
   * Переключить подсказку.
   * @param open open status / статус открытия
   */
  toggle(open: boolean): void {
    this.getElement()?.toggle(open)
  }

  protected toBinds() {
    const extra = this.getExtra()
    const props = this.getProps()

    return {
      ...super.toBinds(),

      label: props.tooltipLabel ?? extra?.label,
      description: props.tooltipDescription ?? extra?.description
    }
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
    attrs?: any,
    isShow: () => boolean = () => this.is,
    index?: string
  ): VNode[] => this.initRender(
    {
      ...slotsChildren,
      body: slotsChildren?.body ?? this.slots?.tooltip
    },
    attrs,
    isShow,
    index
  )
}
