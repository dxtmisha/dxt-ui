import { seedCmsPermissions } from './seedCmsPermissions'
import { seedCmsRoles } from './seedCmsRoles'
import type { CmsDb, CmsSeedOptions, CmsSeedResult } from '../types/cmsDbTypes'

/**
 * Seeds all default or custom CMS records (permissions and roles) idempotently into the database.
 *
 * Идемпотентно добавляет все стандартные или пользовательские записи CMS (права доступа и роли) в базу данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param options Optional custom seed lists / Необязательные пользовательские списки для инициализации
 * @returns Seeded permissions and roles lists / Списки добавленных или существующих прав доступа и ролей
 */
export async function seedCmsDatabase(
  database: CmsDb,
  options: CmsSeedOptions = {}
): Promise<CmsSeedResult> {
  const permissions = await seedCmsPermissions(database, options.permissions)
  const roles = await seedCmsRoles(database, options.roles)

  return {
    permissions,
    roles
  }
}
