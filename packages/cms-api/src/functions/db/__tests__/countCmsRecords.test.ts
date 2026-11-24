import { describe, expect, it, vi } from 'vitest'
import { eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { countCmsRecords } from '../countCmsRecords'
import type { CmsDbExecutor } from '../../../types/cmsDbTypes'

const testTable = pgTable('test_count_records', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull()
})

describe('countCmsRecords', () => {
  it('returns matched record count with and without whereCondition and falls back to 0 on empty rows', async () => {
    const where = vi.fn()
      .mockResolvedValueOnce([{ count: 5 }])
      .mockResolvedValueOnce([{ count: 2 }])
      .mockResolvedValueOnce([])
    const from = vi.fn(() => ({ where }))
    const select = vi.fn(() => ({ from }))
    const executor = { select } as unknown as CmsDbExecutor
    const condition = eq(testTable.id, 1)

    expect(await countCmsRecords(executor, testTable)).toBe(5)
    expect(await countCmsRecords(executor, testTable, condition)).toBe(2)
    expect(await countCmsRecords(executor, testTable, condition)).toBe(0)

    expect(select).toHaveBeenCalledTimes(3)
    expect(from).toHaveBeenCalledWith(testTable)
    expect(where).toHaveBeenNthCalledWith(1, undefined)
    expect(where).toHaveBeenNthCalledWith(2, condition)
  })
})
