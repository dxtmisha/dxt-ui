import { computed, ref } from 'vue'
import { ListData } from '@dxt-ui/functional'
import type { MotionTransformEmitOptions } from '../MotionTransform'

export class ListGroupOpen {
  readonly open = ref<boolean>(false)

  constructor(
    protected readonly data: ListData
  ) {
  }

  /**
   * Returns information about the opening status.
   *
   * Возвращает информацию о статусе открытия.
   */
  readonly is = computed<boolean>(() => this.open.value
    || this.data.isSelected.value
    || this.data.isFocus()
    || this.data.isHighlight()
  )

  /**
   * Events for opening the element.
   *
   * События для открытия элемента.
   * @param options event parameters/ параметры события
   */
  readonly onOpen = (
    { open }: MotionTransformEmitOptions
  ) => {
    if (this.open.value !== open) {
      this.open.value = open
    }
  }
}
