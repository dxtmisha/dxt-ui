/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { Translate } from '@dxtmisha/functional-basic'
import { GeoRef } from '../../../classes/ref/GeoRef'
import { useTranslateRef, t } from '../useTranslateRef'

vi.mock('@dxtmisha/functional-basic', () => ({
  Translate: {
    getListSync: vi.fn((names: any[]) => {
      const res: any = {}
      names.forEach((n: any) => {
        const key = Array.isArray(n) ? n[0] : n
        res[key] = key
      })
      return res
    }),
    getList: vi.fn()
  },
  Geo: {
    get: vi.fn(() => ({ country: 'US', language: 'en' })),
    getLanguage: vi.fn(() => 'en'),
    getLocation: vi.fn(() => 'US'),
    set: vi.fn(),
    getItem: vi.fn(() => ({ country: 'US', language: 'en' }))
  }
}))

vi.mock('../../../classes/ref/GeoRef', () => ({
  GeoRef: {
    getLanguage: vi.fn()
  }
}))

describe('useTranslateRef', () => {
  const languageRef = ref('en')

  beforeEach(() => {
    vi.clearAllMocks()
    languageRef.value = 'en'
    vi.mocked(GeoRef.getLanguage).mockReturnValue(languageRef as any)

    vi.mocked(Translate.getList).mockImplementation(async (names: any[]) => {
      const res: any = {}
      const lang = languageRef.value
      names.forEach((n: any) => {
        const key = Array.isArray(n) ? n[0] : n
        res[key] = lang === 'ru' ? 'translated ru' : `translated ${key}`
      })
      return res
    })
  })

  it('should initialize with sync translations', () => {
    const names = ['key1', 'key2']
    const translate = useTranslateRef(names)

    expect(translate.value).toEqual({ key1: 'key1', key2: 'key2' })
    expect(Translate.getListSync).toHaveBeenCalledWith(names, true)
  })

  it('should trigger async update if sync returned keys', async () => {
    const names = ['key1']
    const translate = useTranslateRef(names)

    await vi.waitFor(() => {
      expect(translate.value.key1).toBe('translated key1')
    })
    expect(Translate.getList).toHaveBeenCalled()
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

  it('should work with shorthand t', () => {
    const names = ['key1']
    const translate = t(names)
    expect(translate.value).toEqual({ key1: 'key1' })
  })
})
