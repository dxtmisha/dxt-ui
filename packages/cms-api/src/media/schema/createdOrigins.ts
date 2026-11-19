import { pgTable } from 'drizzle-orm/pg-core'
import { getCmsBaseColumns } from '../../functions/schema/getCmsBaseColumns'
import { getCmsBasicInfoColumns } from '../../functions/schema/getCmsBasicInfoColumns'
import { getCmsCodeColumn } from '../../functions/schema/getCmsCodeColumn'

/**
 * Created origins table schema for CMS /
 * Схема таблицы источников создания записей для CMS
 */
export const createdOrigins = /* #__PURE__ */ pgTable('created_origins', {
  // Base columns
  ...getCmsBaseColumns(),

  // Identifiers
  ...getCmsCodeColumn(),

  // Basic info
  ...getCmsBasicInfoColumns()
})
