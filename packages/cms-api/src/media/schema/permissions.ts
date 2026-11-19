import { pgTable } from 'drizzle-orm/pg-core'
import { getCmsBaseColumns } from '../../functions/schema/getCmsBaseColumns'
import { getCmsBasicInfoColumns } from '../../functions/schema/getCmsBasicInfoColumns'
import { getCmsCodeColumn } from '../../functions/schema/getCmsCodeColumn'
import { getCmsCreatedOriginColumn } from '../../functions/schema/getCmsCreatedOriginColumn'

/**
 * Permissions table schema for CMS /
 * Схема таблицы прав доступа для CMS
 */
export const permissions = /* #__PURE__ */ pgTable('permissions', {
  // Base columns
  ...getCmsBaseColumns(),

  // Identifiers
  ...getCmsCodeColumn(),

  // Basic info
  ...getCmsBasicInfoColumns(),

  // Origin
  ...getCmsCreatedOriginColumn()
})
