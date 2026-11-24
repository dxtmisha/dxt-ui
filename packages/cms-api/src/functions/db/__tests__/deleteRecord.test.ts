import { describe, expect, it, vi } from 'vitest'
import { eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { deleteRecord } from '../deleteRecord'
import type { CmsDbExecutor } from '../../../types/cmsDbTypes'

const testTable = pgTable('test_delete_record', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull()
})

describe('deleteRecord', () => {
  it('returns false without querying when whereCondition is undefined', async () => {
    const del = vi.fn()
    const executor = { delete: del } as unknown as CmsDbExecutor

    expect(await deleteRecord(executor, testTable, undefined)).toBe(false)
    expect(del).not.toHaveBeenCalled()
  })

  it('deletes matching records using returning({ id }) and returns true when rows are deleted', async () => {
    const returning = vi.fn().mockResolvedValueOnce([{ id: 1 }]).mockResolvedValueOnce([])
    const where = vi.fn(() => ({ returning }))
    const del = vi.fn(() => ({ where }))
    const executor = { delete: del } as unknown as CmsDbExecutor
    const condition = eq(testTable.id, 1)

    expect(await deleteRecord(executor, testTable, condition)).toBe(true)
    expect(await deleteRecord(executor, testTable, condition)).toBe(false)
    expect(del).toHaveBeenCalledWith(testTable)
    expect(where).toHaveBeenCalledWith(condition)
    expect(returning).toHaveBeenCalledWith({ id: testTable.id })
  })
})
