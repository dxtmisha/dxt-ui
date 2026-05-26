import { type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
import type { EventClickValue } from '../../types/eventClickTypes'

import type { BarsComponentInclude, BarsEmitsInclude, BarsPropsInclude } from './basicTypes'
import type { BarsExpose, BarsSlots } from './types'
import type { BarsProps } from './props'

/**
 * BarsInclude class provides functionality for conditionally rendering bars components
 * within other components. It manages the logic for determining when to display bars
 * and configures the appropriate properties.
 *
 * Класс BarsInclude предоставляет функциональность для условного рендеринга компонентов
 * панелей действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения панелей и настраивает соответствующие свойства.
 */
export class BarsInclude<
  Props extends BarsPropsInclude = BarsPropsInclude,
  PropsExtra extends BarsProps = BarsProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    BarsExpose,
    BarsSlots
  > {
  protected readonly exposeItems: ComponentIncludeExposeItem<any>[] | undefined = undefined

  protected name = 'bars'
  protected propsAttrsName = 'barsAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя
   * @param labelId identifier for the label / идентификатор для метки
   * @param descriptionId identifier for the description / идентификатор для описания
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<BarsComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<BarsEmitsInclude>,
    protected readonly labelId?: string,
    protected readonly descriptionId?: string
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Checks whether bars should be displayed /
   * Проверяет, нужно ли отображать панели
   */
  get is(): boolean {
    const props = this.getProps()

    return !props.barsHide && Boolean(
      props.barsLabel
      || props.barsDescription
      || props.barsBackHide !== true
    )
  }

  /**
   * Handles click events from Bars and emits related events /
   * Обрабатывает клики по панелям и испускает связанные события
   * @param event native mouse event / native событие мыши
   * @param value payload with { type, value, detail } / данные события с { type, value, detail }
   */
  readonly onClick = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('bars', event, value)
    this.emits?.('barsLite', value)

    if (value.type === 'back') {
      this.emits?.('barsBack', value)
    }
  }

  /**
   * Render the Bars component /
   * Рендер компонента панелей
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @returns array of VNodes / массив VNode
   */
  readonly render = (
    slotsChildren?: BarsSlots,
    attrs?: ConstrBind<PropsExtra>
  ): VNode[] => super.initRender(
    slotsChildren,
    attrs,
    () => this.is
  )

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

      labelId: this.labelId,
      label: props.barsLabel,
      descriptionId: this.descriptionId,
      description: props.barsDescription,
      backHide: props.barsBackHide,
      bars: props.barsList,
      onClick: this.onClick
    }
  }
}
