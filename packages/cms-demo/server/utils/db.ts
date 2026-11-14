import { type CmsDb, useCmsDb } from '@dxtmisha/cms-api'

/**
 * Get shared CMS database instance.
 *
 * Получить общий экземпляр базы данных CMS.
 * @returns Drizzle CMS database instance / Экземпляр базы данных Drizzle CMS
 */
export function getCmsDb(): CmsDb {
  return useCmsDb().getCmsDb()
}

/**
 * Close shared CMS database connection pool.
 *
 * Закрыть общий пул соединений с базой данных CMS.
 */
export async function closeCmsDb(): Promise<void> {
  await useCmsDb().closeCmsDb()
}
