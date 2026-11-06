import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Api, ServerStorage } from '@dxtmisha/functional-basic'
import { initScriptsJson } from '../initScriptsJson'

describe('initScriptsJson', () => {
  let storageRecord: Record<string, unknown>

  beforeEach(() => {
    storageRecord = {}
    ServerStorage.init(() => storageRecord)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should concatenate ServerStorage.toString() and Api.getHydration().toString()', () => {
      const serverSpy = vi
        .spyOn(ServerStorage, 'toString')
        .mockReturnValue('<script id="__server-storage__" type="application/json">{"theme":"dark"}</script>')
      const hydrationObj = Api.getHydration()
      const apiSpy = vi
        .spyOn(hydrationObj, 'toString')
        .mockReturnValue('<script id="__api-hydration__" type="application/json">{"users":[]}</script>')

      const result = initScriptsJson()

      expect(serverSpy).toHaveBeenCalledTimes(1)
      expect(apiSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(
        '<script id="__server-storage__" type="application/json">{"theme":"dark"}</script>'
        + '<script id="__api-hydration__" type="application/json">{"users":[]}</script>'
      )
    })

    it('should serialize real ServerStorage and Api hydration state into script tags', () => {
      const html = initScriptsJson()

      expect(typeof html).toBe('string')
      expect(html).toContain(ServerStorage.toString())
      expect(html).toContain(Api.getHydration().toString())
    })
  })

  describe('Empty and boundary states', () => {
    it('should return empty string when both serializers return empty strings', () => {
      vi.spyOn(ServerStorage, 'toString').mockReturnValue('')
      vi.spyOn(Api.getHydration(), 'toString').mockReturnValue('')

      expect(initScriptsJson()).toBe('')
    })

    it('should return only ServerStorage script when Api hydration is empty', () => {
      vi.spyOn(ServerStorage, 'toString').mockReturnValue('<script>1</script>')
      vi.spyOn(Api.getHydration(), 'toString').mockReturnValue('')

      expect(initScriptsJson()).toBe('<script>1</script>')
    })

    it('should return only Api hydration script when ServerStorage is empty', () => {
      vi.spyOn(ServerStorage, 'toString').mockReturnValue('')
      vi.spyOn(Api.getHydration(), 'toString').mockReturnValue('<script>2</script>')

      expect(initScriptsJson()).toBe('<script>2</script>')
    })
  })
})

