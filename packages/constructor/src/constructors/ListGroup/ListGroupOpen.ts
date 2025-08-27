import { computed, ref } from 'vue'
import type { MotionTransformEmitOptions } from '../MotionTransform'
import type { ListGroupPropsBasic } from './props'

export class ListGroupOpen {
  readonly open = ref<boolean>(false)

  constructor(
    protected readonly props: ListGroupPropsBasic
  ) {
  }

  /**
   * Returns information about the opening status.
   *
   * Возвращает информацию о статусе открытия.
   */
  readonly is = computed<boolean>(
    () => this.open.value || Boolean(this.props.open)
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
