import process from 'node:process'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { seedCmsDatabase, useCmsDb } from '@dxtmisha/cms-api'

import type { CmsNitroInitResult, CmsNitroSeedOptions } from '../types/cmsNitroTypes'

/**
 * Runs standalone CMS database seeding with error handling and automatic connection cleanup.
 *
 * Запускает автономное заполнение базы данных CMS с обработкой ошибок и закрытием соединения.
 * @param options Seed configuration / Конфигурация заполнения базы данных
 * @returns Seeded permissions and roles lists or undefined on failure / Списки прав доступа и ролей или undefined при ошибке
 */
export async function runCmsSeed(
  options: CmsNitroSeedOptions = {}
): Promise<CmsNitroInitResult | undefined> {
  const { getCmsDb, setCmsDbConnectionString, closeCmsDb } = useCmsDb()

  try {
    if (options.connectionString) {
      setCmsDbConnectionString(options.connectionString)
    }

    const result = await seedCmsDatabase(getCmsDb(), {
      permissions: options.permissions,
      roles: options.roles
    })

    console.log(
      `Seeded ${result.permissions.length} CMS permissions and ${result.roles.length} CMS roles.`
    )

    return result
  } catch (error) {
    ErrorCenter.on({
      group: 'cms',
      code: 'seed',
      details: error
    })
    console.error('Failed to seed CMS database:', error)
    process.exitCode = 1

    return undefined
  } finally {
    if (options.onClose) {
      await options.onClose()
    } else {
      await closeCmsDb()
    }
  }
}
