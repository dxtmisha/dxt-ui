// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { MotionAxisGo } from '../MotionAxisGo'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MotionAxisGo', () => {
  it('should test navigation helpers and directions', () => {
    const mockSlides = {
      getByIndex: vi.fn().mockReturnValue('slide-next'),
      findIndex: () => 0
    } as any
    const mockStatus = {
      set: vi.fn(),
      setFlash: vi.fn()
    } as any

    const go = new MotionAxisGo(
      { axis: 'x', direction: 'next' },
      { axis: ref('x'), direction: ref('next') } as any,
      ref(undefined),
      mockSlides,
      mockStatus
    )

    go.next()
    expect(mockStatus.set).toHaveBeenCalledWith('slide-next')
  })
})
