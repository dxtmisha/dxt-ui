import type { NitroApp } from 'nitro/types'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { seedCmsDatabase, useCmsDb } from '@dxtmisha/cms-api'

import type { CmsNitroInitResult, CmsNitroOptions } from '../types/cmsNitroTypes'

/**
 * Initialize CMS database plugin for Nitro and seed default records on server startup.
 *
 * Инициализация плагина базы данных CMS для Nitro и заполнение стандартных записей при старте сервера.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param options Plugin configuration / Конфигурация плагина
 * @returns Seeded permissions and roles lists / Списки добавленных или обновлённых прав доступа и ролей
 */
export async function initPluginCms<N = NitroApp>(
  _: N,
  options: CmsNitroOptions = {}
): Promise<CmsNitroInitResult> {
  try {
    const { getCmsDb, setCmsDbConnectionString } = useCmsDb()

    if (options.connectionString) {
      setCmsDbConnectionString(options.connectionString)
    }

    return await seedCmsDatabase(getCmsDb(), {
      permissions: options.permissions,
      roles: options.roles
    })
  } catch (error) {
    ErrorCenter.on({
      group: 'cms',
      code: 'initPlugin',
      details: error
    })

    throw error
  }
}
