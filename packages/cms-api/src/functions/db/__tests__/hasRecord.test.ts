import { describe, expect, it, vi } from 'vitest'
import { eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { hasRecord } from '../hasRecord'
import type { CmsDbExecutor } from '../../../types/cmsDbTypes'

const testTable = pgTable('test_has_record', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull()
})

describe('hasRecord', () => {
  it('returns false without querying when whereCondition is undefined', async () => {
    const select = vi.fn()
    const executor = { select } as unknown as CmsDbExecutor

    expect(await hasRecord(executor, testTable, undefined)).toBe(false)
    expect(select).not.toHaveBeenCalled()
  })

  it('queries only id column with limit(1) and returns true when record exists or false when missing', async () => {
    const limit = vi.fn().mockResolvedValueOnce([{ id: 1 }]).mockResolvedValueOnce([])
    const where = vi.fn(() => ({ limit }))
    const from = vi.fn(() => ({ where }))
    const select = vi.fn(() => ({ from }))
    const executor = { select } as unknown as CmsDbExecutor
    const condition = eq(testTable.code, 'admin')

    expect(await hasRecord(executor, testTable, condition)).toBe(true)
    expect(await hasRecord(executor, testTable, condition)).toBe(false)
    expect(select).toHaveBeenCalledWith({ id: testTable.id })
    expect(from).toHaveBeenCalledWith(testTable)
    expect(where).toHaveBeenCalledWith(condition)
    expect(limit).toHaveBeenCalledWith(1)
  })
})
