import { onMounted, watch } from 'vue'
import { type ConstrEmit } from '@dxtmisha/functional'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaItem } from './SelectableAreaItem'

import type { SelectableAreaEmits } from './types'

/**
 * Class for handling selectable area events emission.
 *
 * Класс для обработки отправки событий выделяемой области.
 */
export class SelectableAreaEmit {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes classes manager / менеджер классов
   * @param item item selection helper / помощник по выбору элементов
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   */
  constructor(
    protected readonly classes: SelectableAreaClassesData,
    protected readonly item: SelectableAreaItem,
    protected readonly emits?: ConstrEmit<SelectableAreaEmits>
  ) {
    onMounted(() => {
      watch(this.item.item, this.on)
    })
  }

  /**
   * Triggers selection event.
   *
   * Вызывает событие выбора.
   */
  readonly on = (): void => {
    requestAnimationFrame(() => {
      const values = this.item.getNewArray()

      this.emits?.('selected', {
        items: this.classes.findItems(),
        itemsSelected: this.classes.findSelection(),
        selected: values,
        focus: values.length > 0 ? values[values.length - 1] : undefined
      })
    })
  }
}
