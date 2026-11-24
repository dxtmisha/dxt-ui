import { afterEach, describe, expect, it, vi } from 'vitest'
import { CmsDbInstance } from '../../classes/CmsDbInstance'
import * as createCmsDbModule from '../../functions/db/createCmsDb'
import { useCmsDb } from '../useCmsDb'
import type { CmsDb } from '../../types/cmsDbTypes'

describe('useCmsDb', () => {
  afterEach(async () => {
    await useCmsDb().closeCmsDb()
    useCmsDb().setCmsDbConnectionString(undefined)
    vi.restoreAllMocks()
  })

  it('returns the shared CmsDbInstance singleton and delegates lifecycle helpers', async () => {
    const endMock = vi.fn().mockResolvedValue(undefined)
    const mockDb = { $client: { end: endMock } } as unknown as CmsDb
    const createSpy = vi.spyOn(createCmsDbModule, 'createCmsDb').mockReturnValue(mockDb)

    const first = useCmsDb()
    const second = useCmsDb()

    expect(first.cmsDbInstance).toBeInstanceOf(CmsDbInstance)
    expect(first.cmsDbInstance).toBe(second.cmsDbInstance)

    first.setCmsDbConnectionString('postgres://localhost:5432/test_db')
    expect(second.getCmsDb()).toBe(mockDb)
    expect(createSpy).toHaveBeenCalledWith('postgres://localhost:5432/test_db')

    await second.closeCmsDb()
    expect(endMock).toHaveBeenCalledTimes(1)
    expect(first.cmsDbInstance.has()).toBe(false)
  })
})
