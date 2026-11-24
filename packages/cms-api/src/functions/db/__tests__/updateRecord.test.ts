import { describe, expect, it, vi } from 'vitest'
import { eq } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { updateRecord } from '../updateRecord'
import type { CmsDbExecutor } from '../../../types/cmsDbTypes'

const testTable = pgTable('test_update_record', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull()
})

describe('updateRecord', () => {
  it('returns false without querying when whereCondition is undefined', async () => {
    const update = vi.fn()
    const executor = { update } as unknown as CmsDbExecutor

    expect(await updateRecord(executor, testTable, undefined, { systemStatus: 'blocked' })).toBe(false)
    expect(update).not.toHaveBeenCalled()
  })

  it('updates matching records using returning({ id }) and returns true when rows are updated', async () => {
    const returning = vi.fn().mockResolvedValueOnce([{ id: 1 }]).mockResolvedValueOnce([])
    const where = vi.fn(() => ({ returning }))
    const set = vi.fn(() => ({ where }))
    const update = vi.fn(() => ({ set }))
    const executor = { update } as unknown as CmsDbExecutor
    const values = { systemStatus: 'blocked' }
    const condition = eq(testTable.id, 1)

    expect(await updateRecord(executor, testTable, condition, values)).toBe(true)
    expect(await updateRecord(executor, testTable, condition, values)).toBe(false)
    expect(update).toHaveBeenCalledWith(testTable)
    expect(set).toHaveBeenCalledWith(values)
    expect(where).toHaveBeenCalledWith(condition)
    expect(returning).toHaveBeenCalledWith({ id: testTable.id })
  })
})
