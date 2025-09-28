import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type { EventClickValue } from '../../types/eventClickTypes'

import type { BarsComponentInclude, BarsEmitsInclude, BarsPropsInclude } from './basicTypes'
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
  PropsExtra extends ConstrBind<BarsProps> = ConstrBind<BarsProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<BarsComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<BarsEmitsInclude>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether bars should be displayed/
   * Проверяет, нужно ли отображать панели
   */
  readonly is = computed(() => Boolean(
    this.props.barsLabel
    || this.props.barsDescription
    || this.props.barsBackHide !== true
  ))

  /** Computed bindings for the bars/ Вычисляемые привязки для панелей */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.barsAttrs,
      { class: `${this.className}__bars` }
    )

    return {
      ...props,

      label: this.props.barsLabel,
      description: this.props.barsDescription,
      backHide: this.props.barsBackHide,
      bars: this.props.barsList
    }
  })

  /**
   * Render the Bars component
   *
   * Рендер компонента панелей
   */
  readonly render = (): VNode[] => {
    console.log('this.props.barsHide', this.props.barsHide)
    if (
      this.components
      && !this.props.barsHide
    ) {
      return this.components.render(
        'bars',
        {
          ...this.binds.value,
          onClick: this.onClick
        },
        undefined,
        this.index ?? 'bars'
      )
    }

    return []
  }

  /**
   * Handles click events from Bars and emits related events/
   * Обрабатывает клики по панелям и испускает связанные события
   *
   * @param event native mouse event/ native событие мыши
   * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
   */
  protected readonly onClick = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('bars', event, value)
    this.emits?.('barsLite', value)

    if (value.type === 'back') {
      this.emits?.('barsBack', value)
    }
  }
}
