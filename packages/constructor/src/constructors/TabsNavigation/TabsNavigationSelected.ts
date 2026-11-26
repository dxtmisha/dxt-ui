import { ref, watch, type WatchStopHandle } from 'vue'
import {
  DesignLifecycleAbstract,
  getFirst,
  isObjectNotArray,
  isSelected,
  type ListSelectedItem,
  type ListSelectedList
} from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
import type { TabsNavigationProps } from './props'

/**
 * Selection management class for managing, tracking, and synchronizing selected tab item states.
 *
 * Класс управления выделением для контроля, отслеживания и синхронизации выбранных состояний вкладок.
 */
export class TabsNavigationSelected extends DesignLifecycleAbstract {
  /** Stop handle for the reactive props watcher / Функция остановки реактивного наблюдателя свойств */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for initializing selection management helper.
   *
   * Конструктор для инициализации помощника управления выделением.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param model lazy getter returning model synchronization helper / ленивый геттер, возвращающий помощник синхронизации модели
   */
  constructor(
    protected readonly props: Readonly<TabsNavigationProps>,
    protected readonly model: () => ModelInclude<ListSelectedList | undefined>
  ) {
    super()

    const selected = this.initSelected()

    this.item.value = selected
    this.actualItem.value = selected
  }

  /** Reactive ref holding the intended selected state / Реактивная ссылка, содержащая запланированное выбранное состояние */
  readonly item = ref<ListSelectedList>()

  /** Reactive ref holding the actual rendered/transitioned selected state / Реактивная ссылка, содержащая фактическое отрендеренное/анимированное выбранное состояние */
  readonly actualItem = ref<ListSelectedList>()

  /**
   * Checks whether a specific tab value is currently selected.
   *
   * Проверяет, выбрано ли конкретное значение вкладки в данный момент.
   * @param selected value to check / значение для проверки
   * @returns true if selected / true, если выбрано
   */
  isSelected(selected?: ListSelectedItem): boolean {
    return isSelected(selected, this.actualItem.value)
  }

  /**
   * Sets the intended selection value index and emits model updates when changed.
   *
   * Устанавливает запланированное выбранное значение индекса и испускает обновления модели при изменении.
   * @param selected selected value index / выбранное индексное значение
   * @returns instance of this selection class / текущий экземпляр класса выделения
   */
  set(selected?: ListSelectedList): this {
    if (this.item.value !== selected) {
      this.item.value = selected
      this.model().emit(selected)
    }

    return this
  }

  /**
   * Sets the actual/active selection value index after animations finish.
   *
   * Устанавливает фактическое/активное выбранное значение индекса после завершения анимации.
   * @param selected selected value index / выбранное индексное значение
   * @returns instance of this selection class / текущий экземпляр класса выделения
   */
  setActual(selected?: ListSelectedList): this {
    this.actualItem.value = selected
    return this
  }

  /**
   * Registers reactive watcher for selected and modelSelected props on mount.
   *
   * Регистрирует реактивный наблюдатель для свойств selected и modelSelected при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = watch(
      () => this.props.modelSelected ?? this.props.selected,
      this.update
    )
  }

  /**
   * Stops registered reactive watcher on unmount.
   *
   * Останавливает зарегистрированный реактивный наблюдатель при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Extracts the value of the first item from props.list respecting keyValue.
   *
   * Извлекает значение первого элемента из props.list с учётом keyValue.
   * @returns first item value or undefined / значение первого элемента или undefined
   */
  protected getFirstValue(): ListSelectedList | undefined {
    const first = getFirst(this.props.list)

    if (isObjectNotArray(first)) {
      const valueKey = this.props.keyValue ?? 'value'

      return (first as Record<string, unknown>)[valueKey] as ListSelectedList | undefined
    }

    return undefined
  }

  /**
   * Resolves the initial selected value from props or the first list entry.
   *
   * Определяет начальное выбранное значение из свойств или первого элемента списка.
   * @returns initial selected value or undefined / начальное выбранное значение или undefined
   */
  protected initSelected(): ListSelectedList | undefined {
    return this.props.modelSelected
      ?? this.props.selected
      ?? this.getFirstValue()
  }

  /**
   * Synchronizes internal selection from props without triggering feedback model emits.
   *
   * Синхронизирует внутренний выбор из свойств без генерации обратных событий модели.
   * @param selected incoming selected prop value / входящее значение свойства selected
   */
  protected readonly update = (selected?: ListSelectedList): void => {
    this.item.value = selected
  }
}
