import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../media/errors/cmsPermissionErrorCauseList'
import { CMS_ROLE_ERROR_GROUP } from '../../media/errors/cmsRoleErrorCauseList'
import { CmsDbResolver } from '../CmsDbResolver'

describe('CmsDbResolver', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('resolveByIds', () => {
    it('returns empty array without querying when ids is undefined or empty', async () => {
      const fetchByIds = vi.fn(async () => [])

      expect(await CmsDbResolver.resolveByIds(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByIds)).toEqual([])
      expect(await CmsDbResolver.resolveByIds(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByIds, [])).toEqual([])
      expect(fetchByIds).not.toHaveBeenCalled()
    })

    it('throws ErrorCenterError on invalid ID without calling fetchByIds', async () => {
      ErrorCenter.setIsConsole(false)
      const fetchByIds = vi.fn(async () => [])

      await expect(
        CmsDbResolver.resolveByIds(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByIds, [1, 0])
      ).rejects.toThrow(ErrorCenterError)
      await expect(
        CmsDbResolver.resolveByIds(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByIds, [-5])
      ).rejects.toThrow('Requested CMS role was not found.')
      expect(fetchByIds).not.toHaveBeenCalled()
    })

    it('throws ErrorCenterError when any ID is missing in database and returns deduplicated IDs when all exist', async () => {
      ErrorCenter.setIsConsole(false)
      const fetchByIds = vi.fn(async (ids: number[]) => ids.filter(id => id !== 99).map(id => ({ id })))

      expect(await CmsDbResolver.resolveByIds(CMS_PERMISSION_ERROR_GROUP, 'notFound', fetchByIds, [2, 1, 2])).toEqual([2, 1])
      expect(fetchByIds).toHaveBeenCalledWith([2, 1])

      await expect(
        CmsDbResolver.resolveByIds(CMS_PERMISSION_ERROR_GROUP, 'notFound', fetchByIds, [1, 99])
      ).rejects.toThrow('Requested CMS permissions were not found.')
    })
  })

  describe('resolveByCodes', () => {
    it('returns empty array without querying when codes is undefined or contains only blanks', async () => {
      const fetchByCodes = vi.fn(async () => [])

      expect(await CmsDbResolver.resolveByCodes(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByCodes)).toEqual([])
      expect(await CmsDbResolver.resolveByCodes(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByCodes, ['  ', ''])).toEqual([])
      expect(fetchByCodes).not.toHaveBeenCalled()
    })

    it('resolves trimmed unique codes in order and throws when any code is missing', async () => {
      ErrorCenter.setIsConsole(false)
      const fetchByCodes = vi.fn(async () => [
        { id: 10, code: 'admin' },
        { id: 20, code: 'editor' }
      ])

      expect(
        await CmsDbResolver.resolveByCodes(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByCodes, [' admin ', 'editor', 'admin', ''])
      ).toEqual([10, 20])
      expect(fetchByCodes).toHaveBeenCalledWith(['admin', 'editor'])

      await expect(
        CmsDbResolver.resolveByCodes(CMS_ROLE_ERROR_GROUP, 'notFound', fetchByCodes, ['admin', 'missing'])
      ).rejects.toThrow('Requested CMS role was not found.')
    })
  })
})
