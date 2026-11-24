import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CMS_DB_ERROR_GROUP } from '../../media/errors/cmsDbErrorCauseList'
import * as createCmsDbModule from '../../functions/db/createCmsDb'
import { CmsDbInstance } from '../CmsDbInstance'
import type { CmsDb } from '../../types/cmsDbTypes'

describe('CmsDbInstance', () => {
  let capturedErrors: Array<{ group?: string, code: string }>

  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
    capturedErrors = []
    ErrorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code
      })
    })
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('throws cms-db:connection when get() is called without connectionString', () => {
    const instance = new CmsDbInstance()

    expect(instance.has()).toBe(false)
    expect(() => instance.get()).toThrow(ErrorCenterError)
    expect(capturedErrors).toEqual([
      { group: CMS_DB_ERROR_GROUP, code: 'connection' }
    ])
    expect(instance.has()).toBe(false)
  })

  it('lazily creates and caches the database instance and updates via setConnectionString', async () => {
    const firstEnd = vi.fn().mockResolvedValue(undefined)
    const secondEnd = vi.fn().mockResolvedValue(undefined)
    const firstDb = { $client: { end: firstEnd } } as unknown as CmsDb
    const secondDb = { $client: { end: secondEnd } } as unknown as CmsDb

    const createSpy = vi.spyOn(createCmsDbModule, 'createCmsDb')
      .mockReturnValueOnce(firstDb)
      .mockReturnValueOnce(secondDb)

    const instance = new CmsDbInstance('postgres://localhost:5432/one')

    expect(instance.has()).toBe(false)
    expect(instance.get()).toBe(firstDb)
    expect(instance.has()).toBe(true)
    expect(instance.get()).toBe(firstDb)
    expect(createSpy).toHaveBeenCalledTimes(1)

    // Calling with the same connection string should be a no-op
    expect(instance.setConnectionString('postgres://localhost:5432/one')).toBe(instance)
    expect(instance.has()).toBe(true)
    expect(firstEnd).not.toHaveBeenCalled()

    // Changing connection string resets cached instance and closes previous client
    instance.setConnectionString('postgres://localhost:5432/two')
    expect(instance.has()).toBe(false)
    expect(firstEnd).toHaveBeenCalledTimes(1)

    expect(instance.get()).toBe(secondDb)
    expect(createSpy).toHaveBeenCalledTimes(2)

    await instance.close()
    expect(instance.has()).toBe(false)
    expect(secondEnd).toHaveBeenCalledTimes(1)

    // Closing again when already closed is a safe no-op
    await instance.close()
    expect(secondEnd).toHaveBeenCalledTimes(1)
  })
})
