import { computed, ref } from 'vue'
import type { MotionTransformEmitOptions } from '../MotionTransform'

/**
 * Class for managing the open/close state of ListGroup component.
 * Handles the visibility state and provides computed properties and methods
 * for controlling group expansion and collapse.
 *
 * Класс для управления состоянием открытия/закрытия компонента ListGroup.
 * Управляет состоянием видимости и предоставляет вычисляемые свойства и методы
 * для контроля разворачивания и сворачивания группы.
 */
export class ListGroupOpen<T extends { open?: boolean }> {
  /**
   * Internal reactive state for group open/close status.
   * This state is independent from props and can be controlled programmatically.
   *
   * Внутреннее реактивное состояние для статуса открытия/закрытия группы.
   * Это состояние независимо от пропсов и может контролироваться программно.
   */
  readonly open = ref<boolean>(false)

  /**
   * Constructor initializes the ListGroupOpen with component props.
   *
   * Конструктор инициализирует ListGroupOpen с пропсами компонента.
   * @param props - ListGroup component properties / свойства компонента ListGroup
   */
  constructor(
    protected readonly props: T
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
