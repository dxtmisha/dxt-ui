import { computed, ref } from 'vue'
import { Api, executePromise, isFunction, type ListRecord } from '@dxtmisha/functional'

import type { MenuProps } from './props'

/**
 * Class for working with list data requests.
 *
 * Класс для работы с запросами данных списка.
 */
export class MenuRequest {
  readonly progress = ref<boolean>(false)

  protected readonly buffer = ref<ListRecord>()

  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: MenuProps
  ) {
  }

  /**
   * Returns current list data.
   *
   * Возвращает текущие данные списка.
   */
  readonly item = computed(() => this.buffer.value ?? this.props.list ?? [])

  /**
   * Checks whether a request is needed.
   *
   * Проверяет, нужно ли делать запрос.
   */
  is(): boolean {
    return Boolean(
      this.props.ajax
      || this.props.request
    )
  }

  /**
   * Prepares data.
   *
   * Подготавливает данные.
   */
  async preparation(): Promise<boolean> {
    await this.update()

    return true
  }

  /**
   * Updates data.
   *
   * Обновляет данные.
   */
  async update(): Promise<void> {
    await this.read(data => (this.buffer.value = data))
  }

  /**
   * Returns data from AJAX or request function.
   *
   * Возвращает данные из AJAX или функции запроса.
   */
  protected async getAjax(): Promise<ListRecord | undefined> {
    if (isFunction(this.props.ajax)) {
      return executePromise(this.props.ajax)
    }

    return await Api.request<Record<string, any>>({
      path: this.props.ajax,
      ...this.props.request
    })
  }

  /**
   * Executes a request to retrieve data.
   *
   * Выполняет запрос для получения данных.
   */
  protected async read(callback: (data: ListRecord | undefined) => void): Promise<void> {
    if (this.is()) {
      if (
        this.props.cache
        && this.buffer.value !== undefined
      ) {
        callback(this.buffer.value)
      }

      this.progress.value = true

      callback(await this.getAjax())

      this.progress.value = false
    }
  }
}
