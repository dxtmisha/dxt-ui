import type { CmsNewCreatedOrigin } from '../../types/cmsDbTypes'

/**
 * Standard default created origins for CMS (with translation keys) /
 * Стандартный набор источников создания записей по умолчанию для CMS (с ключами перевода)
 */
export const CMS_DEFAULT_CREATED_ORIGINS: readonly CmsNewCreatedOrigin[] = [
  // System seed or internal automation / Системная инициализация или внутренняя автоматизация
  {
    code: 'system',
    name: 'cms-created_origin-system',
    description: 'cms-created_origin-system_description'
  },
  // Created via admin panel / Создано через панель администратора
  {
    code: 'admin',
    name: 'cms-created_origin-admin',
    description: 'cms-created_origin-admin_description'
  },
  // Created directly by end user / Создано самим пользователем
  {
    code: 'user',
    name: 'cms-created_origin-user',
    description: 'cms-created_origin-user_description'
  },
  // Created via public web interface / Создано через публичный веб-интерфейс
  {
    code: 'web',
    name: 'cms-created_origin-web',
    description: 'cms-created_origin-web_description'
  },
  // Created via external API integration / Создано через внешний API
  {
    code: 'api',
    name: 'cms-created_origin-api',
    description: 'cms-created_origin-api_description'
  }
]
