import type { CmsNewPermission } from '../../types/cmsDbTypes'

/**
 * Standard default permissions for CMS (with translation keys) /
 * Стандартный набор прав доступа по умолчанию для CMS (с ключами перевода)
 */
export const CMS_DEFAULT_PERMISSIONS: readonly CmsNewPermission[] = [
  // Admin panel / Админ-панель
  // Access admin panel / Доступ к панели администратора
  {
    code: 'admin:access',
    name: 'cms-permission-admin_access',
    description: 'cms-permission-admin_access_description'
  },

  // Users / Пользователи
  // View users / Просмотр пользователей
  {
    code: 'users:read',
    name: 'cms-permission-users_read',
    description: 'cms-permission-users_read_description'
  },
  // Create users / Создание пользователей
  {
    code: 'users:create',
    name: 'cms-permission-users_create',
    description: 'cms-permission-users_create_description'
  },
  // Update users / Редактирование пользователей
  {
    code: 'users:update',
    name: 'cms-permission-users_update',
    description: 'cms-permission-users_update_description'
  },
  // Delete users / Удаление пользователей
  {
    code: 'users:delete',
    name: 'cms-permission-users_delete',
    description: 'cms-permission-users_delete_description'
  },

  // Roles & permissions / Роли и права доступа
  // View roles and permissions / Просмотр ролей и прав доступа
  {
    code: 'roles:read',
    name: 'cms-permission-roles_read',
    description: 'cms-permission-roles_read_description'
  },
  // Create roles / Создание ролей
  {
    code: 'roles:create',
    name: 'cms-permission-roles_create',
    description: 'cms-permission-roles_create_description'
  },
  // Update roles and permissions / Редактирование ролей и назначение прав
  {
    code: 'roles:update',
    name: 'cms-permission-roles_update',
    description: 'cms-permission-roles_update_description'
  },
  // Delete roles / Удаление ролей
  {
    code: 'roles:delete',
    name: 'cms-permission-roles_delete',
    description: 'cms-permission-roles_delete_description'
  },

  // Content / Контент
  // View content entries / Просмотр контента и черновиков
  {
    code: 'content:read',
    name: 'cms-permission-content_read',
    description: 'cms-permission-content_read_description'
  },
  // Create content entries / Создание контента
  {
    code: 'content:create',
    name: 'cms-permission-content_create',
    description: 'cms-permission-content_create_description'
  },
  // Update content entries / Редактирование контента
  {
    code: 'content:update',
    name: 'cms-permission-content_update',
    description: 'cms-permission-content_update_description'
  },
  // Delete content entries / Удаление контента
  {
    code: 'content:delete',
    name: 'cms-permission-content_delete',
    description: 'cms-permission-content_delete_description'
  },
  // Publish content entries / Публикация и снятие с публикации контента
  {
    code: 'content:publish',
    name: 'cms-permission-content_publish',
    description: 'cms-permission-content_publish_description'
  },

  // Media / Медиафайлы
  // View media files / Просмотр медиафайлов
  {
    code: 'media:read',
    name: 'cms-permission-media_read',
    description: 'cms-permission-media_read_description'
  },
  // Upload media files / Загрузка медиафайлов
  {
    code: 'media:upload',
    name: 'cms-permission-media_upload',
    description: 'cms-permission-media_upload_description'
  },
  // Delete media files / Удаление медиафайлов
  {
    code: 'media:delete',
    name: 'cms-permission-media_delete',
    description: 'cms-permission-media_delete_description'
  },

  // Settings / Настройки
  // View system settings / Просмотр настроек CMS
  {
    code: 'settings:read',
    name: 'cms-permission-settings_read',
    description: 'cms-permission-settings_read_description'
  },
  // Update system settings / Изменение настроек CMS
  {
    code: 'settings:update',
    name: 'cms-permission-settings_update',
    description: 'cms-permission-settings_update_description'
  }
]
