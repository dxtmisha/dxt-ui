import { seedCmsDatabase, useCmsDb } from '@dxtmisha/cms-api'

import type { CmsNitroInitResult, CmsNitroOptions } from '../types/cmsNitroTypes'

/**
 * Configures the CMS database connection if provided and seeds default or custom CMS records.
 *
 * Настраивает подключение к базе данных CMS при наличии строки подключения и заполняет стандартные или пользовательские записи CMS.
 * @param options Database connection and seed configuration / Конфигурация подключения к БД и заполнения данных
 * @returns Seeded permissions and roles lists / Списки добавленных или существующих прав доступа и ролей
 */
export async function seedCms(
  options: CmsNitroOptions = {}
): Promise<CmsNitroInitResult> {
  const { getCmsDb, setCmsDbConnectionString } = useCmsDb()

  if (options.connectionString) {
    setCmsDbConnectionString(options.connectionString)
  }

  return seedCmsDatabase(getCmsDb(), {
    permissions: options.permissions,
    roles: options.roles
  })
}
