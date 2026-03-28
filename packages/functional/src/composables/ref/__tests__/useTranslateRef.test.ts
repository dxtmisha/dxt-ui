/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { Translate, type TranslateInstance } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import { useTranslateRef, t } from '../useTranslateRef'

vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: vi.fn()
  }
}))

describe('useTranslateRef', () => {
  let mockTranslateInstance: TranslateInstance
  const languageRef = ref('en')

  beforeEach(() => {
    vi.clearAllMocks()
    languageRef.value = 'en'
    vi.mocked(GeoRef.getLanguage).mockReturnValue(languageRef as any)

    mockTranslateInstance = {
      getListSync: vi.fn((names: any[]) => {
        const res: any = {}
        names.forEach((n: any) => {
          const key = Array.isArray(n) ? n[0] : n
          res[key] = key
        })
        return res
      }),
      getList: vi.fn(async (names: any[]) => {
        const res: any = {}
        const lang = languageRef.value
        names.forEach((n: any) => {
          const key = Array.isArray(n) ? n[0] : n
          res[key] = lang === 'ru' ? 'translated ru' : `translated ${key}`
        })
        return res
      })
    } as unknown as TranslateInstance

    vi.spyOn(Translate, 'getItem').mockReturnValue(mockTranslateInstance)
  })

  it('should initialize with sync translations from TranslateInstance', () => {
    const names = ['key1', 'key2']
    const translate = useTranslateRef(names)

    expect(translate.value).toEqual({ key1: 'key1', key2: 'key2' })
    expect(mockTranslateInstance.getListSync).toHaveBeenCalledWith(names, true)
  })

  it('should trigger async update if sync returned keys', async () => {
    const names = ['key1']
    const translate = useTranslateRef(names)

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated key1')
    })
    expect(mockTranslateInstance.getList).toHaveBeenCalled()
  })

  it('should use custom translateInstance if provided', async () => {
    const customInstance = {
      getListSync: vi.fn(() => ({ custom: 'custom' })),
      getList: vi.fn(async () => ({ custom: 'custom-async' }))
    } as unknown as TranslateInstance

    const translate = useTranslateRef(['custom'], customInstance)
    
    expect(translate.value).toEqual({ custom: 'custom' })
    expect(customInstance.getListSync).toHaveBeenCalled()
    expect(mockTranslateInstance.getListSync).not.toHaveBeenCalled()

    await vi.waitFor(() => {
      expect(translate.value.custom).toBe('custom-async')
    })
  })

  it('should update translations when language changes', async () => {
    const names = ['key1']
    const translate = useTranslateRef(names)

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated key1')
    })

    languageRef.value = 'ru'

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated ru')
    }, { timeout: 2000 })
  })

  it('should work with shorthand t and use default instance', () => {
    const names = ['key1']
    const translate = t(names)
    expect(translate.value).toEqual({ key1: 'key1' })
    expect(mockTranslateInstance.getListSync).toHaveBeenCalled()
  })
})
