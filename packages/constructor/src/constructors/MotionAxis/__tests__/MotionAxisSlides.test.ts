// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { MotionAxisSlides } from '../MotionAxisSlides'
import type { MotionAxisStatus } from '../MotionAxisStatus'
import type { MotionAxisSlots } from '../types'

describe('MotionAxisSlides', () => {
  it('should initialize slide keys from slots and resolve indices cleanly', () => {
    const mockStatus = {
      get: vi.fn(() => 'slide-2')
    } as unknown as MotionAxisStatus
    const statusGetter = vi.fn(() => mockStatus)

    const slides = new MotionAxisSlides(statusGetter, {
      'slide-1': () => null,
      'slide-2': () => null,
      'slide-3': () => null
    })

    // status getter should not be called in constructor
    expect(statusGetter).not.toHaveBeenCalled()
    expect(slides.get().value).toEqual(['slide-1', 'slide-2', 'slide-3'])

    expect(slides.findIndex('slide-1')).toBe(0)
    expect(slides.findIndex('missing')).toBe(-1)
    expect(slides.findIndex()).toBe(1)

    expect(slides.getByIndex(1)).toBe('slide-3')
    expect(slides.getByIndex(-1)).toBe('slide-1')

    // Wrap-around forward from last slide
    vi.mocked(mockStatus.get).mockReturnValue('slide-3')
    expect(slides.getByIndex(1)).toBe('slide-1')

    // Wrap-around backward from first slide
    vi.mocked(mockStatus.get).mockReturnValue('slide-1')
    expect(slides.getByIndex(-1)).toBe('slide-3')

    // Fallback to first slide when active slide is not found
    vi.mocked(mockStatus.get).mockReturnValue('unknown')
    expect(slides.getByIndex(1)).toBe('slide-1')
  })

  it('should support manual add, reset, and dynamic slots update', () => {
    const mockStatus = {
      get: () => undefined
    } as unknown as MotionAxisStatus
    const slots = reactive<MotionAxisSlots>({ 'slide-1': () => null })

    const slides = new MotionAxisSlides(() => mockStatus, slots)
    expect(slides.item.value).toEqual(['slide-1'])

    slides.add('slide-2')
    expect(slides.item.value).toEqual(['slide-1', 'slide-2'])

    slides.reset()
    expect(slides.item.value).toEqual([])
    expect(slides.getByIndex(1)).toBeUndefined()

    slots['slide-3'] = () => null
    slides.update()
    expect(slides.item.value).toEqual(['slide-1', 'slide-3'])
  })

  it('should handle undefined slots gracefully', () => {
    const mockStatus = {
      get: () => undefined
    } as unknown as MotionAxisStatus
    const slides = new MotionAxisSlides(() => mockStatus)

    expect(slides.item.value).toEqual([])
    expect(slides.findIndex('slide-1')).toBe(-1)
    expect(slides.getByIndex(1)).toBeUndefined()
  })
})
