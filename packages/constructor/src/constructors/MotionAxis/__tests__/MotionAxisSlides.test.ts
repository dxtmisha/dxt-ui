// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { MotionAxisSlides } from '../MotionAxisSlides'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onUpdated: (fn: () => void) => fn()
  }
})

describe('MotionAxisSlides', () => {
  it('should test slides list calculations', () => {
    const mockStatus = {
      get: () => 'slide-1'
    } as any

    const slides = new MotionAxisSlides(mockStatus, { 'slide-1': () => null })
    expect(slides.findIndex('slide-1')).toBe(0)
    expect(slides.getByIndex(1)).toBe('slide-1')

    slides.add('slide-2')
    expect(slides.item.value).toEqual(['slide-1', 'slide-2'])

    slides.reset()
    expect(slides.item.value).toEqual([])
  })
})
