import { ref, watch } from 'vue'

/**
 * Class for managing the tabindex of a code input item.
 *
 * Класс для управления tabindex элемента ввода кода.
 */
export class InputCodeItemTabIndex {
  /** Reactive tabindex ref / Реактивная ссылка на tabindex */
  readonly tabindex = ref<number | string | undefined>(undefined)

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   */
  constructor(
    protected readonly props: { tabindex?: number | string }
  ) {
    watch(
      () => this.props.tabindex,
      (value) => {
        this.tabindex.value = value
      },
      { immediate: true }
    )
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
  readonly set = (value: number | string | undefined) => {
    this.tabindex.value = value
  }

  /**
   * Reset the tabindex value to default.
   *
   * Сбросить значение tabindex до начального.
   */
  readonly reset = () => {
    this.tabindex.value = this.props.tabindex
  }
}
