import type {
  CmsSeedOptions,
  CmsSeedResult
} from '@dxtmisha/cms-api'

/**
 * Configuration options for initializing the CMS Nitro plugin /
 * Опции конфигурации для инициализации плагина CMS для Nitro
 */
export interface CmsNitroOptions extends CmsSeedOptions {
  /** PostgreSQL connection string / Строка подключения PostgreSQL */
  connectionString?: string
}

/**
 * Configuration options for running the standalone CMS seed utility /
 * Опции конфигурации для запуска автономного заполнения базы данных CMS
 */
export interface CmsNitroSeedOptions extends CmsNitroOptions {
  /** Optional cleanup callback invoked after seeding completes / Необязательный обработчик закрытия соединения после завершения заполнения */
  onClose?: () => Promise<void> | void
}

/**
 * Result of initializing CMS database records in Nitro /
 * Результат инициализации базовых записей базы данных CMS в Nitro
 */
export type CmsNitroInitResult = CmsSeedResult
