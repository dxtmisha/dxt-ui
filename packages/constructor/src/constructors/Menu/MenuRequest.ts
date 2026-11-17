// ai-none

import { computed, ref } from 'vue'
import { Api, executePromise, isFunction, type ListRecord } from '@dxtmisha/functional'

import type { MenuProps } from './props'

/**
 * Class for working with list data requests.
 *
 * Класс для работы с запросами данных списка.
 */
export class MenuRequest {
  /** Loading state flag for active requests / Флаг состояния загрузки для активных запросов */
  readonly progress = ref<boolean>(false)

  /** Cached response buffer / Буфер кэшированного ответа */
  protected readonly buffer = ref<ListRecord>()

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<MenuProps>
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
   * @returns true if ajax or request option is provided / true, если задано ajax или request
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
   * @returns promise resolving to true when preparation completes / промис, разрешающийся в true по завершении подготовки
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
   * @returns fetched list record or undefined / загруженный список данных или undefined
   */
  protected async getAjax(): Promise<ListRecord | undefined> {
    if (isFunction(this.props.ajax)) {
      return executePromise(this.props.ajax)
    }

    return await Api.request<ListRecord>({
      path: this.props.ajax,
      ...this.props.request
    })
  }

  /**
   * Executes a request to retrieve data.
   *
   * Выполняет запрос для получения данных.
   * @param callback callback invoked with retrieved data / коллбэк, вызываемый с полученными данными
   */
  protected async read(callback: (data: ListRecord | undefined) => void): Promise<void> {
    if (this.is()) {
      if (
        this.props.cache
        && this.buffer.value !== undefined
      ) {
        callback(this.buffer.value)
        return
      }

      this.progress.value = true

      try {
        callback(await this.getAjax())
      } finally {
        this.progress.value = false
      }
    }
  }
}
