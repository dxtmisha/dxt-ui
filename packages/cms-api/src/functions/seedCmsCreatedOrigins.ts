import { inArray } from 'drizzle-orm'
import { CMS_DEFAULT_CREATED_ORIGINS } from '../media/defaults/cmsDefaultCreatedOrigins'
import { createdOrigins } from '../media/schema/createdOrigins'
import type {
  CmsCreatedOrigin,
  CmsDb,
  CmsNewCreatedOrigin
} from '../types/cmsDbTypes'

/**
 * Seeds default or custom created origins idempotently into the database.
 *
 * Идемпотентно добавляет стандартные или пользовательские источники создания записей в базу данных.
 * @param database Typed Drizzle database instance / Типизированный экземпляр базы данных Drizzle
 * @param items List of created origins to seed / Список источников создания для инициализации
 * @returns List of persisted created origin records / Список сохранённых записей источников создания
 */
export async function seedCmsCreatedOrigins(
  database: CmsDb,
  items: readonly CmsNewCreatedOrigin[] = CMS_DEFAULT_CREATED_ORIGINS
): Promise<CmsCreatedOrigin[]> {
  if (items.length === 0) {
    return []
  }

  await database
    .insert(createdOrigins)
    .values([...items])
    .onConflictDoNothing({ target: createdOrigins.code })

  const codes = items.map(item => item.code)

  return database
    .select()
    .from(createdOrigins)
    .where(inArray(createdOrigins.code, codes))
}
