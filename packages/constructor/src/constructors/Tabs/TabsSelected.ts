// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import {
  DesignLifecycleAbstract,
  getFirst,
  hasKey,
  isNull,
  isObjectNotArray,
  isSelected,
  isString,
  type ListSelectedItem,
  type ListSelectedList
} from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
import type { MotionAxisSelectedValue } from '../MotionAxis'
import type { TabsProps } from './props'

/**
 * Class for managing and synchronizing the selected tab element.
 * Handles initial selection resolution, reactive prop watching within component lifecycle, and lazy model emission.
 *
 * Класс для управления и синхронизации выбранного элемента вкладки.
 * Обрабатывает определение начального выбора, реактивное отслеживание свойств в жизненном цикле компонента и ленивую отправку событий модели.
 */
export class TabsSelected extends DesignLifecycleAbstract {
  /** Stop handle for the reactive props watcher / Функция остановки реактивного наблюдателя свойств */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for initializing selected tab state management.
   *
   * Конструктор для инициализации управления состоянием выбранной вкладки.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param model lazy getter returning model synchronization helper / ленивый геттер, возвращающий помощник синхронизации модели
   */
  constructor(
    protected readonly props: Readonly<TabsProps>,
    protected readonly model: () => ModelInclude<ListSelectedList | undefined>
  ) {
    super()

    this.item.value = this.initSelected()
  }

  /** Reactive ref holding the currently selected tab value / Реактивная ссылка, содержащая текущее выбранное значение вкладки */
  readonly item = ref<ListSelectedList>()

  /**
   * Checks whether the specified value matches the currently selected tab.
   *
   * Проверяет, соответствует ли указанное значение текущей выбранной вкладке.
   * @param selected value to check / значение для проверки
   * @returns true if selected / true, если выбрано
   */
  is(selected?: ListSelectedItem): boolean {
    return isSelected(selected, this.item.value)
  }

  /**
   * Returns the selected value converted to a string identifier for MotionAxis, preserving undefined for nullish values.
   *
   * Возвращает выбранное значение в виде строкового идентификатора для MotionAxis, сохраняя undefined для пустых значений.
   * @returns stringified selected value or undefined / строковое представление выбранного значения или undefined
   */
  getString(): MotionAxisSelectedValue {
    const value = this.item.value

    if (isNull(value)) {
      return undefined
    }

    return String(value)
  }

  /**
   * Sets the selected tab value and emits model updates when changed.
   *
   * Устанавливает выбранное значение вкладки и испускает обновления модели при изменении.
   * @param selected selected tab value / выбранное значение вкладки
   * @returns instance of this selection class / текущий экземпляр класса выбора
   */
  readonly set = (selected?: ListSelectedList): this => {
    if (this.item.value !== selected) {
      this.item.value = selected
      this.model().emit(selected)
    }

    return this
  }

  /**
   * Registers reactive watcher for modelSelected and selected props on mount.
   *
   * Регистрирует реактивный наблюдатель для свойств modelSelected и selected при монтировании.
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
   * Extracts the value of the first tab item from props.tabs or props.tabsNavigationAttrs respecting keyValue.
   *
   * Извлекает значение первого элемента вкладки из props.tabs или props.tabsNavigationAttrs с учётом keyValue.
   * @returns first tab value or undefined / значение первой вкладки или undefined
   */
  protected getFirstValue(): ListSelectedList | undefined {
    const tabs = this.props.tabs
    const tabsConfig = isObjectNotArray(tabs) && hasKey(tabs, 'list')
      ? tabs
      : undefined
    const list = tabsConfig
      ? tabsConfig.list
      : (tabs ?? this.props.tabsNavigationAttrs?.list)
    const first = getFirst(list)

    if (isObjectNotArray(first)) {
      const configKeyValue = tabsConfig && isString(tabsConfig.keyValue)
        ? tabsConfig.keyValue
        : undefined
      const valueKey = configKeyValue
        ?? this.props.tabsNavigationAttrs?.keyValue
        ?? 'value'

      return (first as Record<string, unknown>)[valueKey] as ListSelectedList | undefined
    }

    return undefined
  }

  /**
   * Resolves the initial selected value from props or the first tab entry.
   *
   * Определяет начальное выбранное значение из свойств или первого элемента вкладок.
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
    if (this.item.value !== selected) {
      this.item.value = selected
    }
  }
}
