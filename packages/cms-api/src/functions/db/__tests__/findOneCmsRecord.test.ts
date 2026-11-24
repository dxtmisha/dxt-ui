import { describe, expect, it, vi } from 'vitest'
import { eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { findOneCmsRecord } from '../findOneCmsRecord'
import type { CmsDbExecutor } from '../../../types/cmsDbTypes'

const testTable = pgTable('test_find_one', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull()
})

describe('findOneCmsRecord', () => {
  it('returns undefined without querying when whereCondition is undefined', async () => {
    const select = vi.fn()
    const executor = { select } as unknown as CmsDbExecutor

    expect(await findOneCmsRecord(executor, testTable, undefined)).toBeUndefined()
    expect(select).not.toHaveBeenCalled()
  })

  it('returns the first matched record or undefined when none match', async () => {
    const row = { id: 1, name: 'Test' }
    const limit = vi.fn().mockResolvedValueOnce([row]).mockResolvedValueOnce([])
    const where = vi.fn(() => ({ limit }))
    const from = vi.fn(() => ({ where }))
    const select = vi.fn(() => ({ from }))
    const executor = { select } as unknown as CmsDbExecutor
    const condition = eq(testTable.id, 1)

    expect(await findOneCmsRecord<typeof row>(executor, testTable, condition)).toEqual(row)
    expect(await findOneCmsRecord<typeof row>(executor, testTable, condition)).toBeUndefined()
    expect(select).toHaveBeenCalledWith()
    expect(from).toHaveBeenCalledWith(testTable)
    expect(where).toHaveBeenCalledWith(condition)
    expect(limit).toHaveBeenCalledWith(1)
  })

  it('passes custom select fields to executor.select when provided', async () => {
    const row = { id: 1 }
    const limit = vi.fn().mockResolvedValueOnce([row])
    const where = vi.fn(() => ({ limit }))
    const from = vi.fn(() => ({ where }))
    const select = vi.fn(() => ({ from }))
    const executor = { select } as unknown as CmsDbExecutor
    const condition = eq(testTable.id, 1)
    const selectFields = { id: testTable.id }

    expect(await findOneCmsRecord<typeof row>(executor, testTable, condition, selectFields)).toEqual(row)
    expect(select).toHaveBeenCalledWith(selectFields)
    expect(from).toHaveBeenCalledWith(testTable)
    expect(where).toHaveBeenCalledWith(condition)
    expect(limit).toHaveBeenCalledWith(1)
  })
})
