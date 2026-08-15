import type { ConstrEmit } from '@dxtmisha/functional'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockDialEventItem } from './basicTypes'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialEmits } from './types'
import type { ClockDialProps } from './props'

/**
 * Class for managing event emissions for ClockDial.
 *
 * Класс для управления отправкой событий для ClockDial.
 */
export class ClockDialEmit {
  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param list clock dial list manager / менеджер списка циферблата часов
   * @param model model value helper instance / экземпляр помощника значения модели
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly list: ClockDialList,
    protected readonly model: ModelValueInclude<number>,
    protected readonly emits?: ConstrEmit<ClockDialEmits>
  ) { }

  /**
   * Emits input or change event with complete clock payload and numeric value.
   *
   * Испускает событие input или change с полной полезной нагрузкой часов и числовым значением.
   * @param eventType type of event to emit ('input' or 'change') / тип испускаемого события ('input' или 'change')
   * @param value optional explicit value / необязательное явное значение
   */
  emit(
    eventType: 'input' | 'change' = 'input',
    value?: number
  ): void {
    const currentValue = value ?? this.model.getValue() ?? 0
    const currentItem = this.list.find(currentValue)

    const eventItem: ClockDialEventItem = {
      clock: this.props.type,
      item: currentItem,
      value: currentValue
    }

    if (eventType === 'input') {
      this.emits?.('input', eventItem, currentValue)
      this.emits?.('inputLite', currentValue)
    } else if (eventType === 'change') {
      this.emits?.('change', eventItem, currentValue)
      this.emits?.('changeLite', currentValue)
    }
  }
}
