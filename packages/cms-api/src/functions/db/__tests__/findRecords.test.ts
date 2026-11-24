import { describe, expect, it, vi } from 'vitest'
import { desc, eq } from 'drizzle-orm'
import { permissions } from '../../../media/schema/permissions'
import { findRecords } from '../findRecords'
import type { CmsDb } from '../../../types/cmsDbTypes'

interface MockChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  offset: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

function createChain(rows: unknown[]): MockChain {
  const chain: MockChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    offset: vi.fn(() => chain),
    then: (onFulfilled, onRejected) => Promise.resolve(rows).then(onFulfilled, onRejected)
  }

  return chain
}

describe('findRecords', () => {
  it('queries records with default ID ordering and optional pagination/projection/orderBy', async () => {
    const simpleChain = createChain([{ id: 1 }, { id: 2 }])
    const paginatedChain = createChain([{ id: 3 }])
    const chains = [simpleChain, paginatedChain]

    const db = {
      select: vi.fn(() => chains.shift()!)
    } as unknown as CmsDb

    expect(await findRecords<{ id: number }>(db, permissions)).toEqual([{ id: 1 }, { id: 2 }])
    expect(simpleChain.from).toHaveBeenCalledWith(permissions)
    expect(simpleChain.where).toHaveBeenCalledWith(undefined)
    expect(simpleChain.orderBy).toHaveBeenCalledTimes(1)
    expect(simpleChain.limit).not.toHaveBeenCalled()
    expect(simpleChain.offset).not.toHaveBeenCalled()

    const condition = eq(permissions.code, 'users:read')
    expect(await findRecords<{ id: number }>(
      db,
      permissions,
      condition,
      {
        select: { id: permissions.id },
        orderBy: [desc(permissions.createdAt), desc(permissions.id)],
        limit: 25,
        offset: 50
      }
    )).toEqual([{ id: 3 }])

    expect(db.select).toHaveBeenNthCalledWith(2, { id: permissions.id })
    expect(paginatedChain.where).toHaveBeenCalledWith(condition)
    expect(paginatedChain.orderBy).toHaveBeenCalledTimes(1)
    expect(paginatedChain.limit).toHaveBeenCalledWith(25)
    expect(paginatedChain.offset).toHaveBeenCalledWith(50)
  })
})
