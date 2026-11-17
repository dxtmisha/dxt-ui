import { seedCmsCreatedOrigins } from './seedCmsCreatedOrigins'
import { seedCmsPermissions } from './seedCmsPermissions'
import { seedCmsRoles } from './seedCmsRoles'
import type { CmsDb, CmsSeedOptions, CmsSeedResult } from '../types/cmsDbTypes'

/**
 * Seeds all default or custom CMS records (created origins, permissions, and roles) idempotently into the database.
 *
 * Идемпотентно добавляет все стандартные или пользовательские записи CMS (источники создания, права доступа и роли) в базу данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param options Optional custom seed lists / Необязательные пользовательские списки для инициализации
 * @returns Seeded created origins, permissions, and roles lists / Списки добавленных или существующих источников создания, прав доступа и ролей
 */
export async function seedCmsDatabase(
  database: CmsDb,
  options: CmsSeedOptions = {}
): Promise<CmsSeedResult> {
  const createdOrigins = await seedCmsCreatedOrigins(database, options.createdOrigins)
  const permissions = await seedCmsPermissions(database, options.permissions)
  const roles = await seedCmsRoles(database, options.roles)

  return {
    createdOrigins,
    permissions,
    roles
  }
}
