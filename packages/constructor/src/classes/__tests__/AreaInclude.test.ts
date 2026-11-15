// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { isRef, nextTick, provide, reactive, type Ref } from 'vue'
import { AreaInclude } from '../AreaInclude'
import { AREA_PROP_NAME } from '../../types/areaTypes'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    provide: vi.fn()
  }
})

describe('AreaInclude', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('static is()', () => {
    it('should return true when area is defined and non-empty', () => {
      expect(AreaInclude.is({ area: 'header' })).toBe(true)
    })

    it('should return false when area is empty string or undefined', () => {
      expect(AreaInclude.is({ area: '' })).toBe(false)
      expect(AreaInclude.is({ area: undefined })).toBe(false)
      expect(AreaInclude.is(undefined)).toBe(false)
    })
  })

  it('should provide a reactive ref with the area value on initialization when props.area is defined', () => {
    const props = reactive({ area: 'test-area-initial' })
    new AreaInclude(props)

    expect(provide).toHaveBeenCalledTimes(1)
    const [key, providedValue] = vi.mocked(provide).mock.calls[0] as [string, Ref<string | undefined>]
    expect(key).toBe(AREA_PROP_NAME)
    expect(isRef(providedValue)).toBe(true)
    expect(providedValue.value).toBe('test-area-initial')
  })

  it('should provide a reactive ref even when props.area is undefined on initialization', () => {
    const props = reactive<{ area?: string }>({ area: undefined })
    new AreaInclude(props)

    expect(provide).toHaveBeenCalledTimes(1)
    const [key, providedValue] = vi.mocked(provide).mock.calls[0] as [string, Ref<string | undefined>]
    expect(key).toBe(AREA_PROP_NAME)
    expect(isRef(providedValue)).toBe(true)
    expect(providedValue.value).toBeUndefined()
  })

  it('should update the provided ref value when props.area changes reactively without calling provide again', async () => {
    const props = reactive<{ area?: string }>({ area: 'first-area' })
    new AreaInclude(props)

    expect(provide).toHaveBeenCalledTimes(1)
    const providedValue = vi.mocked(provide).mock.calls[0]?.[1] as Ref<string | undefined>
    expect(providedValue.value).toBe('first-area')

    props.area = 'second-area'
    await nextTick()

    expect(provide).toHaveBeenCalledTimes(1)
    expect(providedValue.value).toBe('second-area')

    props.area = undefined
    await nextTick()

    expect(provide).toHaveBeenCalledTimes(1)
    expect(providedValue.value).toBeUndefined()
  })
})
