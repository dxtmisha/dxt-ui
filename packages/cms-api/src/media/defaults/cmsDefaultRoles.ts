import type { CmsRoleSeed } from '../../types/cmsDbTypes'

/**
 * Standard default roles for CMS (with translation keys and permission codes) /
 * Стандартный набор ролей по умолчанию для CMS (с ключами перевода и кодами прав доступа)
 */
export const CMS_DEFAULT_ROLES: readonly CmsRoleSeed[] = [
  // Full unrestricted access to all CMS modules and settings / Полный неограниченный доступ ко всем модулям и настройкам CMS
  {
    code: 'super_admin',
    name: 'cms-role-super_admin',
    description: 'cms-role-super_admin_description',
    createdOrigin: 'system',
    permissions: [
      'admin:super',
      'admin:all',
      'admin:access'
    ]
  },
  // Manage users, content, media, and settings / Управление пользователями, контентом, медиафайлами и настройками
  {
    code: 'admin',
    name: 'cms-role-admin',
    description: 'cms-role-admin_description',
    createdOrigin: 'system',
    permissions: [
      'admin:all',
      'admin:access'
    ]
  },
  // Create, edit, delete, and publish content and media / Создание, редактирование, удаление и публикация контента и медиафайлов
  {
    code: 'editor',
    name: 'cms-role-editor',
    description: 'cms-role-editor_description',
    createdOrigin: 'system',
    permissions: [
      'admin:access',
      'content:read',
      'content:create',
      'content:update',
      'content:delete',
      'content:publish',
      'media:read',
      'media:upload',
      'media:delete'
    ]
  },
  // Create and edit own content drafts and upload media / Создание и редактирование контента, а также загрузка медиафайлов
  {
    code: 'author',
    name: 'cms-role-author',
    description: 'cms-role-author_description',
    createdOrigin: 'system',
    permissions: [
      'admin:access',
      'content:read',
      'content:create',
      'content:update',
      'media:read',
      'media:upload'
    ]
  },
  // Read-only access to content and media in the admin panel / Доступ только для чтения контента и медиафайлов в админ-панели
  {
    code: 'viewer',
    name: 'cms-role-viewer',
    description: 'cms-role-viewer_description',
    createdOrigin: 'system',
    permissions: [
      'admin:access',
      'content:read',
      'media:read'
    ]
  }
]
