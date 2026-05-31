import { ref, watch, type ToRefs, onMounted } from 'vue'
import { getFirst, isSelected, type ListSelectedList } from '@dxtmisha/functional'

import type { TabsNavigationProps } from './props'

/**
 * Selection management class for managing, tracking, and synchronizing selected tab item states.
 *
 * Класс управления выделением для контроля, отслеживания и синхронизации выбранных состояний вкладок.
 */
export class TabsNavigationSelected {
  /** Reactive ref holding the intended selected state / Реактивная ссылка, содержащая запланированное выбранное состояние */
  readonly item = ref<ListSelectedList>()

  /** Reactive ref holding the actual rendered/transitioned selected state / Реактивная ссылка, содержащая фактическое отрендеренное/анимированное выбранное состояние */
  readonly actualItem = ref<ListSelectedList>()

  /**
   * Constructor for initializing selection management helper.
   *
   * Конструктор для инициализации помощника управления выделением.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param refs reactive references of properties / реактивные ссылки свойств
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>
  ) {
    const selected = props.selected || getFirst(props.list)?.value

    this.item.value = selected
    this.actualItem.value = selected

    onMounted(() => {
      watch(
        [refs.selected],
        () => this.set(props.selected)
      )
    })
  }

  /**
   * Checks whether a specific tab value is currently selected.
   *
   * Проверяет, выбрано ли конкретное значение вкладки в данный момент.
   * @param selected value to check / значение для проверки
   * @returns true if selected / true, если выбрано
   */
  isSelected(selected?: string) {
    return isSelected(selected, this.actualItem.value)
  }

  /**
   * Sets the intended selection value index.
   *
   * Устанавливает запланированное выбранное значение индекса.
   * @param selected selected value index / выбранное индексное значение
   * @returns instance of this selection class / текущий экземпляр класса выделения
   */
  set(selected?: ListSelectedList): this {
    this.item.value = selected
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
}
