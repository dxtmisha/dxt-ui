// ai-none

import { computed, ref, watch, type WatchStopHandle } from 'vue'
import {
  type ConstrEmit,
  DesignLifecycleAbstract,
  isArray,
  isObject,
  type ListSelectedList
} from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'

import type { MenuEmits } from './types'
import type { MenuProps } from './props'

/**
 * Value manager for Menu.
 *
 * Менеджер значения для Menu.
 */
export class MenuValue extends DesignLifecycleAbstract {
  /** Reactive selected value / Реактивное выбранное значение */
  readonly value = ref<ListSelectedList>()

  /** Stop handle for the selected prop watcher / Функция остановки наблюдателя свойства selected */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param model getter returning model include manager / функция, возвращающая менеджер модели
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<MenuProps>,
    protected readonly model: () => ModelInclude<ListSelectedList | undefined>,
    protected readonly emits?: ConstrEmit<MenuEmits>
  ) {
    super()

    if (this.props.isSelectedByValue) {
      this.value.value = this.props.selected
    }
  }

  /**
   * Computed selected value.
   *
   * Вычисляемое выбранное значение.
   */
  readonly selected = computed<ListSelectedList | undefined>(() => {
    if (this.props.isSelectedByValue) {
      return this.value.value
    }

    return this.props.selected
  })

  /**
   * Mount lifecycle hook registering selected prop watcher.
   *
   * Хук монтирования, регистрирующий наблюдатель свойства selected.
   */
  override readonly onMounted = (): void => {
    this.stopWatch = watch(
      () => [this.props.isSelectedByValue, this.props.selected],
      () => {
        if (this.props.isSelectedByValue) {
          this.value.value = this.props.selected
        }
      }
    )
  }

  /**
   * Cleanup lifecycle resources on unmount.
   *
   * Очистка ресурсов жизненного цикла при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Sets a new selected value if it has changed and returns the instance for chaining.
   *
   * Устанавливает новое выбранное значение, если оно изменилось, и возвращает экземпляр для чейнинга.
   * @param value selected list value / выбранное значение списка
   * @param isEmit whether to emit the update event / нужно ли вызвать событие обновления
   * @returns current MenuValue instance / текущий экземпляр MenuValue
   */
  setValue(value: ListSelectedList | undefined, isEmit: boolean = false): this {
    if (
      this.props.isSelectedByValue
      && !isArray(value)
      && !isObject(value)
      && this.value.value !== value
    ) {
      this.value.value = value
      this.model().emit(value)

      if (isEmit) {
        this.emits?.('updateValue', value)
      }
    }

    return this
  }
}
