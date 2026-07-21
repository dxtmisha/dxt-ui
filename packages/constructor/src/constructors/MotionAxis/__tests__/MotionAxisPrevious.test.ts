// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { MotionAxisPrevious } from '../MotionAxisPrevious'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    watch: (_src: any, cb: any) => cb()
  }
})

describe('MotionAxisPrevious', () => {
  it('should test previous active slide status tracking', () => {
    const mockStyles = {
      add: vi.fn(),
      remove: vi.fn()
    } as any

    const prev = new MotionAxisPrevious(mockStyles)
    prev.set('slide-old')
    expect(prev.is('slide-old')).toBe(true)
    expect(prev.get()).toBe('slide-old')
  })
})
