// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { reactive, nextTick, provide } from 'vue'
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

  it('should provide the area value on initialization if props.area is defined', () => {
    const props = reactive({ area: 'test-area-initial' })
    new AreaInclude(props)

    expect(provide).toHaveBeenCalledTimes(1)
    expect(provide).toHaveBeenCalledWith(AREA_PROP_NAME, 'test-area-initial')
  })

  it('should not provide any value on initialization if props.area is undefined', () => {
    const props = reactive({ area: undefined })
    new AreaInclude(props)

    expect(provide).not.toHaveBeenCalled()
  })

  it('should update the provided value when props.area changes reactively', async () => {
    const props = reactive({ area: 'first-area' })
    new AreaInclude(props)

    expect(provide).toHaveBeenCalledTimes(1)
    expect(provide).toHaveBeenLastCalledWith(AREA_PROP_NAME, 'first-area')

    props.area = 'second-area'
    await nextTick()

    expect(provide).toHaveBeenCalledTimes(2)
    expect(provide).toHaveBeenLastCalledWith(AREA_PROP_NAME, 'second-area')
  })
})
