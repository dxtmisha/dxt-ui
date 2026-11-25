// ai-none

import { ref, watch } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

/**
 * Class for managing the tabindex of a code input item.
 *
 * Класс для управления tabindex элемента ввода кода.
 */
export class InputCodeItemTabIndex extends DesignLifecycleAbstract {
  /** Reactive tabindex ref / Реактивная ссылка на tabindex */
  readonly tabindex = ref<number | string | undefined>(undefined)

  /**
   * Synchronizes reactive tabindex when props.tabindex changes after mount.
   *
   * Синхронизирует реактивный tabindex при изменении props.tabindex после монтирования.
   */
  override readonly onMounted = (): void => {
    watch(
      () => this.props.tabindex,
      (value) => {
        this.tabindex.value = value
      },
      { immediate: true }
    )
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   */
  constructor(
    protected readonly props: Readonly<{ tabindex?: number | string }>
  ) {
    super()
    this.tabindex.value = props.tabindex
  }

  /**
   * Get the current tabindex.
   *
   * Получить текущий tabindex.
   * @returns current tabindex or undefined / текущий tabindex или undefined
   */
  get(): number | string | undefined {
    return this.tabindex.value
  }

  /**
   * Set the tabindex value.
   *
   * Установить значение tabindex.
   * @param value new tabindex value / новое значение tabindex
   */
  readonly set = (value: number | string | undefined): void => {
    this.tabindex.value = value
  }

  /**
   * Reset the tabindex value to default.
   *
   * Сбросить значение tabindex до начального.
   */
  readonly reset = (): void => {
    this.tabindex.value = this.props.tabindex
  }
}
