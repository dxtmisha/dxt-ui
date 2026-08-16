import type { ConstrEmit } from '@dxtmisha/functional'

import type { ClockDialEventItem } from './basicTypes'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialValue } from './ClockDialValue'
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
   * @param valueItem time values manager / менеджер значений времени
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly list: ClockDialList,
    protected readonly valueItem: ClockDialValue,
    protected readonly emits?: ConstrEmit<ClockDialEmits>
  ) { }

  /**
   * Emits input or change event with complete clock payload and numeric value.
   *
   * Испускает событие input или change с полной полезной нагрузкой часов и числовым значением.
   * @param eventType type of event to emit ('input' or 'change') / тип испускаемого события ('input' или 'change')
   */
  emit(eventType: 'input' | 'change' = 'input'): void {
    const currentValue = this.valueItem.value
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
