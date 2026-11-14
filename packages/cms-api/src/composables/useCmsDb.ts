import { CmsDbInstance } from '../classes/CmsDbInstance'
import type { CmsDb } from '../types/cmsDbTypes'

/**
 * Return interface for the useCmsDb composable /
 * Интерфейс возвращаемого значения хука useCmsDb
 */
export interface UseCmsDbReturn {
  /** Returns the managed CMS database instance / Возвращает управляемый экземпляр базы данных CMS */
  getCmsDb: () => CmsDb
  /** Updates the PostgreSQL connection URI / Обновляет строку подключения PostgreSQL */
  setCmsDbConnectionString: (connectionString?: string) => void
  /** Closes the PostgreSQL client connection / Закрывает соединение клиента PostgreSQL */
  closeCmsDb: () => Promise<void>
}

let instance: CmsDbInstance | undefined

/**
 * Composable that exposes database lifecycle methods backed by a shared CmsDbInstance.
 *
 * Хук, который использует общий экземпляр CmsDbInstance и возвращает методы управления подключением.
 * @returns Object with getCmsDb, setCmsDbConnectionString and closeCmsDb methods / Объект с методами getCmsDb, setCmsDbConnectionString и closeCmsDb
 */
export function useCmsDb(): UseCmsDbReturn {
  if (!instance) {
    instance = new CmsDbInstance()
  }

  const dbInstance = instance

  return {
    getCmsDb: () => dbInstance.get(),
    setCmsDbConnectionString: (connectionString?: string) => {
      dbInstance.setConnectionString(connectionString)
    },
    closeCmsDb: () => dbInstance.close()
  }
}
