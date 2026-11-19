import { pgTable } from 'drizzle-orm/pg-core'
import { getCmsBaseColumns } from '../../functions/schema/getCmsBaseColumns'
import { getCmsBasicInfoColumns } from '../../functions/schema/getCmsBasicInfoColumns'
import { getCmsCodeColumn } from '../../functions/schema/getCmsCodeColumn'
import { getCmsCreatedOriginColumn } from '../../functions/schema/getCmsCreatedOriginColumn'

/**
 * Roles table schema for CMS /
 * Схема таблицы ролей для CMS
 */
export const roles = /* #__PURE__ */ pgTable('roles', {
  // Base columns
  ...getCmsBaseColumns(),

  // Identifiers
  ...getCmsCodeColumn(),

  // Basic info
  ...getCmsBasicInfoColumns(),

  // Origin
  ...getCmsCreatedOriginColumn()
})
