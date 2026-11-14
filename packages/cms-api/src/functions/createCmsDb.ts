import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { cmsSchema } from '../media/schema/cmsSchema'
import type { CmsDb } from '../types/cmsDbTypes'

/**
 * Creates a Drizzle PostgreSQL database instance for CMS.
 *
 * Создаёт экземпляр базы данных Drizzle PostgreSQL для CMS.
 * @param connectionString PostgreSQL connection URI / Строка подключения к PostgreSQL
 * @returns Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 */
export function createCmsDb(connectionString: string): CmsDb {
  const client = postgres(connectionString)

  return drizzle(client, { schema: cmsSchema })
}
