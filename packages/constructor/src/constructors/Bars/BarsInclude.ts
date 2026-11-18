// ai-none

import { mergeProps } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  type DesignName,
  isFilled,
  isNumber
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
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
  /**
   * Checks whether bars should be displayed.
   *
   * Проверяет, нужно ли отображать панели.
   * @param props input properties / входные свойства
   * @returns true if bars should be displayed / true, если панели должны отображаться
   */
  static is(props?: BarsPropsInclude): boolean {
    return !props?.barsHide && Boolean(
      isFilled(props?.barsLabel, true)
      || isNumber(props?.barsLabel)
      || isFilled(props?.barsDescription, true)
      || props?.barsBackHide !== true
    )
  }

  /** Component sub-name / Под-имя компонента */
  protected override readonly name = 'bars'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected override readonly propsAttrsName = 'barsAttrs'

  /**
   * Constructor
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param labelId identifier for the label / идентификатор для метки
   * @param descriptionId identifier for the description / идентификатор для описания
   */
  constructor(
    props: ComponentIncludeProps<Props>,
    naming: DesignName,
    components?: DesignComponents<BarsComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<BarsEmitsInclude>,
    protected readonly labelId?: string,
    protected readonly descriptionId?: string
  ) {
    super(props, naming, components, extra, index)
  }

  /**
   * Checks whether bars should be displayed /
   * Проверяет, нужно ли отображать панели
   */
  override get is(): boolean {
    return BarsInclude.is(this.getProps())
  }

  /**
   * Handles click events from Bars and emits related events /
   * Обрабатывает клики по панелям и испускает связанные события
   * @param event native mouse event / native событие мыши
   * @param value payload with { type, value, detail } / данные события с { type, value, detail }
   */
  readonly onClick = (event: MouseEvent, value: EventClickValue): void => {
    this.emits?.('bars', event, value)
    this.emits?.('barsLite', value)

    if (value.type === 'back') {
      this.emits?.('barsBack', value)
    }
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()

    return mergeProps(
      super.toBinds(),
      {
        labelId: this.labelId,
        label: props.barsLabel,
        descriptionId: this.descriptionId,
        description: props.barsDescription,
        backHide: props.barsBackHide,
        bars: props.barsList,
        onClick: this.onClick
      }
    ) as Partial<ConstrBind<PropsExtra>>
  }
}
