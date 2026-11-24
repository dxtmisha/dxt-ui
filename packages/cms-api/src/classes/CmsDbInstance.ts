import { ErrorCenterThrow } from '@dxtmisha/functional-basic'
import { createCmsDb } from '../functions/createCmsDb'
import { CMS_DB_ERROR_GROUP } from '../media/errors/cmsDbErrorCauseList'
import type { CmsDb } from '../types/cmsDbTypes'

/**
 * Manages a lazily created CMS Drizzle database instance /
 * Управляет лениво создаваемым экземпляром базы данных Drizzle CMS
 */
export class CmsDbInstance {
  private instance: CmsDb | undefined

  /**
   * Creates a database instance manager.
   *
   * Создаёт менеджер экземпляра базы данных.
   * @param connectionString Optional PostgreSQL connection URI / Необязательная строка подключения PostgreSQL
   */
  constructor(
    private connectionString?: string
  ) {}

  /**
   * Checks whether the database instance has already been created.
   *
   * Проверяет, был ли уже создан экземпляр базы данных.
   * @returns True if initialized / True, если экземпляр инициализирован
   */
  has(): boolean {
    return this.instance !== undefined
  }

  /**
   * Returns the managed CMS database instance, creating it lazily when needed.
   *
   * Возвращает управляемый экземпляр базы данных CMS, лениво создавая его при необходимости.
   * @returns Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
   */
  get(): CmsDb {
    if (!this.instance) {
      if (!this.connectionString) {
        return ErrorCenterThrow.on({
          group: CMS_DB_ERROR_GROUP,
          code: 'connection'
        })
      }

      this.instance = createCmsDb(this.connectionString)
    }

    return this.instance
  }

  /**
   * Updates the PostgreSQL connection URI.
   *
   * Обновляет строку подключения PostgreSQL.
   * @param connectionString PostgreSQL connection URI / Строка подключения PostgreSQL
   * @returns Current instance for chaining / Текущий экземпляр для цепочки вызовов
   */
  setConnectionString(connectionString?: string): this {
    if (this.connectionString !== connectionString) {
      this.connectionString = connectionString
      void this.close()
    }

    return this
  }

  /**
   * Closes the PostgreSQL client connection for the managed CMS database instance.
   *
   * Закрывает соединение клиента PostgreSQL для управляемого экземпляра базы данных CMS.
   */
  async close(): Promise<void> {
    if (!this.instance) {
      return
    }

    const instance = this.instance
    this.instance = undefined

    const clientDescriptor = Object.getOwnPropertyDescriptor(instance, '$client')
    const client = clientDescriptor?.value as { end?: () => Promise<void> } | undefined

    if (typeof client?.end === 'function') {
      await client.end()
    }
  }
}
