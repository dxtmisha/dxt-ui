import { inArray } from 'drizzle-orm'
import { CMS_DEFAULT_PERMISSIONS } from '../media/permissions/cmsDefaultPermissions'
import { permissions } from '../media/schema/cmsSchema'
import type {
  CmsDb,
  CmsNewPermission,
  CmsPermission
} from '../types/cmsDbTypes'

/**
 * Seeds default or custom permissions idempotently into the database.
 *
 * Идемпотентно добавляет стандартные или пользовательские права доступа в базу данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param items List of permissions to seed / Список прав доступа для инициализации
 * @returns List of persisted permission records / Список сохранённых записей прав доступа
 */
export async function seedCmsPermissions(
  database: CmsDb,
  items: readonly CmsNewPermission[] = CMS_DEFAULT_PERMISSIONS
): Promise<CmsPermission[]> {
  if (items.length === 0) {
    return []
  }

  await database
    .insert(permissions)
    .values([...items])
    .onConflictDoNothing({ target: permissions.code })

  const codes = items.map(item => item.code)

  return database
    .select()
    .from(permissions)
    .where(inArray(permissions.code, codes))
}
