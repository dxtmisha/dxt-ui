import { describe, expect, it, vi } from 'vitest'
import { CMS_DEFAULT_CREATED_ORIGINS } from '../../media/defaults/cmsDefaultCreatedOrigins'
import { seedCmsCreatedOrigins } from '../seedCmsCreatedOrigins'
import { seedCmsDatabase } from '../seedCmsDatabase'
import type { CmsDb } from '../../types/cmsDbTypes'

interface MockSeedChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  values: ReturnType<typeof vi.fn>
  onConflictDoNothing: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

function createSeedChain(resolveNext: () => unknown): MockSeedChain {
  let resolved = false
  let cachedValue: unknown

  const chain: MockSeedChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    values: vi.fn(() => chain),
    onConflictDoNothing: vi.fn(() => chain),
    then: (onFulfilled, onRejected) => {
      if (!resolved) {
        resolved = true
        cachedValue = resolveNext()
      }

      return Promise.resolve(cachedValue).then(onFulfilled, onRejected)
    }
  }

  return chain
}

describe('seedCmsCreatedOrigins & seedCmsDatabase', () => {
  it('returns an empty array without querying when items list is empty', async () => {
    const db = {
      insert: vi.fn(),
      select: vi.fn()
    } as unknown as CmsDb

    expect(await seedCmsCreatedOrigins(db, [])).toEqual([])
    expect((db as unknown as { insert: ReturnType<typeof vi.fn> }).insert).not.toHaveBeenCalled()
  })

  it('seeds default created origins idempotently and returns persisted rows', async () => {
    const persisted = CMS_DEFAULT_CREATED_ORIGINS.map((item, index) => ({
      id: index + 1,
      code: item.code,
      name: item.name,
      description: item.description ?? null,
      createdAt: new Date('2026-11-18T00:00:00.000Z'),
      updatedAt: new Date('2026-11-18T00:00:00.000Z')
    }))

    const insertValuesCalls: unknown[] = []
    const db = {
      insert: vi.fn(() => {
        const chain = createSeedChain(() => undefined)
        chain.values = vi.fn((arg: unknown) => {
          insertValuesCalls.push(arg)
          return chain
        })
        return chain
      }),
      select: vi.fn(() => createSeedChain(() => persisted))
    } as unknown as CmsDb

    const result = await seedCmsCreatedOrigins(db)

    expect(result).toEqual(persisted)
    expect(insertValuesCalls[0]).toEqual([...CMS_DEFAULT_CREATED_ORIGINS])
  })

  it('seeds createdOrigins before permissions and roles in seedCmsDatabase', async () => {
    const callOrder: string[] = []
    const selectResults = [
      [{ id: 1, code: 'system' }],
      [{ id: 1, code: 'admin:access' }],
      [{ id: 1, code: 'admin' }],
      [{ id: 1, code: 'admin:access' }]
    ]

    const db = {
      insert: vi.fn((table: unknown) => {
        callOrder.push(`insert:${String((table as Record<symbol, unknown>)[Symbol.for('drizzle:Name')] ?? 'unknown')}`)
        return createSeedChain(() => undefined)
      }),
      select: vi.fn(() => createSeedChain(() => selectResults.shift() ?? []))
    } as unknown as CmsDb

    const result = await seedCmsDatabase(db, {
      createdOrigins: [{ code: 'system', name: 'System' }],
      permissions: [{ code: 'admin:access', name: 'Admin', createdOrigin: 'system' }],
      roles: [{ code: 'admin', name: 'Admin', createdOrigin: 'system', permissions: ['admin:access'] }]
    })

    expect(callOrder).toEqual([
      'insert:created_origins',
      'insert:permissions',
      'insert:roles',
      'insert:role_permissions'
    ])
    expect(result.createdOrigins).toHaveLength(1)
    expect(result.permissions).toHaveLength(1)
    expect(result.roles).toHaveLength(1)
  })
})
